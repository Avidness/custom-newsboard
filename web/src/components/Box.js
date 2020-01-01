import React from 'react'

const Box = props => {
  return (
    <div style={{ border: '1px', float: 'right', backgroundColor: '#fff' }}>
      <div className="col-sm">{props.children}</div>
    </div>
  )
}

export default Box
