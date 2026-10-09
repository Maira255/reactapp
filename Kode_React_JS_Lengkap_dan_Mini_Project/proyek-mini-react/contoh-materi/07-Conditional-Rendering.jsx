import { useState } from 'react';

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <main>
      <h2>{login ? 'Selamat datang!' : 'Silakan login'}</h2>
      <button onClick={() => setLogin(x => !x)}>
        {login ? 'Logout' : 'Login'}
      </button>
    </main>
  );
}
