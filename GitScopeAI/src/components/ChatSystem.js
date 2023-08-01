''`javascript
// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

// ChatSystem Component
const ChatSystem = () => {
  // State for messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  // UseEffect to set initial message
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'GitScopeAI',
        },
      },
    ]);
  }, []);

  // Render the chat interface
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatSystem;
```
