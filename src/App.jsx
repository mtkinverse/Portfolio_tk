import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { MdOutlineDescription } from 'react-icons/md';

function App() {

  const resumeButton = useRef(null);
  const footerRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - footerRef.current.offsetHeight) {
      resumeButton.current.style.display = 'none';
    }
    else resumeButton.current.style.display = 'block';
    console.log(scrollTop + clientHeight,scrollHeight - 10)
        
  }
  
  useEffect(()=>{ 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
      <Navbar/>
      <div id="wrapper" className="mx-auto px-0 py-2 my-2 gap-6 max-w-[1300px] w-full space-y-10">
        <Hero/>
        <Skills/>
        <Projects/>
      </div>
      <Footer footerRef={footerRef}/>
      <button ref={resumeButton} className="fixed bottom-4 right-4 hover:shadow-xl fadedLight hover:bg-gradient-to-l transition-all duration-300 rounded-full px-2 py-2 text-bgTheme-dark text-center">
        <a href="/Resume.pdf" download='Resume.pdf'>
        <MdOutlineDescription className='mx-auto' size={25}/>
        <p className='text-sm'>Resume</p>
        </a>
      </button>
    </>

  )
}

export default App
