import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth';

const LoginPage = () => {
  //  username 입력값을 저장하는 상태
  const [username, setUsername] = useState('');

  //  페이지 이동을 위한 React Router의 내비게이터
  const navigate = useNavigate();

  //  로그인 버튼 클릭 시 실행되는 함수
  const handleLogin = () => {
    if (!username.trim()) return; // 아이디가 비어 있으면 무시

    //  가짜 JWT 토큰 생성
    const fakePayload = {
      sub: username, // 사용자 이름
      exp: Date.now() + 1000 * 60 * 60, // 만료 시간: 1시간 후
    };
    const token = btoa(JSON.stringify(fakePayload)); // base64 인코딩

    saveToken(token); // localStorage에 토큰 저장

    //  /tasks 페이지로 이동 + App 상태 초기화를 위해 새로고침
    navigate('/tasks');
    window.location.reload(); // App 컴포넌트에서 사용자 정보 리렌더링
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    }}>
      {/* 로그인 박스 */}
      <div style={{
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ marginBottom: '24px' }}>로그인</h2>

        {/* 사용자명 입력 필드 */}
        <input
          placeholder="아이디를 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            marginBottom: '12px',
          }}
        />

        {/* 로그인 버튼 */}
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#1C1D22',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
