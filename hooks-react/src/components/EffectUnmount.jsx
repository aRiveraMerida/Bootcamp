import { useState } from 'react'
import { Effectmessage } from './EffectMessage';

const EffectUnmount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <Effectmessage />}
      <button onClick={() => setVisible(!visible)}>Change Visibility</button>
    </>
  )
}

export default EffectUnmount