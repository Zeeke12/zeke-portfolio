import './App.css';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import { motion } from 'framer-motion'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact'
import Slide from './components/Slide';
import { TabProvider } from './components/TabContext';

function App() {
  return (
    <TabProvider>
    <div className="grid grid-cols-[10vw_90vw] grid-rows-[1fr_auto] bg-[#111111] relative w-screen">
      <div className='bg-[#080808] col-[1_/_span_1] row-[1_/span_2] h-screen sticky top-0'>
      <SideBar />
      </div>
      <div className='row-[1_/_span_1] col-span-[2_/_span_3] sticky top-0 z-50'>
      <TopBar />
      </div>
      <div className='row-[2_/_span_1] col-span-[2_/_span_3]'>
        <Home />
      </div>
        </div>
    </TabProvider>
  );
}

export default App;
