import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'
import PropertyItem from './PropertyItem'

function PropertyContainer(props) {
  const [saleProperties, setSaleProperties] = useState([])

  useEffect(() => {
    getProperties(props.user.token)
    .then((response) => {
      setSaleProperties(response.data)
      console.log(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [])

  console.log(saleProperties)
  const allProperties = saleProperties.map((property, index) => {
    return <PropertyItem propertyDetails={property} key={index}/>})

  return (
    (allProperties)
  )
}

export default PropertyContainer