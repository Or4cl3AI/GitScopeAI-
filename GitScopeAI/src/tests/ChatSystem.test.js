''`javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ChatSystem from '../components/ChatSystem';

describe('ChatSystem', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ChatSystem />);
    expect(getByTestId('chat-system')).toBeTruthy();
  });

  it('sends a message when the send button is pressed', () => {
    const { getByTestId } = render(<ChatSystem />);
    const messageInput = getByTestId('message-input');
    const sendButton = getByTestId('send-button');

    fireEvent.changeText(messageInput, 'Test message');
    fireEvent.press(sendButton);

    expect(getByTestId('message-list').props.data).toContain('Test message');
  });

  it('clears the message input after a message is sent', () => {
    const { getByTestId } = render(<ChatSystem />);
    const messageInput = getByTestId('message-input');
    const sendButton = getByTestId('send-button');

    fireEvent.changeText(messageInput, 'Test message');
    fireEvent.press(sendButton);

    expect(messageInput.props.value).toBe('');
  });

  it('receives a message from the AI', async () => {
    const { getByTestId } = render(<ChatSystem />);
    const messageInput = getByTestId('message-input');
    const sendButton = getByTestId('send-button');

    fireEvent.changeText(messageInput, 'Test message');
    fireEvent.press(sendButton);

    // Wait for the AI to respond
    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(getByTestId('message-list').props.data).toContain('AI response');
  });
});
```
