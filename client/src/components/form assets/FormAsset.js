/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import { useUncontrolled } from '@mantine/hooks'

import { NativeSelect } from '@mantine/core'
import '../../styles/assetStyle.css'

import { SoftwareAsset } from './SoftwareAsset.js'
import { HardwareAsset } from './HardwareAsset'
import { DatabaseAsset } from './DatabaseAsset'
import { ProjectsAsset } from './ProjectsAsset'
import { JobPAsset } from './JobPAsset'
import { FurnitureAsset } from './FurnitureAsset'
import { NetworksAsset } from './NetworksAsset'
import { MaintenanceAsset } from './MaintenanceAsset'
import { SuppliesAsset } from './SuppliesAsset'

export const FormAsset = () => {
  const defaultValue = 'Software'
  const [valuep, setValue] = useState('')

  return (
    <div>
      <div className='asset__control'>
        <NativeSelect
          value={valuep}
          onChange={event => setValue(event.currentTarget.value)}
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
          placeholder='Select'
          label='Select the Asset'
        />
      </div>
      <div className='asset__page'>
        Add a New <span style={{ color: '#7771DE' }}>{valuep}</span>
        <div>
          {valuep === 'Software' ? (
            <SoftwareAsset />
          ) : null || valuep === 'Hardware' ? (
            <HardwareAsset />
          ) : null || valuep === 'DataBase' ? (
            <DatabaseAsset />
          ) : null || valuep === 'Projects' ? (
            <ProjectsAsset />
          ) : null || valuep === 'Job Position' ? (
            <JobPAsset />
          ) : null || valuep === 'furniture and equipment' ? (
            <FurnitureAsset />
          ) : null || valuep === 'Networks' ? (
            <NetworksAsset />
          ) : null || valuep === 'Maintenance and backup' ? (
            <MaintenanceAsset />
          ) : null || valuep === 'Supplies or general' ? (
            <SuppliesAsset />
          ) : null}
        </div>
      </div>
    </div>
  )
}
