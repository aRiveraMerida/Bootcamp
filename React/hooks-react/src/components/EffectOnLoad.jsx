import { useState, useEffect } from "react"

export const EffectOnLoad = () => {
  const [name, setName] = useState('Alberto')

  useEffect(() => {
    setTimeout(() => { setName('Antonio') }, 2000)
  }, [])

  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}