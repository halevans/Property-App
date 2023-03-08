import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenValidity } from '../ApiConfig/api';

function LandingPage() {

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    checkTokenValidity(storedUser.token)
    .then((response) => {
      setAuthenticated(storedUser);
    })
    .catch((error) => {
      localStorage.removeItem("user");
      navigate("/login");
    })
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