import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'
import PropertyItem from './PropertyItem'

function PropertyContainer(props) {
  const [saleProperties, setSaleProperties] = useState([])

  useEffect(() => {
    getProperties(props.user.token)
    .then((response) => {
      setSaleProperties(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [props.user.token])

  const allProperties = saleProperties.map((property, index) => {
    return <PropertyItem propertyDetails={property} user={props.user} key={index}/>})

  return (
    <>
      <h1>Properties on the Market...</h1>
      {allProperties}
      </>

  )
}

export default PropertyContainer