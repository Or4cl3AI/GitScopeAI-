// Importing required dependencies
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Backend from '../../components/DeploymentFolders/Backend';

// Test suite for Backend component
describe('Backend', () => {
  // Test case to check if the component renders correctly
  it('renders correctly', () => {
    const { getByTestId } = render(<Backend />);
    expect(getByTestId('backend')).toBeTruthy();
  });

  // Test case to check if the backend deployment process is initiated on button press
  it('initiates backend deployment on button press', () => {
    const { getByTestId } = render(<Backend />);
    const button = getByTestId('backend-deploy-button');
    fireEvent.press(button);
    expect(getByTestId('backend-deployment-status')).toHaveTextContent('Deploying...');
  });

  // Test case to check if the backend deployment process completes successfully
  it('completes backend deployment successfully', async () => {
    const { getByTestId } = render(<Backend />);
    const button = getByTestId('backend-deploy-button');
    fireEvent.press(button);
    // Simulating a delay to mimic the deployment process
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(getByTestId('backend-deployment-status')).toHaveTextContent('Deployment Successful');
  });

  // Test case to check if the backend deployment process handles errors correctly
  it('handles errors during backend deployment', async () => {
    const { getByTestId } = render(<Backend />);
    const button = getByTestId('backend-deploy-button');
    fireEvent.press(button);
    // Simulating an error during the deployment process
    await new Promise((_, reject) => setTimeout(() => reject('Error creating backend deployment folder'), 5000));
    expect(console.error).toHaveBeenCalledWith('Error creating backend deployment folder');
  });
});