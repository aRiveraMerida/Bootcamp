import { useState, useRef, useEffect } from 'react'

const UseRefCode = () => {
  const [name, setName] = useState('Antonio')
  const textInput = useRef(null)
  const textFocus = useRef(null)

  useEffect(() => {
    if (textInput.current) textInput.current.focus();
  }, [])

  const handleClick = () => {
    // if(textInput && textInput.current && textInput.current.value) {
    //   const inputValue = textInput.current.value
    // }
    const inputValue = textInput.current?.value;
    console.log(textInput)
    if (inputValue) setName(inputValue)

    console.log('name', name)
  }

  return (
    <div>
      <h3>Hola soy {name}</h3>
      <input type="text" placeholder='name' ref={textInput} />
      <input type="text" placeholder='surname' ref={textFocus} />
      <button onClick={handleClick}>Show Name</button>
    </div>
  )
}

export default UseRefCode