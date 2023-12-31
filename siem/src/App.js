// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WazuhActive from './components/wazuh_active';
import Home from './pages/Home';
import Agents from './pages/Agents';
import BackToTop from './components/scrollbutton';
import SIEM from './pages/SIEM';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wazuh-active" element={<WazuhActive />} />
          <Route path="/agents" element={<Agents />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/siem" element={<SIEM/>}/>
        </Routes>
        <BackToTop />
      </Router>
    </div>
  );
}

export default App;
