
import Header from './components/Header';
import Body from './components/Body';
import SocialIcon from './components/SocialIcon';
import { About } from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';


export default function Home() {
  return (
    <>
    <SocialIcon/>
    <Header/>
    <Body/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </>
  );
}
