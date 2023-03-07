import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    } else {
      console.log("Redirecting to Login Page...")
      navigate("/login");
    }
  }, [navigate]);

  if (!authenticated) {
    return null
  } else {
    return (
      <div>LandingPage</div>
    )
  }
}

export default LandingPage;