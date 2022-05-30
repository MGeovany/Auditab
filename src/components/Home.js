import React from 'react'
import '../styles/homeStyle.css'

import IncidentsTable from './IncidentsTable'

import { ReportSvg, CheckSvg, FindsSvg, BusinessSvg } from '../utils/svgIcons'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>Dashboard</h1>
        <h4>Welcome back <span>Jhon Doe</span></h4>
      </div>
      <div className='dashboard-cards flex'>
        <div className='card'>
          <div className='img '>
           <ReportSvg width={49} height={60} />
          </div>
          <div className='card-text'>INCIDENTS REPORTED</div>
          <div className='card-number flex'>201</div>
        </div>
        <div className='card'>
          <div className='img '>
           <CheckSvg width={53} height={60}/>
          </div>
          <div className='card-text'>LEVEL OF RELIABILITY</div>
          <div className='card-number flex'>100</div>
        </div>
        <div className='card'>
          <div className='img '>
           <FindsSvg width={52} height={60}/>
          </div>
          <div className='card-text'>OBSERVATIONS</div>
          <div className='card-number flex'>12</div>
        </div>
        <div className='card'>
          <div className='img '>
           <BusinessSvg width={76} height={60}/>
          </div>
          <div className='card-text'>ASSETS ACTIVE</div>
          <div className='card-number flex'>2.1K</div>
        </div>
      </div>

      <div className='flex table-container'>
        <IncidentsTable />
      </div>
    </div>
  )
}

export default Home
