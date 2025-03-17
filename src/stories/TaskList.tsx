import React from 'react';
import TaskHeader from './TaskHeader';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  title: string;
  category: string;
  date: string;
  comments: string[];
}

interface TaskListProps {
  title: string;
  tasks: Task[];
  onAddTask: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onAddTask }) => {
  return (
    <div
      style={{
        width: '400px',
        border: '3px dashed #E5E5E5',
        borderRadius: '8px',
        padding: '10px 0',
        background: 'white',
      }}
    >
      {/* 리스트 상단 헤더 */}
      <TaskHeader title={title} taskCount={tasks.length} onAddTask={onAddTask} />

      {/* Task 목록 */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            category={task.category}
            date={task.date}
            comments={task.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
