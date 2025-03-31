// src/stories/MoreIcon.tsx
import React from 'react';

const MoreIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      position: 'absolute',
      top: 8,
      right: 8,
    }}
  >
    ⋯
  </button>
);

export default MoreIcon;
