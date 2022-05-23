/* eslint-disable testing-library/no-node-access */

import { render, screen } from '@testing-library/react'
import App from './App'
import { Header } from './components/Header'

test('Hola mundo for testing', () => {
  render(<App />)

  const linkElement = screen.getByText(/Mundo/i)
  expect(linkElement).toBeInTheDocument()
})

/* ==> HEADER TESTS */

describe('Test for Header links', () => {
  test('The Home button is available', () => {
    render(<Header/>)

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home')
  })
  test('The About button is available', () => {
    render(<Header/>)

    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')
  })
  test('The Team button is available', () => {
    render(<Header/>)

    expect(screen.getByText('Team').closest('a')).toHaveAttribute('href', '/team')
  })
  test('The Login button is available', () => {
    render(<Header/>)

    expect(screen.getByText('Log in').closest('a')).toHaveAttribute('href', '/login')
  })
  test('The Signup button is available', () => {
    render(<Header/>)

    expect(screen.getByText('Sign up').closest('a')).toHaveAttribute('href', '/signup')
  })
})

describe('header width', () => {
  test('figure it out jeje', () => {
    render(<Header/>)

    const divHeader = screen.getByTestId('head')
    expect(getComputedStyle(divHeader).height).toBe('90px')
  })
})
