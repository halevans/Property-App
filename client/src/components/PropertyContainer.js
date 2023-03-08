import React, { useEffect, useState } from 'react'
import { getProperties } from '../ApiConfig/api'

function PropertyContainer(props) {
  const [saleProperties, setSaleProperties] = useState(null)

  useEffect(() => {
    getProperties(props.user.token)
    .then((response) => {
    })
    .catch((error)=> {
    })
  })

  return (
    <div>PropertyContainer</div>
  )
}

export default PropertyContainer