import React, { useState } from 'react';
import { useAtom } from 'jotai';

import userAtom from '../../jotais/userAtom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      // TODO
      // 1. API가 필요함
      // Github 로그인 요청 (API 연결)
      // const { token, userName } = await getGitHubLoginAPI();
      await delay(2000);
      setUser({
        token: 'abcd',
        userName: 'test name'
      });

      // 2. 전역 상태 관리 구축 (지금 할 수 있음)
      // Access Token 받아와서 전역상태로 저장
      // setToken(token);

      // 3. 로그인 완료 처리
      // alert('로그인 완료')
      navigate('/page')
    }
    catch (err) {
      alert('에러가 발생했습니다.');
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button type="button" onClick={handleLogin} disabled={isLoading}>
        {isLoading ? '로그인 중' : 'GitHub 로그인'}
      </button>
    </>
  );
}

const delay = (millis: number) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true)
    }, millis)
  })
}

export default Login;
