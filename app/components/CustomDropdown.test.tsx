import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomDropdown from './CustomDropdown'
import { describe, it, expect, vi } from 'vitest'

describe('CustomDropdown', () => {
  it('renders the CustomDropdown component with all elements', () => {
    render(<CustomDropdown handleLogout={() => {}} />)

    expect(screen.getByText('My Account')).toBeInTheDocument()

    // Check if the Settings link is rendered
    const settingsLink = screen.getByRole('link', { name: /Settings/i })
    expect(settingsLink).toBeInTheDocument()

    // Check if the Help & Support link is rendered
    const helpLink = screen.getByRole('link', { name: /Help & Support/i })
    expect(helpLink).toBeInTheDocument()

    // Check if the Logout button is rendered
    const logoutButton = screen.getByRole('button', { name: /Log out/i })
    expect(logoutButton).toBeInTheDocument()
  })

  it('calls handleLogout when the logout button is clicked', () => {
    const handleLogout = vi.fn()

    render(<CustomDropdown handleLogout={handleLogout} />)

    const logoutButton = screen.getByRole('button', { name: /Log out/i })

    fireEvent.click(logoutButton)

    expect(handleLogout).toHaveBeenCalledTimes(1)
  })
})
