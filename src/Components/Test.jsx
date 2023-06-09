import React from 'react'

const Test = ({properties}) => {
  return (
    <div>Properties
    {properties.map((product)=>{
        return(
            <div key={product.id}>
                <h1>{product.title}</h1>
            </div>
        )
    })}</div>
  )
}

export default Test