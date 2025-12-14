import './App.css';
import About from './component/about';
import Awards from './component/awards';
import DevelopmentProcess from './component/development';
import Experience from './component/experience';
import Footer from './component/footer';
import Header from './component/header';
import HeroSection from './component/hero';
import Projects from './component/projects';
import Skills from './component/skills';
import Testimonials from './component/testimonials';

function App() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Experience/>
    <DevelopmentProcess/>
    <Projects/>
    <Testimonials/>
    <Awards/>
    <Footer/>
   </div>
  );
}

export default App;
