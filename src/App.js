import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import {themeContext} from './Context';
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
    style ={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    className="App">
     
     <Navbar />
     <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
   <Contact />
   <Footer/>
    </div>
  );
}

export default App;
