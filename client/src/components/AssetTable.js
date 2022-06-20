/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* import PropTypes from 'prop-types' */
import * as React from 'react'
import { DatabaseTable } from './table assets/DatabaseTable'
import { FurnitureTable } from './table assets/FurnitureTable'
import { HardwareTable } from './table assets/HardwareTable'
import { JobTable } from './table assets/JobTable'
import { MaintenanceTable } from './table assets/MaintenanceTable'
import { NetworksTable } from './table assets/NetworksTable'
import { ProjectsTable } from './table assets/ProjectsTable'
import { SoftwareTable } from './table assets/SoftwareTable'
import { SuppliesTable } from './table assets/SuppliesTable'

export function AssetTable({ asset }) {
  return (
    <div className='table-container-c'>
      {asset === 'Software' ? (
        <SoftwareTable />
      ) : null || asset === 'Hardware' ? (
        <HardwareTable />
      ) : null || asset === 'DataBase' ? (
        <DatabaseTable />
      ) : null || asset === 'Projects' ? (
        <ProjectsTable />
      ) : null || asset === 'Job Position' ? (
        <JobTable />
      ) : null || asset === 'furniture and equipment' ? (
        <FurnitureTable />
      ) : null || asset === 'Networks' ? (
        <NetworksTable />
      ) : null || asset === 'Maintenance and backup' ? (
        <MaintenanceTable />
      ) : null || asset === 'Supplies or general' ? (
        <SuppliesTable />
      ) : null}
    </div>
  )
}
