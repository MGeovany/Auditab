/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import { useUncontrolled } from '@mantine/hooks'

import { NativeSelect } from '@mantine/core'

export const SoftwareAsset = () => {
  const defaultValue = 'Software'
  const [valuep, setValue] = useState('')

  console.log('valor', valuep)
  return (
    <div>
      <div className="asset__control">
        <NativeSelect
          value={valuep}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={[
            'Software',
            'Hardware',
            'DataBase',
            'Projects',
            'Job Position',
            'furniture and equipment',
            'Networks',
            'Maintenance and backup',
            'Supplies or general'
          ]}
          placeholder="Select"
          label="Select the Asset"
        />
      </div>
      <div className="asset__page">
        Add a New <span style={{ color: '#7771DE' }}>{valuep}</span>
      </div>
    </div>
  )
}
