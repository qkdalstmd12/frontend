//  JWT를 localStorage에 저장
// 로그인 시 호출됨. 'token' 키로 base64 인코딩된 JWT 저장
export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

//  localStorage에서 JWT 가져오기
// 다른 함수들에서 토큰이 필요한 경우 사용
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

//  로그아웃 시 JWT 삭제
// localStorage에서 토큰을 제거하여 인증 상태를 초기화
export const removeToken = () => {
  localStorage.removeItem('token');
};

//  현재 로그인 상태인지 확인
// 토큰이 존재하고 만료되지 않았는지 확인함
export const isLoggedIn = (): boolean => {
  const token = getToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token)); // base64 디코딩해서 payload 추출
    return payload.exp > Date.now();         // 만료 시간(exp)이 현재 시간보다 이후인지 확인
  } catch {
    return false; // 토큰 파싱 실패 시 로그인 아님으로 처리
  }
};

//  현재 로그인한 사용자의 아이디(sub) 가져오기
// JWT 안에 있는 sub(사용자 식별자) 값을 가져옴
export const getCurrentUsername = (): string | null => {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token)); // base64 디코딩 후 JSON 파싱
    return payload.sub || null;              // 사용자 아이디 반환
  } catch {
    return null;
  }
};
