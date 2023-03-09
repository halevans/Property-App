import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/marketplace" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App;