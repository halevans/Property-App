import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { checkTokenValidity } from '../ApiConfig/api';
import { getUserInfo } from '../ApiConfig/api';
import PropertyContainer from '../components/PropertyContainer';
import UserDetails from '../components/UserDetails';


function ProfilePage() {

  const navigate = useNavigate();
  const [authenticatedUser, setAuthenticated] = useState(null);
  const [profileDetails, setProfileDetails] = useState({
    first_name: '...loading',
    last_name: '...loading',
    email: '...loading',
    phone_number: '...loading'
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      checkTokenValidity(storedUser.token)
      .then((response) => {
        setAuthenticated(storedUser);

        // Get user info
        getUserInfo(storedUser.id ,storedUser.token)
        .then((response) => {
          //store user info in component state
          setProfileDetails({
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            phone_number: response.data.phone_number
          }) 
        })
        .catch((error) => {
          //handle error
          console.log(error);
        });
      })
      .catch((error) => {
        localStorage.removeItem("user");
        navigate("/");
      })}
    else {
      navigate("/");
    }
  }, [navigate]);


  if (!authenticatedUser) {
    return null
  } else {
    return (
      <>
        <Container className='py-4'>
          <h1><i class="fa-solid fa-user"></i>&nbsp;&nbsp; Your Profile</h1>
        </Container>
        <UserDetails profileDetails={profileDetails} setProfileDetails={setProfileDetails}/>
        <PropertyContainer user={authenticatedUser} profile_page={true}/>
      </>
    )
  }
}

export default ProfilePage;