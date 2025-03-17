🚀 **React 기반의 직관적인 To-Do 리스트 애플리케이션**  
사용자가 할 일을 손쉽게 추가, 수정, 삭제하고, 진행 상태를 관리할 수 있도록 설계되었습니다.  

---

## 📌 주요 기능

✅ **할 일 추가 & 수정** - 간단한 입력만으로 To-Do 생성 및 수정  
✅ **체크리스트 기능** - 완료된 작업 체크 가능  
✅ **마감일 설정** - 일정 관리 가능  
✅ **로컬 스토리지 저장** - 새로고침해도 데이터 유지  
✅ **반응형 UI** - 모바일 & 데스크톱 지원  
✅ **Storybook** - 컴포넌트 UI 미리보기  

---

## 🚀 프로젝트 실행 방법

### 📌 1. 프로젝트 클론 및 이동
```bash
git clone https://github.com/qkdalstmd12/frontend12.git
cd frontend12
📌 2. 패키지 설치
bash
복사
편집
npm install
📌 3. 개발 서버 실행
bash
복사
편집
npm run dev
✅ http://localhost:5173 에 접속하여 애플리케이션을 실행할 수 있습니다.

🖥️ 기술 스택
기술	설명
⚛️ React	UI 구성 및 상태 관리
📄 TypeScript	정적 타입 지원
🏗 Zustand	전역 상태 관리
🧪 Storybook	컴포넌트 UI 문서화 및 테스트

📜 디렉토리 구조
bash
복사
편집
📦 src
 ┣ 📂 components      # UI 컴포넌트 모음
 ┣ 📂 pages           # 페이지별 컴포넌트
 ┣ 📂 hooks           # 커스텀 훅
 ┣ 📂 store           # Zustand 상태 관리
 ┣ 📂 assets          # 이미지 & 아이콘
 ┣ 📂 styles          # 스타일 관련 파일
 ┗ 📜 App.tsx         # 메인 컴포넌트
