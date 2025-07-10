import React, { useState } from 'react';
import { useConversation } from '@elevenlabs/react';
import { FiPhone, FiChevronUp, FiMic, FiMicOff, FiVolume2 } from 'react-icons/fi';
import Agent from "/Vector.png"

const agentId = import.meta.env.VITE_ELEVEN_LABS_AGENT_ID;

const ConversationWidget: React.FC = () => {
  const [transcript, setTranscript] = useState<{type: 'user' | 'agent' | 'system', message: string}[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to agent');
      setTranscript((prev) => [...prev, {type: 'system', message: 'Connected! You can now speak or type messages to interact with the AI agent.'}]);
    },
    onDisconnect: () => {
      console.log('Disconnected from agent');
      setTranscript((prev) => [...prev, {type: 'system', message: 'Disconnected.'}]);
    },
    onMessage: (msg) => {
      console.log('Received message from agent:', msg);
      if (msg.message) {
        setTranscript((prev) => [...prev, {type: 'agent', message: msg.message}]);
      }
    },
    onError: (err: any) => {
      console.error('Conversation error:', err);
      setError(typeof err === 'string' ? err : err?.message || 'Unknown error');
    },
  });

  const start = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ 
        agentId,
        connectionType: 'webrtc'
      });
    } catch (err: any) {
      setError(err.message || 'Microphone access denied');
    }
  };

  const stop = async () => {
    await conversation.endSession();
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const sendChat = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setTranscript((prev) => [...prev, {type: 'user', message: userMessage}]);
    setInput('');
    
    // Send text message to ElevenLabs agent
    if (conversation.status === 'connected' && conversation.sendUserMessage) {
      try {
        await conversation.sendUserMessage(userMessage);
      } catch (err) {
        console.error('Failed to send text message:', err);
        setError('Failed to send message');
      }
    } else {
      // Fallback when not connected
      setTimeout(() => {
        setTranscript((prev) => [...prev, {type: 'agent', message: 'Please start a voice call to enable full AI interaction. I can respond to both voice and text when connected!'}]);
      }, 500);
    }
  };

  return (
    <div
      className={`fixed  top-20 right-4 z-50 transition-all duration-300 ease-in-out
        rounded-xl shadow-2xl
        ${isExpanded ? 'bg-gray-300 w-80 p-3 opacity-100 scale-100 text-[#13182D]' : 'bg-[#13182D] md:w-64 w-12 md:p-3 p-2 opacity-90 scale-95 text-white'}
        overflow-hidden`}
    >
      {isExpanded && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full">
              <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={Agent}
                  alt="Agent Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm">Ask about me?</div>
            </div>

            <button
              onClick={toggleExpanded}
              aria-label="Toggle"
              className={`h-8 min-w-8 flex items-center justify-center rounded-full 
                text-sm text-blue-600 border border-blue-300 bg-blue-100 
                hover:bg-blue-200 transition-transform duration-300 
                ${!isExpanded ? '-rotate-180' : ''}`}
            >
              <FiChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="mt-4 space-y-3">
            <button
              onClick={conversation.status === 'connected' ? stop : start}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm 
                rounded-lg text-white bg-black hover:bg-gray-800 transition"
            >
              {conversation.status === 'connected' ? (
                <FiMicOff className="text-lg animate-pulse" />
              ) : (
                <FiMic className="text-lg" />
              )}
              {conversation.status === 'connected' ? 'End Call' : 'Start a Call'}
            </button>

            <div className="text-xs text-left flex items-center gap-3">
              <div>
                Status:{' '}
                <span
                  className={`${
                    conversation.status === 'connected' ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {conversation.status}
                </span>
              </div>
              {conversation.isSpeaking && (
                <div className="text-green-500 flex items-center gap-1">
                  <FiVolume2 className="animate-pulse" />
                  Speaking
                </div>
              )}
              {conversation.status === 'connected' && !conversation.isSpeaking && (
                <div className="text-blue-500 flex items-center gap-1">
                  <FiMic className="animate-pulse" />
                  Listening
                </div>
              )}
            </div>

            {error && <div className="text-red-500 text-xs">{error}</div>}

            <div className="bg-gray-100 rounded p-2 h-32 overflow-y-auto text-xs text-left text-[#13182D] space-y-1">
              {transcript.map((item, i) => (
                <div key={i} className={`flex gap-2 ${
                  item.type === 'user' ? 'justify-end' : 'justify-start'
                }`}>
                  {item.type === 'agent' && (
                    <img src={Agent} alt="Agent" className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0" />
                  )}
                  <div className={`max-w-[80%] px-2 py-1 rounded text-xs ${
                    item.type === 'user' 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : item.type === 'agent'
                      ? 'bg-white border rounded-bl-none'
                      : 'bg-gray-200 text-gray-600 text-center w-full'
                  }`}>
                    {item.message}
                  </div>
                  {item.type === 'user' && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0 text-white text-[8px] flex items-center justify-center font-bold">
                      U
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-1.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring text-[#13182D] bg-white"
              />
              <button
                onClick={sendChat}
                className="bg-blue-600 text-white text-sm px-3 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}

      {/* Collapsed State */}
      {!isExpanded && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 md:flex hidden">
            <img
              src={Agent}
              alt="Agent Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-white">Want to know me?</span>
          </div>
          <button
            onClick={toggleExpanded}
            className="flex items-center justify-center md:gap-1 gap-0 md:px-3 px-2 md:py-1 py-2 rounded-full bg-[#E5E5E5] text-[#2C1D24] text-sm hover:bg-gray-300 transition"
          >
            <FiPhone className="text-base" />
            <span className="hidden md:inline ml-1">Ask anything</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ConversationWidget;
