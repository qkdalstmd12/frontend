import React, { useState } from 'react';
import CommentForm from './CommentForm';
import MoreIcon from './MoreIcon';
import { motion, AnimatePresence } from 'framer-motion'; 

interface TaskCardProps {
  id: number;
  title: string;
  category: string;
  date: string | number;
  comments: string[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  category,
  date,
  comments,
  onDelete,
  onEdit
}) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [commentList, setCommentList] = useState(comments);

  const formattedDate =
    typeof date === 'number'
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : date;

  const handleAddComment = (newComment: string) => {
    setCommentList([...commentList, newComment]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      style={{
        width: '322px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* ⋯ 메뉴 */}
      <MoreIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '32px',
            right: '0',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            padding: '8px 12px',
            zIndex: 10,
          }}
        >
          <div
            style={{ padding: '6px 0', cursor: 'pointer' }}
            onClick={() => onDelete(id)}
          >
            DELETE
          </div>
          <div
            style={{ padding: '6px 0', cursor: 'pointer' }}
            onClick={() => {
              setIsEditing(true);
              setIsMenuOpen(false);
            }}
          >
            EDIT
          </div>
        </div>
      )}

      {isEditing ? (
        <div>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={{ padding: '6px', fontSize: '14px', width: '100%' }}
          />
          <button
            onClick={() => {
              onEdit(id, editTitle);
              setIsEditing(false);
            }}
            style={{ marginTop: '6px' }}
          >
            저장
          </button>
        </div>
      ) : (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</h3>
          <p style={{ fontSize: '14px', color: '#888DA7' }}>{category}</p>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        <span style={{ fontSize: '14px', color: '#888DA7' }}>{formattedDate}</span>
        <span
          style={{
            cursor: 'pointer',
            fontSize: '14px',
            color: '#1C1D22',
          }}
          onClick={() => setIsCommentOpen(!isCommentOpen)}
        >
          💬 {commentList.length}
        </span>
      </div>

      {/* 댓글 영역에 애니메이션 적용 */}
      <AnimatePresence>
        {isCommentOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              marginTop: '10px',
              borderTop: '1px solid #eee',
              paddingTop: '8px',
            }}
          >
            <CommentForm onSubmit={handleAddComment} />
            <div style={{ marginTop: '10px' }}>
              <strong>Comments:</strong>
              <ul
                style={{
                  padding: 0,
                  listStyleType: 'none',
                  marginTop: '5px',
                }}
              >
                {commentList.map((comment, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '5px 0',
                      fontSize: '14px',
                      color: '#333',
                    }}
                  >
                    - {comment}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskCard;
