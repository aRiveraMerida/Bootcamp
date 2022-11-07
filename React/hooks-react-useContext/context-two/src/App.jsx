import './App.css'
import ChangeUser from './components/ChangeUser'
import HelloUser from './components/HelloUser'
import List from './components/List'
import { MyContextProvider } from './context/MyContext'
function App() {

  return (
    <div className="App">
    <MyContextProvider>
      <HelloUser />
      <List />
      <ChangeUser />
    </MyContextProvider>
      
    </div>
  )
}

export default App
