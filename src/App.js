/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { LandingPage } from './components/LandingPage'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Home } from './components/Home'
import { HomeNavbar } from './components/HomeNavbar'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/HomeNavbar" element={<HomeNavbar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
