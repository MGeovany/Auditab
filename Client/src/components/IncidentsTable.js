import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData (id, process, date, req, type, desc) {
  return { id, process, date, req, type, desc }
}

const rows = [
  createData('ID4504', 'Gestion de la calidad', '2021-2-5', 'ISO 9001', 'Observation', 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'),
  createData('ID05029', 'Gestion de la calidad', '2022-5-5', 'ISO 8001', 'Incident', 'Se evidencia que los registros de las acciones correctivas 2'),
  createData('ID1909', 'Gestion de la calidad', '2023-4-8', 'ISO 801', 'Observation', 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.')
]

export default function IncidentsTable () {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption align='right'>See More...</caption>
        <TableHead>
          <TableRow>
            <TableCell>Incident ID</TableCell>
            <TableCell align="left">Proccess</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Requirement</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.process}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.req}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
