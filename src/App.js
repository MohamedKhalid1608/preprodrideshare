import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import QuickInputComponent from './Components/QuickInputComponent/QuickInputComponent';
import InputComponent from './Components/InputComponent/InputComponent';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/predict" element={<InputComponent />} />
        <Route path="/quickpredict" element={<QuickInputComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

