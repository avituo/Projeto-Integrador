import { Outlet } from 'react-router-dom'
import './App.css'

import M from 'materialize-css'

import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
