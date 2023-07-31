```javascript
// Importing necessary libraries and components
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TutorialsHelp from '../components/TutorialsHelp';

// Test suite for TutorialsHelp component
describe('TutorialsHelp', () => {
  // Test case to check if the component renders correctly
  it('renders correctly', () => {
    const { getByTestId } = render(<TutorialsHelp />);
    expect(getByTestId('tutorials-help')).toBeTruthy();
  });

  // Test case to check if the tutorial opens when the button is clicked
  it('opens tutorial when button is clicked', () => {
    const { getByTestId } = render(<TutorialsHelp />);
    const button = getByTestId('tutorial-button');
    fireEvent.press(button);
    expect(getByTestId('tutorial-modal')).toBeTruthy();
  });

  // Test case to check if the tutorial closes when the close button is clicked
  it('closes tutorial when close button is clicked', () => {
    const { getByTestId } = render(<TutorialsHelp />);
    const button = getByTestId('tutorial-button');
    fireEvent.press(button);
    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(getByTestId('tutorial-modal')).toBeFalsy();
  });

  // Test case to check if the help opens when the button is clicked
  it('opens help when button is clicked', () => {
    const { getByTestId } = render(<TutorialsHelp />);
    const button = getByTestId('help-button');
    fireEvent.press(button);
    expect(getByTestId('help-modal')).toBeTruthy();
  });

  // Test case to check if the help closes when the close button is clicked
  it('closes help when close button is clicked', () => {
    const { getByTestId } = render(<TutorialsHelp />);
    const button = getByTestId('help-button');
    fireEvent.press(button);
    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(getByTestId('help-modal')).toBeFalsy();
  });
});
```