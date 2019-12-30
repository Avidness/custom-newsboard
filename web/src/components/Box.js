import React from 'react'

const Box = props => {
  return (
    <div style={{ border: '1px', backgroundColor: '#fff' }}>
      {props.children}
    </div>
  )
}

export default Box
