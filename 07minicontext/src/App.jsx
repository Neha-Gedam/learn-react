import { useState } from 'react'

import './App.css'
import Login from './componants/Login'
import Profile from './componants/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h1>React context video</h1>

      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
