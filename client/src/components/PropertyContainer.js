import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'

function PropertyContainer(props) {
  const [saleProperties, setSaleProperties] = useState(null)

  useEffect(() => {
    console.log(props.user.token)
    getProperties(props.user.token)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  })

  return (
    <div>PropertyContainer</div>
  )
}

export default PropertyContainer