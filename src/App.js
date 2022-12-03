// import home page
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <Routes>
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
