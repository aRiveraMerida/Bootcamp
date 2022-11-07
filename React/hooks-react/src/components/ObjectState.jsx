import { useState } from "react"

export const ObjectState = () => {
  const [avenger, setAvenger] = useState({
    name: 'Bruce',
    lastName: 'Banner',
    job: 'Scientist'
  })
  return (
    <>
      <h1>{avenger.name} || {avenger.lastName} || {avenger.job}</h1>
      <input
        type="text"
        value={avenger.name}
        onChange={(e) => setAvenger({
          ...avenger,
          name: e.target.value
        })}
      />
      <input
        type="text"
        value={avenger.lastName}
        onChange={(e) => setAvenger({
          ...avenger,
          lastName: e.target.value
        })}
      />
      <input
        type="text"
        value={avenger.job}
        onChange={(e) => setAvenger({
          ...avenger,
          job: e.target.value
        })}
      />
    </>
  )
}