import "./App.css";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ServicesList from "./pages/services/ServicesList";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Navbar from "./header/Navbar";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
