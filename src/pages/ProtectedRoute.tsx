import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

interface Props {
  children: React.ReactNode; // 보호할 내부 컴포넌트들 (예: TaskPage)
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  //  로그인 여부를 확인 (localStorage에 있는 JWT 확인)
  if (!isLoggedIn()) {
    //  로그인하지 않은 상태라면 /login으로 강제 이동
    return <Navigate to="/login" replace />;
  }

  //  로그인된 상태라면 children 컴포넌트를 렌더링
  return <>{children}</>;
};

export default ProtectedRoute;
