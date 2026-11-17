import React, { useState } from 'react';

const CreatePost = ({ onAddPost }) => {
  const [input, setInput] = useState('');

  const sendPost = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onAddPost(input);
    setInput('');
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0dfdc', padding: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
          👤
        </div>
        <form style={{ flex: 1, display: 'flex' }} onSubmit={sendPost}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Start a post"
            style={{ flex: 1, borderRadius: '24px', border: '1px solid gray', padding: '12px 16px', outline: 'none' }}
          />
          <button type="submit" style={{ display: 'none' }}>Send</button>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', padding: '0 8px' }}>
        <span style={{ color: '#70b5f9', fontWeight: 'bold', cursor: 'pointer' }}>📷 Photo</span>
        <span style={{ color: '#7fc15e', fontWeight: 'bold', cursor: 'pointer' }}>🎥 Video</span>
        <span style={{ color: '#e7a33e', fontWeight: 'bold', cursor: 'pointer' }}>📅 Event</span>
        <span style={{ color: '#fc9295', fontWeight: 'bold', cursor: 'pointer' }}>📝 Article</span>
      </div>
    </div>
  );
};

export default CreatePost;