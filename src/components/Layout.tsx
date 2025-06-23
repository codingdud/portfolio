import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import gsap from 'gsap';
import Header from './Header';
import Footer from './Home/Footer2';
import ConversationWidget from './ConversationWidget';

function Layout() {
  useEffect(() => {
    gsap.fromTo(
      '.main-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <ConversationWidget/>
      <main className="main-container container mx-auto px-4 py-8">
        <Outlet />
      </main>
        <Footer/>
    </div>
  );
}

export default Layout;