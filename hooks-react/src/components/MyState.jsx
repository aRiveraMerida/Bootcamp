import { useState } from "react"

export const MyState = () => {
  const [name, setName] = useState('Alberto')
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