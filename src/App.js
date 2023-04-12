import "./App.css";
import About from "./components/About";
import Carousels from "./components/Carsoules";

import Property from "./components/Property";
import Footer from "./components/Footer";
import Header from "./components/header/Header"

import Message from "./components/Message";
import Slider from "./components/slide/Slider";
// import Navbar from "./components/Navbar";

import { BrowserRouter as Router, } from 'react-router-dom';
function App() {
  return (
    <div className="p-5 gap-10">
      <Router>
      {/* <Navbar /> */}
      <Header/>
      </Router>
      
      <Carousels />
      <Message />
      <About />
      <Property />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
