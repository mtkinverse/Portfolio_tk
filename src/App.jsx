import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { MdOutlineDescription } from 'react-icons/md';

function App() {
  const resumeButton = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!resumeButton.current || !footerRef.current) return;
      const { scrollTop, scrollHeight } = document.documentElement;
      const clientHeight = window.innerHeight;
      const nearFooter = scrollTop + clientHeight >= scrollHeight - footerRef.current.offsetHeight;
      resumeButton.current.style.display = nearFooter ? 'none' : 'block';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-bgTheme-light min-h-screen">
        <Hero />
        <Experience />
        <Skills />
        <Tools />
        <Projects />
      </main>
      <Footer footerRef={footerRef} />

      {/* Floating resume button */}
      <button
        ref={resumeButton}
        className="fixed bottom-5 right-5 bg-bgTheme-dark border border-bgTheme-accent text-white hover:bg-bgTheme-accent transition-all duration-300 rounded-full px-3 py-2.5 shadow-lg shadow-black/30 text-center z-40"
      >
        <a href="/Resume.pdf" download="Resume.pdf" className="flex flex-col items-center">
          <MdOutlineDescription size={22} />
          <span className="text-xs mt-0.5">Resume</span>
        </a>
      </button>
    </>
  );
}

export default App;
