import React from 'react'

import { Features } from './Features'
import { Services } from './Services'
import { Footer } from './Footer'
import { HomePage } from './HomePage'

export const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <Features />
      <Services />
      <Footer />
    </div>
  )
}
