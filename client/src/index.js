import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AuditPage } from './pages/ListComponent/AuditPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuditPage/>
  </React.StrictMode>
)
