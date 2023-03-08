import React from 'react'

function PropertyItem(props) {
  return (
    <>
    <h1>PropertyItem</h1>
    <p>{props.propertyDetails.asking_price}</p>
    <p>{props.propertyDetails.no_rooms}</p>
    <p>{props.propertyDetails.img_url}</p>
    </>
  )
}

export default PropertyItem