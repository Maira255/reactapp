import { useState } from 'react';

export default function App() {
  const [angka, setAngka] = useState(0);
  return (
    <div>
      <h2>Nilai: {angka}</h2>
      <button onClick={() => setAngka(a => a + 1)}>
        Tambah +1
      </button>
    </div>
  );
}
