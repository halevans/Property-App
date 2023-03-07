import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={null} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App;