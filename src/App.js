import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import TopBar from './components/TopBar';
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact'
import SideBar from './components/SideBar';

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const [activeSection, setActiveSection] = useState(null);

  const scrollHandler = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionRef);
    
  }
  
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= section1.current.offsetTop && scrollPosition < section2.current.offsetTop) {
        setActiveSection(section2);
      } else if (scrollPosition >= section2.current.offsetTop && scrollPosition < section3.current.offsetTop) {
        setActiveSection(section3);
      } else if (scrollPosition >= section3.current.offsetTop && scrollPosition < section4.current.offsetTop) {
        setActiveSection(section4);
      } else if (scrollPosition >= section4.current.offsetTop) {
        setActiveSection(section5);
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollPosition = window.scrollY;

  return (
    <div className="grid grid-cols-[10vw_90vw] grid-rows-[1fr_auto] bg-[#111111] relative w-screen">
      <div className={`${scrollPosition >= 500 ? 'fixed' : 'hidden' } bottom-5 right-2 z-50 cursor-pointer`} onClick={() => scrollHandler(section1)}>
        BacK to Top
      </div>
      <div className='bg-[#080808] col-[1_/_span_1] row-[1_/span_2] h-screen sticky flex flex-col top-0'>
        <SideBar scrollHandler={scrollHandler} section2={section2} section3={section3} section4={section4} section5={section5} activeSection={activeSection} />
      </div>
      <div className='row-[1_/_span_1] col-span-[2_/_span_3] sticky top-0 z-50'>
      <TopBar />
      </div>
      <div className='row-[2_/_span_1] col-span-[2_/_span_3] px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] w-full flex flex-col gap-10'>
        <section ref={section1} >
        <Home scrollHandler={scrollHandler} section5={section5} />
        </section>
        <section id='about' ref={section2}>
      <About />
      </section>
      <section id='projects' ref={section3}>
      <Projects />
      </section>
      <section id='experience' ref={section4}>
      <Experience />
      </section>
      <div ref={section5}>
      <Contact />
      </div>
      </div>
        </div>
  );
}

export default App;
