// src/stories/MoreMenu.tsx
import React from 'react';

const MoreMenu = () => (
  <div
    style={{
      position: 'absolute',
      top: '32px',
      right: '0px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '8px 12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}
  >
    <div style={{ padding: '4px 0', cursor: 'pointer' }}>DELETE</div>
    <div style={{ padding: '4px 0', cursor: 'pointer' }}>EDIT</div>
  </div>
);

export default MoreMenu;
