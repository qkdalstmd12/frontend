import React, { useState } from 'react';

const CommentForm = ({ onSubmit }: { onSubmit: (comment: string) => void }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    onSubmit(comment);
    setComment('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        marginTop: '10px'
      }}
    >
      <textarea 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        style={{
          width: '100%',
          height: '50px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          padding: '8px',
          fontSize: '14px',
          resize: 'none'
        }}
      />
      <button 
        type="submit" 
        style={{
          padding: '8px',
          background: '#1C1D22',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
          border: 'none'
        }}
      >
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
