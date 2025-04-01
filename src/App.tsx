import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import TaskList from './stories/TaskList';
import { getCurrentUsername, removeToken } from './utils/auth';
import ChatBox from './components/ChatBox';

//  Task 데이터 타입 정의
interface Task {
  id: number;
  title: string;
  category: string;
  date: string;
  comments: string[];
}

// TaskPage 컴포넌트: 실제 할 일 UI + 로그아웃 버튼 포함
const TaskPage = ({
  tasks,
  handleAddTask,
  handleDeleteTask,
  handleEditTask,
}: {
  tasks: Task[];
  handleAddTask: () => void;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (id: number, newTitle: string) => void;
}) => {
  const navigate = useNavigate();
  const username = getCurrentUsername(); //  JWT에서 로그인한 사용자 이름 가져오기

  // 로그아웃 버튼 클릭 시 토큰 삭제 + 로그인 페이지로 이동
  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/*  상단: 사용자 이름 + 로그아웃 버튼 */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}>
        <h2>📝 {username}님의 할 일</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 12px',
            backgroundColor: '#e63946',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          로그아웃
        </button>
      </div>

      {/*  할 일 목록 렌더링 */}
      <TaskList
        title="할 일 목록"
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />

      {/* ✅ 채팅 기능 추가 */}
      <ChatBox />
    </div>
  );
};

function App() {
  //  현재 로그인한 사용자 ID 추출 (JWT → payload.sub)
  const username = getCurrentUsername();

  //  로그인한 사용자의 할 일 목록 상태
  const [tasks, setTasks] = useState<Task[]>([]);

  //  로그인 시 해당 사용자 task 불러오기 (localStorage 기준)
  useEffect(() => {
    if (username) {
      const saved = localStorage.getItem(`${username}_tasks`);
      if (saved) {
        setTasks(JSON.parse(saved)); // 저장된 데이터 있으면 불러오기
      } else {
        setTasks([]); // 새 사용자면 빈 배열로 초기화
      }
    }
  }, [username]);

  //  task를 업데이트하고 localStorage에도 저장하는 함수
  const saveTasks = (updated: Task[]) => {
    setTasks(updated);
    if (username) {
      localStorage.setItem(`${username}_tasks`, JSON.stringify(updated));
    }
  };

  // ➕ 새로운 할 일 추가
  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(), // 고유 ID 생성
      title: '새로운 할 일',
      category: '일반',
      date: new Date().toISOString().split('T')[0], // yyyy-mm-dd
      comments: [],
    };
    saveTasks([...tasks, newTask]);
  };

  //  할 일 삭제
  const handleDeleteTask = (id: number) => {
    saveTasks(tasks.filter((task) => task.id !== id));
  };

  //  할 일 수정
  const handleEditTask = (id: number, newTitle: string) => {
    saveTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/*  로그인 페이지 (초기 진입 또는 인증 실패 시 이동) */}
        <Route path="/login" element={<LoginPage />} />

        {/*  인증된 사용자만 접근 가능한 경로 (토큰 검증 필요) */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TaskPage
                tasks={tasks}
                handleAddTask={handleAddTask}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            </ProtectedRoute>
          }
        />

        {/*  존재하지 않는 경로는 로그인 페이지로 리디렉션 */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
