import React from 'react'
import '../styles/homeStyle.css'
import IncidentsTable from '../components/IncidentsTable'
import { ReportSvg, CheckSvg, FindsSvg, BusinessSvg } from '../utils/svgIcons'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex home'>
        <div className='home'>
          <h1>Dashboard</h1>
        </div>
        <div className='dashboard-cards flex'>
          <div className='card-home'>
            <div className='img '>
              <ReportSvg width={49} height={60} />
            </div>
            <div className='card-text-home'>INCIDENTS REPORTED</div>
            <div className='card-number flex'>201</div>
          </div>
          <div className='card-home'>
            <div className='img '>
              <CheckSvg width={53} height={60} />
            </div>
            <div className='card-text-home'>LEVEL OF RELIABILITY</div>
            <div className='card-number flex'>100</div>
          </div>
          <div className='card-home'>
            <div className='img '>
              <FindsSvg width={52} height={60} />
            </div>
            <div className='card-text-home'>OBSERVATIONS</div>
            <div className='card-number flex'>12</div>
          </div>
          <div className='card-home'>
            <div className='img '>
              <BusinessSvg width={76} height={60} />
            </div>
            <div className='card-text-home'>ASSETS ACTIVE</div>
            <div className='card-number flex'>2.1K</div>
          </div>
        </div>

        <div className='flex table-container'>
          <IncidentsTable />
        </div>
      </div>
    </>
  )
}
