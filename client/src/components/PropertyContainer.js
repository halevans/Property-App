import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'
import PropertyItem from './PropertyItem'
import { Button} from "react-bootstrap";

function PropertyContainer(props) {
  const [properties, setSaleProperties] = useState([])

  useEffect(() => {
    getProperties(props.user.token)
    .then((response) => {
      setSaleProperties(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [props.user.token])

  let propertiesToRender
  if (props.profile_page) {
     propertiesToRender = properties.filter(item => item.user_id === props.user.id)
  } else {
    propertiesToRender = properties.filter(item => item.user_id !== props.user.id)
  }

  const allProperties = propertiesToRender.map((property, index) => {
    return <PropertyItem propertyDetails={property} 
                         profile_page={props.profile_page} 
                         user={props.user} 
                         key={index}/>})

  

  return (
    <>
      {!props.profile_page ? <h1>Properties on the Market...</h1> : <h1>Your Properties...</h1>}
      {allProperties}
      {props.profile_page && <div style={{ padding: '0.5rem' }}>
                                <Button onClick={null} variant="primary" size="m">Add Property<i className="bi bi-plus-circle-fill ml-2"></i></Button>
                              </div>}
      </>

  )
}

export default PropertyContainer