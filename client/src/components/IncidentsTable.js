import * as React from 'react'
import { Table } from '@mantine/core'
/* import PropTypes from 'prop-types' */

const elements = [
  {
    id: 'ID4dasd504',
    process: 'Gestion de la calidad',
    date: '2021-2-5',
    req: 'ISO 9001',
    type: 'Observation',
    desc: 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'
  },
  {
    id: 'ID4dasds504',
    process: 'Gestion de la calidad',
    date: '2021-2-5',
    req: 'ISO 9001',
    type: 'Observation',
    desc: 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'
  },
  {
    id: 'ID45sada04',
    process: 'Gestion de la calidad',
    date: '2021-2-5',
    req: 'ISO 9001',
    type: 'Observation',
    desc: 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'
  },
  {
    id: 'ID4ds504',
    process: 'Gestion de la calidad',
    date: '2021-2-5',
    req: 'ISO 9001',
    type: 'Observation',
    desc: 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'
  },
  {
    id: 'ID45das04',
    process: 'Gestion de la calidad',
    date: '2021-2-5',
    req: 'ISO 9001',
    type: 'Observation',
    desc: 'Se evidencia que los registros de las acciones correctivas 23 y 26 estan documentadas, a pesar de que en la retencion documental se especifica que se deben registrar en el software.'
  }
]

export default function IncidentsTable() {
  const rows = elements.map(element => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.process}</td>
      <td>{element.date}</td>
      <td>{element.req}</td>
      <td>{element.type}</td>
      <td>{element.desc}</td>
    </tr>
  ))

  return (
    <div className='table-container-c'>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Process</th>
            <th>Date</th>
            <th>Requirement</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}
/* IncidentsTable.propTypes = {
  elements: PropTypes.array.isRequired
}
 */
