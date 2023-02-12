import React from 'react'
import { Badge } from 'react-bootstrap'

function BadgeExample({types}) {
  
  return (
    <>
    {/* <div>
        {types.map((elem, index) => (
            <button key={index}>
                <Badge bg={elem}>105</Badge>
                <p>{elem}</p>
            </button>
        ))}   
    </div> */}
    <div>
        {types.map((elem, index) => (
                <Badge key={index} bg={elem}>105</Badge>
        ))}   
    </div>
    </>
    
  )
}

export default BadgeExample