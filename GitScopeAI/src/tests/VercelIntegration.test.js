// Importing required dependencies
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import VercelIntegration from '../components/VercelIntegration'

// Test suite for VercelIntegration component
describe('VercelIntegration', () => {
  // Test case to check if the component renders correctly
  it('renders correctly', () => {
    const { getByTestId } = render(<VercelIntegration />)
    expect(getByTestId('vercel-integration')).toBeTruthy()
  })

  // Test case to check if the deploy button works correctly
  it('deploys the project when the deploy button is pressed', () => {
    const { getByTestId } = render(<VercelIntegration />)
    const deployButton = getByTestId('deploy-button')

    fireEvent.press(deployButton)

    // Assuming that the deployment status is updated in the state after the deployment
    // and it is displayed in a text component with testID 'deployment-status'
    expect(getByTestId('deployment-status').props.children).toBe('Deployed')
  })

  // Test case to check if the correct error message is displayed when the deployment fails
  it('displays the correct error message when the deployment fails', () => {
    const { getByTestId } = render(<VercelIntegration />)
    const deployButton = getByTestId('deploy-button')

    // Simulating an unauthorized error
    global.fetch = jest.fn(() =>
      Promise.reject({ response: { status: 401 } })
    )

    fireEvent.press(deployButton)

    // Assuming that the error message is displayed in a text component with testID 'error-message'
    expect(getByTestId('error-message').props.children).toBe('Unauthorized error. Please check your Vercel token.')

    // Simulating a not found error
    global.fetch = jest.fn(() =>
      Promise.reject({ response: { status: 404 } })
    )

    fireEvent.press(deployButton)

    // Assuming that the error message is displayed in a text component with testID 'error-message'
    expect(getByTestId('error-message').props.children).toBe('Not found error. Please check your project ID.')
  })
})
