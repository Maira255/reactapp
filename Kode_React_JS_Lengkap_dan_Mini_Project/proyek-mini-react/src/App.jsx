import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskItem from './components/TaskItem.jsx';
import './App.css';

const awal = [
  { id: 't1', text: 'Belajar JSX', done: true },
  { id: 't2', text: 'Membuat Component', done: false },
  { id: 't3', text: 'Memahami Props', done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(awal);
  const [filter, setFilter] = useState('semua');

  function tambahTask(teks) {
    const bersih = teks.trim();
    if (!bersih) return;
    setTasks(sebelumnya => [
      ...sebelumnya,
      { id: crypto.randomUUID(), text: bersih, done: false }
    ]);
  }

  function ubahStatus(id) {
    setTasks(sebelumnya => sebelumnya.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  function hapusTask(id) {
    setTasks(sebelumnya => sebelumnya.filter(task => task.id !== id));
  }

  const tampil = tasks.filter(task =>
    filter === 'selesai' ? task.done :
    filter === 'aktif' ? !task.done : true
  );
  const jumlahAktif = tasks.filter(task => !task.done).length;

  return (
    <div className="app-shell">
      <main className="board">
        <div className="eyebrow"><span className="dot" /> MINI PROJECT REACT</div>
        <h1>Task<span>Board</span></h1>
        <p className="subtitle">Atur tugas belajarmu, satu langkah setiap hari.</p>

        <TaskForm onAdd={tambahTask} />

        <div className="toolbar">
          <div className="filters" aria-label="Filter tugas">
            {['semua', 'aktif', 'selesai'].map(nama => (
              <button
                key={nama}
                className={filter === nama ? 'filter active' : 'filter'}
                onClick={() => setFilter(nama)}
              >{nama[0].toUpperCase() + nama.slice(1)}</button>
            ))}
          </div>
          <span className="count">{jumlahAktif} tugas aktif</span>
        </div>

        <ul className="task-list">
          {tampil.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={ubahStatus}
              onDelete={hapusTask}
            />
          ))}
        </ul>

        {tampil.length === 0 && (
          <div className="empty">Belum ada tugas pada filter ini.</div>
        )}
      </main>
    </div>
  );
}
