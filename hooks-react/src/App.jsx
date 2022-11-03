import './App.css'
import { EffectFetching } from './components/EffectFetching'
import { EffectOnLoad } from './components/EffectOnLoad'
import EffectUnmount from './components/EffectUnmount'
import { Count } from './components/EffectUpdate'
import { MyState } from './components/MyState'
import { ObjectState } from './components/ObjectState'
import Button from 'neoland-library/core/Button'
import MemoPage from './components/MemoPage'
import UseRefCode from './components/UseRefCode'
import UseRefSalary from './components/UseRefSalary'
import UseRefColor from './components/UseRefColor'

function App() {

  return (
    <div className="App">
      <>
        {/* <h3>State</h3>
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
        <h3>Library</h3>
        <Button>Soy Neoland</Button> */}
        {/* <MemoPage title="The Big Lewoski" poster="rota" review="Mi peli prefierida" initialScore='5' users /> */}
        {/* <UseRefCode /> */}
        {/* <UseRefSalary /> */}
        <UseRefColor />
      </>
    </div>
  )
}

export default App
