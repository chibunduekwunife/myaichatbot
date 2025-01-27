import React, { useState } from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';


function App() {

  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user: ' },
    { text: 'Hi, how can I help you?', sender: 'HeartAI: ' },
]);

  return (
    <div className="chatPage chatContainerWrapper">
      <ChatHeader />
      <ChatWindow messages={messages} />
      <ChatInput
          onSendMessage={(newMessage) => {
          setMessages((prev) => [...prev, { text: newMessage, sender: 'user' }]);
          }}
      />
    </div>
  );
}

export default App;
