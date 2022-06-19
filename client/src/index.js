import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Show_Audit_Table } from './pages/ListComponent/FormularioVistasAuditorias'

let valores = [{pregunta : "hola", comment : "x"},{pregunta : "hola", comment : "x"},{pregunta : "hola", comment : "x"}];

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Show_Audit_Table {...valores}/>
  </React.StrictMode>
)
