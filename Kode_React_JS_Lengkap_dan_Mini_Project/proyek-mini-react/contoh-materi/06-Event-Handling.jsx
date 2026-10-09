import { useState } from 'react';

export default function App() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  return (
    <>
      <input
        value={nama}
        onChange={e => setNama(e.target.value)}
        placeholder="Tulis nama"
      />
      <button onClick={() => setPesan(`Halo, ${nama || 'teman'}!`)}>
        Sapa
      </button>
      <p>{pesan}</p>
    </>
  );
}
