const nama = 'Nadia';
const materi = 'JSX';

export default function App() {
  return (
    <section className="kartu">
      <h2>Halo, {nama}!</h2>
      <p>Hari ini belajar {materi}.</p>
    </section>
  );
}
