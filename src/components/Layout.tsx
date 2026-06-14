import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Home/Footer2';
import ConversationWidget from './ConversationWidget';
import { pageTransition } from '../utils/animations';

const CHATBOT_ENABLED = false;

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-canvas text-ink font-body" style={{ overflowX: 'clip' }}>
      <Header />
      {CHATBOT_ENABLED && <ConversationWidget />}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="main-container max-w-[1199px] mx-auto px-6 pb-8"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default Layout;
