# Print & Plan Lab

무료 프린트 템플릿, 체크리스트, 플래너 및 습관 추적기를 제공하는 웹 서비스입니다.

## 시작하기

이 프로젝트는 Vite와 React를 사용하여 구축되었습니다.

### 필수 조건

- Node.js (최신 LTS 버전 권장)
- npm

### 설치

```bash
npm install
```

### 로컬 개발

개발 중에는 JSX 파일을 자동으로 변환하고 브라우저로 제공하는 Vite 개발 서버를 사용해야 합니다.

```bash
npm run dev
```

서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속하세요.

> **주의:** `index.html` 파일을 브라우저에서 직접 열거나 단순한 정적 파일 서버를 사용하면 `MIME type of "text/jsx"` 오류가 발생합니다. 반드시 `npm run dev`를 사용해 주세요.

### 빌드 및 배포

프로덕션 환경을 위해 프로젝트를 빌드하려면 다음 명령어를 실행하세요.

```bash
npm run build
```

빌드된 결과물은 `dist/` 폴더에 생성됩니다. 이 결과를 확인하려면 다음 명령어를 사용하세요.

```bash
npm run preview
```

## 기술 스택

- **Frontend:** React, React Router, React Helmet Async
- **Build Tool:** Vite
- **Deployment:** Cloudflare Pages (기본 설정됨)