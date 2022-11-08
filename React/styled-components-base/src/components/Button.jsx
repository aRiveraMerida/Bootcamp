import React from 'react'

export const Button = React.memo(
  ({ handleClick, name }) => {
    return (
      <span onClick={handleClick}>{name}</span>
    )
  }
) 