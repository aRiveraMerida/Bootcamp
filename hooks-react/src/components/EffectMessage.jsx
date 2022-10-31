import { useEffect } from "react"

export const Effectmessage = () => {
  useEffect(() => {
    console.log('Me monto en el DOM')

    return () => {
      console.log('Me desmonto del DOM')
    }
  }, [])
  return <h4>Soy un Mensaje</h4>
}