// frontend/src/pages/MessageListPage.js
import React, { useState, useEffect } from 'react';
import MessageList from '../component/messagelist';
import axios from 'axios';

function MessageListPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/msg/messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  // Add the code for handling likes and comments if needed

  return (
    <div>
      <h2>Message List</h2>
      <MessageList messages={messages} />
    </div>
  );
}

export default MessageListPage;
