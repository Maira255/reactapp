import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [teks, setTeks] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!teks.trim()) return;
    onAdd(teks);
    setTeks('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        aria-label="Nama tugas"
        value={teks}
        onChange={event => setTeks(event.target.value)}
        placeholder="Contoh: Latihan useState..."
      />
      <button type="submit">+ Tambah tugas</button>
    </form>
  );
}
