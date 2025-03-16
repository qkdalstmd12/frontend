import React, { useState, useRef } from 'react';

const MoreMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* MoreIcon 버튼 */}
      <button 
        onClick={toggleMenu} 
        style={{
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer'
        }}
      >
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.335236" width="26.2216" height="26" rx="13" fill="white"/>
          <rect x="1.33524" y="1" width="24.2216" height="24" rx="12" stroke="#1C1D22" strokeOpacity="0.1" strokeWidth="2"/>
          <ellipse cx="17.4803" cy="13" rx="1.00852" ry="1" fill="#1C1D22"/>
          <ellipse cx="13.4462" cy="13" rx="1.00852" ry="1" fill="#1C1D22"/>
          <ellipse cx="9.41215" cy="13" rx="1.00852" ry="1" fill="#1C1D22"/>
        </svg>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div 
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '40px',
            left: '100%',
            width: '120px',
            background: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '8px 0',
            zIndex: 10,
            whiteSpace: 'nowrap'
          }}
        >
          <button 
            onClick={onDelete}
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              textAlign: 'left',
              background: 'white',
              border: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            DELETE
          </button>
          <button 
            onClick={onEdit}
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              textAlign: 'left',
              background: 'white',
              border: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            EDIT
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
