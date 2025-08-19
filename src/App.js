import './App.css';
import About from './component/about';
import DevelopmentProcess from './component/development';
import Header from './component/header';
import HeroSection from './component/hero';
import Projects from './component/projects';
import Skills from './component/skills';

function App() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <About/>
    <Skills/>
    <DevelopmentProcess/>
    <Projects/>
   </div>
  );
}

export default App;
