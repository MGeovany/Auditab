/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ModalsProvider } from '@mantine/modals'

import { useState } from 'react'
import { LandingPage } from './components/LandingPage'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Home } from './pages/Home'
import { Asset } from './pages/Asset'

import { addAssetModal } from './modals/addAssetModal'
import { Summary } from './pages/Summary'
import { Audit } from './pages/Audit'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(true)

  return (
    <ModalsProvider modals={{ addAssetModal }}>
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='signup' element={<Signup />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/asset' element={<Asset />} />
            <Route exact path='/summary' element={<Summary />} />
            <Route exact path='/audit' element={<Audit />} />
          </Routes>
        </Router>
      </div>
    </ModalsProvider>
  )
}

export default App
