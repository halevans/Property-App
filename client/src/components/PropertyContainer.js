import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'
import PropertyItem from './PropertyItem'
import { Button} from "react-bootstrap";
import { deleteProperty, getOffers } from '../ApiConfig/api';
import PropertyFormModal from './PropertyFormModal';


function PropertyContainer(props) {
  const [properties, setProperties] = useState([])
  const [showAddPropertyModal, setPropertyModal] = useState(false)

  useEffect(() => {
    getProperties(props.user.token)
    .then((response) => {
      if (props.profile_page) {
        setProperties(response.data.filter(item => item.user_id === props.user.id))
      } else {
        setProperties(response.data.filter(item => item.user_id !== props.user.id))
      }
      
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [props.user.token])

    // Handle the delete property
    const handleDeleteProperty = (e) => {
      // Display a confirmation message
      const confirmed = window.confirm('Are you sure you want to delete this property?');
      // Check if the user confirmed the deletion
      if (confirmed) {
        // If the user confirmed, call the deleteProperty function with the token and property ID
        console.log(e.target, e.target.id)
        deleteProperty(props.user.token, e.target.id)
        .then((response) => {
          console.log(`Deleted Propery house_id: ${e.target.id}`)
          setProperties(properties.filter(property => property.id != e.target.id))
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }

    const togglePropertyModalOpen = () => {
      setPropertyModal(true)
    }
  
    const togglePropertyModalClose = () => {
      setPropertyModal(false)
    }



  const allProperties = properties.map((property, index) => {
    return <PropertyItem propertyDetails={property} 
                         profile_page={props.profile_page} 
                         user={props.user}
                         handleDeleteProperty={handleDeleteProperty}
                         key={index}/>})

  

  return (
    <>
      {!props.profile_page ? <h1>Properties on the Market...</h1> : <h1>Your Properties...</h1>}
      {allProperties}
      {props.profile_page && <div style={{ padding: '0.5rem' }}>
                                <Button onClick={togglePropertyModalOpen} variant="primary" size="m">Add Property<i className="bi bi-plus-circle-fill ml-2"></i></Button>
                              </div>}
      <PropertyFormModal
              show={showAddPropertyModal}
              onHide={togglePropertyModalClose}
              user={props.user}
            />
      </>

  )
}

export default PropertyContainer