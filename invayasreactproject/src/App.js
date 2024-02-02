import "./App.css";
import {Route,  Routes } from 'react-router-dom';

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ServicesList from "./pages/services/ServicesList";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
// import Navbar from "./header/Navbar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
