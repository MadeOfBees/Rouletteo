// import home page
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route
          path="/Rouletteo"
          element={<Home />}
        />
        <Route
          path="/AboutUs"
          element={<AboutUs />}
        />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
