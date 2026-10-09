const siswa = [
  { id: 1, nama: 'Alya' },
  { id: 2, nama: 'Bima' },
  { id: 3, nama: 'Citra' }
];

export default function App() {
  return (
    <ul>
      {siswa.map(item => (
        <li key={item.id}>{item.nama}</li>
      ))}
    </ul>
  );
}
