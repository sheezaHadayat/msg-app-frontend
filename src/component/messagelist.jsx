import React, { useEffect, useState } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Send a GET request to your backend to retrieve messages
    fetch('http://localhost:3000/api/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Failed to retrieve messages'));
  }, []);

  return (
    <div>
      <h2>Message List</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <h3>{message.title}</h3>
            <p>Content: {message.content}</p>
            <p>Author: {message.author}</p>  
            <p>Timestamp: {new Date(message.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
