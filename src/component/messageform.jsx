import React, { useState } from 'react';
import '../index.css' // Import your CSS file

function MessageForm() {
  const [message, setMessage] = useState({ title: '', content: '', author: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your backend to create a new message
    const response = await fetch('http://localhost:3000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    if (response.ok) {
      // Handle success (e.g., show a success message or reset the form)
      setMessage({ title: '', content: '', author: '' });
    } else {
      // Handle errors
      console.error('Failed to create a new message');
    }
  };

  return (
    <div className="message-form">
      <h2>Create a New Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={message.title}
            onChange={(e) => setMessage({ ...message, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={message.content}
            onChange={(e) => setMessage({ ...message, content: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={message.author}
            onChange={(e) => setMessage({ ...message, author: e.target.value })}
          />
        </div>
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
}

export default MessageForm;
