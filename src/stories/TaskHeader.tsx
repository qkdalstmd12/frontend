import React from 'react';

interface TaskHeaderProps {
  title: string;
  taskCount: number;
  onAddTask: () => void;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ title, taskCount, onAddTask }) => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 16px',
        borderBottom: '1px solid #E5E5E5',
        fontSize: '14px',
        fontWeight: 'bold'
      }}
    >
      <span>{title} ({taskCount})</span>
      <button 
        onClick={onAddTask} 
        style={{
          background: 'transparent',
          border: 'none',
          color: '#888DA7',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        ➕ Add new task
      </button>
    </div>
  );
};

export default TaskHeader;