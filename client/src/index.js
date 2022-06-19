import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Show_Audit_Table } from './pages/ListComponent/FormularioVistasAuditorias'
// import { AuditPage } from "./pages/ListComponent/PaginaSumary"
//import { Lista_Auditable } from "./pages/ListComponent/FormularioAuditoria"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Show_Audit_Table/>
  </React.StrictMode>
)
