function KartuSiswa({ nama, kelas }) {
  return (
    <article>
      <h2>{nama}</h2>
      <p>Kelas: {kelas}</p>
    </article>
  );
}
export default function App() {
  return (
    <>
      <KartuSiswa nama="Alya" kelas="XI RPL" />
      <KartuSiswa nama="Bima" kelas="XII RPL" />
    </>
  );
}
