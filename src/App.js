import "./App.css";

import Compisition from "./components/Compisition";
import Messages from "./components/Messages";
import Navabar from "./components/Navabar";
import Property from "./components/Property";
import Carsoules from "./components/carousels/Carsoules";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Client from "./components/Client";



function App() {
  return (
    <div>
  

      <Navabar />
      <Header />
      <Carsoules />
      <Compisition />
      <Messages />
      <Property />
<Client/>
      <Footer />
    </div>
  );
}

export default App;
