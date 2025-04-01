// src/components/ChatBox.tsx
import React, { useEffect, useState } from 'react';

const socket = new WebSocket('ws://localhost:3001'); // 서버와 연결

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      marginTop: '20px',
      width: '100%',
      maxWidth: '400px'
    }}>
      <h3>💬 실시간 채팅</h3>
      <div style={{
        height: '150px',
        overflowY: 'auto',
        border: '1px solid #eee',
        marginBottom: '8px',
        padding: '8px',
        backgroundColor: '#fafafa',
        fontSize: '14px'
      }}>
        {messages.map((msg, i) => (
          <div key={i}>🗨 {msg}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '6px' }}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={handleSend}>전송</button>
      </div>
    </div>
  );
};

export default ChatBox;
