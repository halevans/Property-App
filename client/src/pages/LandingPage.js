import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenValidity } from '../ApiConfig/api';
import PropertyContainer from '../components/PropertyContainer';

function LandingPage() {

  const navigate = useNavigate();

  const [authenticatedUser, setAuthenticated] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      checkTokenValidity(storedUser.token)
      .then((response) => {
        setAuthenticated(storedUser);
      })
      .catch((error) => {
        localStorage.removeItem("user");
        navigate("/login");
      })}
    else {
      navigate("/login");
    }
    }, [navigate]);



  
  if (!authenticatedUser) {
    return null
  } else {
    return (
      <PropertyContainer user={authenticatedUser}/>
    )
  }
}

export default LandingPage;