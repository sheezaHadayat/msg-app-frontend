// frontend/src/pages/MessageFormPage.js
import React, { useState } from 'react';
import MessageForm from '../component/messageform';

function MessageFormPage() {
  return (
    <div>
      <h2>Create a new message</h2>
      <MessageForm />
    </div>
  );
}

export default MessageFormPage;
