```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ReadmeRequirements from '../components/ReadmeRequirements';

describe('ReadmeRequirements', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ReadmeRequirements />);
    expect(getByTestId('readme-requirements')).toBeTruthy();
  });

  it('generates README and requirements files', () => {
    const { getByTestId } = render(<ReadmeRequirements />);
    const generateButton = getByTestId('generate-button');

    fireEvent.press(generateButton);

    expect(getByTestId('readme-file')).toBeTruthy();
    expect(getByTestId('requirements-file')).toBeTruthy();
  });

  it('displays error message on failure', () => {
    const { getByTestId } = render(<ReadmeRequirements />);
    const generateButton = getByTestId('generate-button');

    // Simulate an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('API is down'))
    );

    fireEvent.press(generateButton);

    expect(getByTestId('error-message')).toBeTruthy();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
```