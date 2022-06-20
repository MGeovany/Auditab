import React from 'react'

import { Features } from './Features'
import { Services } from './Services'
import { Footer } from './Footer'
import { HomePage } from './HomePage'
import { NavbarOut } from './NavbarOut'

export const LandingPage = () => {
  return (
    <>
      <NavbarOut />
      <div>
        <HomePage />
        <Features />
        <Services />
        <Footer />
      </div>
    </>
  )
}
