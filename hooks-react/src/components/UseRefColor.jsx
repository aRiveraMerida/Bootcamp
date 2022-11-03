import { useRef } from 'react'
import '../App.css'

const UseRefColor = () => {
  const colorRef = useRef(null);

  const handleClick = () => {
    colorRef.current.className === 'box' ?
      colorRef.current.className = 'box-modify' :
      colorRef.current.className = 'box'
  }
  return (
    <>
      <div className='box' ref={colorRef}>
        I`m a Div
      </div>
      <button onClick={handleClick}>Colors 🎨</button>
    </>
  )
}

export default UseRefColor