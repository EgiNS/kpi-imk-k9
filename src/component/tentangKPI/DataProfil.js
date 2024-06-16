export const ProfilData = [
    { id: 1, name: 'Mohamad Reza', position: 'Wakil Ketua KPI Pusat', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20190828081829.jpg' },
    { id: 2, name: 'Muhammad Hasrul Hasan', position: 'Koordinator Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230406145158.jpg' },
    { id: 3, name: 'Ubaidillah', position: 'Ketua KPI Pusat', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230405172445.jpg' },
    { id: 4, name: 'Tulus Santoso', position: 'Koordinator Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230406145553.jpg' },
    { id: 5, name: 'Aliyah', position: 'Anggota Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230406115830.jpg' },
    { id: 6, name: 'I Made Sunarsa', position: 'Koordinator Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20231026154057.jpg' },
    { id: 7, name: 'Mimah Susanti' , position: 'Anggota Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20190807140849.jpg' },
    { id: 8, name: 'Amin Shabana', position: 'Anggota Bidnag', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230406114906.jpg' },
    { id: 9, name: 'Evri Rizqi Monarshi', position: 'Anggota Bidang', period: '2022-2025', img: 'https://kpi.go.id/images/komisioner/l_20230406150917.jpg' },
  ]
  
  export const getGroupedData = () => {
    return [
      { title: 'Pengelolaan  Struktur dan Sistem Penyiaran', data: ProfilData.slice(0, 2) },
      { title: 'Pengawasan Isi Siaran', data: ProfilData.slice(2, 5) },
      { title: 'Kelembagaan', data: ProfilData.slice(5, 9) },
    ];
  };