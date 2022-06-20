/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Table } from '@mantine/core'
import '../../styles/assetStyle.css'
import axios from 'axios'

export const SoftwareTable = () => {
  const [rows, setRows] = useState([])
  const [asset, setAsset] = useState([])
  let urlAPI = `http://localhost:5000/auditab/software`

  const getAsset = async () => {
    try {
      const response = await axios.get(urlAPI)
      setAsset(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAsset()
  }, [])

  useEffect(() => {
    setRows(
      asset.map(element => (
        <tr key={element._id}>
          <td>{element._id}</td>
          <td>{element.description}</td>
          <td>{element.dateAdded}</td>
          <td>{element.dateExpiration}</td>
          <td>{element.price} $</td>
          <td>
            <div className='tab__btns '>
              <div className='btn__editar'>Editar</div>
              <div
                className='btn__eliminar'
                onClick={e => deleteAsset(element._id, e)}
              >
                Eliminar
              </div>
            </div>
          </td>
        </tr>
      ))
    )
  }, [asset])

  const deleteAsset = async (id, e) => {
    e.preventDefault()
    const url = `http://localhost:5000/auditab/software/${id}`
    try {
      await axios.delete(url)
      const newAsset = asset.filter(element => element._id !== id)
      setAsset(newAsset)
    } catch (error) {}
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date Added</th>
          <th>Date Expiration</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
