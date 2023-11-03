import { FunctionComponent } from 'react';
import { PORT } from 'models';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home: FunctionComponent = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [token, setToken] = useState('');

  const handleIdChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };
  const handlePwChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPw(e.target.value);
  };
  const handlePwKeyDown: KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key !== 'Enter') return;
    const body = JSON.stringify({ id, pw });
    const res = await fetch(`http://127.0.0.1:${PORT}/login`, {
      method: 'post',
      body,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { accessToken } = await res.json();
    setToken(accessToken);
  };
  const handleAuthClick: MouseEventHandler<HTMLButtonElement> = async () => {
    await fetch(`http://127.0.0.1:${PORT}/verify`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="id">아이디</label>
        <input id="id" onChange={handleIdChange} value={id} />
      </div>
      <div>
        <label htmlFor="pw">비밀번호</label>
        <input
          id="pw"
          onChange={handlePwChange}
          value={pw}
          onKeyDown={handlePwKeyDown}
        />
      </div>
      <div>
        <button onClick={handleAuthClick}>인증 확인</button>
      </div>
      <Link to={'board'}>board</Link>
      <Outlet />
    </div>
  );
};

export default Home;
