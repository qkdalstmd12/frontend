import React, { useState } from 'react';
import CommentForm from './CommentForm';

interface TaskCardProps {
  title: string;
  category: string;
  date: string | number; // ✅ 날짜는 문자열 또는 숫자로 받을 수 있도록 설정
  comments: string[];
}

const TaskCard: React.FC<TaskCardProps> = ({ title, category, date, comments }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentList, setCommentList] = useState(comments);

  const formattedDate = typeof date === 'number' 
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) 
    : date;

  const handleAddComment = (newComment: string) => {
    setCommentList([...commentList, newComment]);
  };

  return (
    <div 
      style={{
        width: '322px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#888DA7' }}>{category}</p>
      </div>
      
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginTop: '8px'
        }}
      >
        <span style={{ fontSize: '14px', color: '#888DA7' }}>{formattedDate}</span>
        <span 
          style={{ cursor: 'pointer', fontSize: '14px', color: '#1C1D22' }}
          onClick={() => setIsCommentOpen(!isCommentOpen)}
        >
          💬 {commentList.length}
        </span>
      </div>

      {isCommentOpen && (
        <div style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '8px' }}>
          <CommentForm onSubmit={handleAddComment} />
          <div style={{ marginTop: '10px' }}>
            <strong>Comments:</strong>
            <ul style={{ padding: 0, listStyleType: 'none', marginTop: '5px' }}>
              {commentList.map((comment, index) => (
                <li key={index} style={{ padding: '5px 0', fontSize: '14px', color: '#333' }}>
                  - {comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
