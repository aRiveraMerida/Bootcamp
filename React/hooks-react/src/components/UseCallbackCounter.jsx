import React, { useState, useCallback } from 'react'

const ButtonCounter = React.memo(({ handleClick, name }) => {
  console.log('Rerender', name)
  return <button onClick={handleClick}>{name}</button>
})


const UseCallbackCounter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)


  const handleClickOneUseCallback = useCallback(() => setCounterOne(counterOne + 1), [counterOne])
  const handleClickTwoUseCallback = useCallback(() => setCounterTwo(counterTwo + 1), [counterTwo])
  return (
    <div>
      {counterOne} || {counterTwo}
      <ButtonCounter handleClick={handleClickOneUseCallback} name="counter one" />
      <ButtonCounter handleClick={handleClickTwoUseCallback} name="counter two" />
    </div>
  )
}

export default UseCallbackCounter