/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAsset = props => {
  let urlAPI = `http://localhost:5000/auditab/${props}`

  const [asset, SetAsset] = useState([])

  const getAsset = async () => {
    try {
      const response = await axios.get(urlAPI)
      SetAsset(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAsset()
  }, [])

  return asset
}
