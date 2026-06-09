import React from 'react'
import UserCard from './Component/User-Card/UserCard'
import Login from './Component/Login'
import Register from './Component/Register'

function App() {
  return (
    <>
        <Router>
            <Routes>
              <Route path ='/Login'/>
            </Routes>
        </Router>
    </>
  )
}

export default App
