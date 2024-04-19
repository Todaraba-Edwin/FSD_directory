리액트 쿼리 관련글
[저돌적 윤뿔소 url](https://velog.io/@okko8522/Next.JS%EC%97%90-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

## MSW 설정하기 with App Router

```bash
npx msw init public/ --save
# Parsing error: Cannot find module 'next/babel'
# Require stack:
```

의존성 파일을 추가적으로 설치해줄 것 : next 패키지와 @babel/core, @babel/preset-env 등이 설치되어 있어야 합니다.
