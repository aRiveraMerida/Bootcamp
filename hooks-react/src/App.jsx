import './App.css'
import { EffectFetching } from './components/EffectFetching'
import { EffectOnLoad } from './components/EffectOnLoad'
import EffectUnmount from './components/EffectUnmount'
import { Count } from './components/EffectUpdate'
import { MyState } from './components/MyState'
import { ObjectState } from './components/ObjectState'

function App() {

  return (
    <div className="App">
      <>
        <h3>State</h3>
        <MyState />
        <h3>State - Object</h3>
        <ObjectState />
        <h3>Effect - onLoad</h3>
        <EffectOnLoad />
        <h3>Effect - unmount</h3>
        <EffectUnmount />
        <h3> Effect- update</h3>
        <Count />
        <h3>Effect - Fetching Pokemon</h3>
        <EffectFetching />
      </>
    </div>
  )
}

export default App
