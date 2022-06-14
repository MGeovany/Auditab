/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import * as React from 'react'
import { Table } from '@mantine/core'
/* import PropTypes from 'prop-types' */

import { useState, useEffect } from 'react'
import axios from 'axios'

const elements1 = [
  {
    id: 'ID4433504',
    description: 'Laptop Computer with Windows 10',
    dateAdded: '2021-2-5',
    dateExpration: '2022-2-5',
    price: 12.95
  }
]

export function AssetTable() {
  const [elements, setElements] = useState(elements1)

  const getSoftware = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auditab/software')
      setElements(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSoftware()
  }, [])
  const rows = elements.map(element => (
    <tr key={element._id}>
      <td>{element._id}</td>
      <td>{element.description}</td>
      <td>{element.dateAdded}</td>
      <td>{element.dateExpiration}</td>
      <td>{element.price} $</td>
    </tr>
  ))

  return (
    <div className='table-container-c'>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date Added</th>
            <th>Date Expiration</th>
            <th>Price</th>
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
