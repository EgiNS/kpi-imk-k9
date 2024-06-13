export default function LihatPengaduan() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
        Layanan Pengaduan Online Masyarakat
      </h1>

      <div style={{ margin: 'auto', maxWidth: '1000px', border: '1px solid #EDDBD9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '16px' }}>
        <div style={{ backgroundColor: '#EDDBD9', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <label htmlFor="jumlahAduan">Menampilkan</label>
              <select id="jumlahAduan" style={{ borderRadius: '5px' }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <label htmlFor="jumlahAduan">Aduan Online Masyarakat</label>
            </div>
            
            <div style={{ position: 'relative', maxWidth: '300px', width: '100%' }}>
              <input
                type="text"
                placeholder="Cari Aduan"
                className="px-1 py-1 border border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                style={{ width: '100%', paddingRight: '24px', paddingLeft: '16px', fontSize: '14px' }}
              />
              <img src="/img/search.svg" alt="Search" style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)', width: '20px', height: '20px'}} />
            </div>
          </div>
        </div>

        <div style={{ padding: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #EDDBD9' }}>
            <thead style={{ borderBottom: '2px solid #EDDBD9', backgroundColor: '#EDDBD9' }}>
              <tr>
                <th style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Pengirim</th>
                <th style={{ padding: '8px' }}>Aduan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Anonim</td>
                <td style={{ padding: '8px' }}>Tayangan Indosiar kurang menarik</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Penggemar Berita</td>
                <td style={{ padding: '8px' }}>Jam tayang berita TVOne berkurang ya</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Ana Murdiana</td>
                <td style={{ padding: '8px' }}>Mohon ubah jam tayang siaran anak, jangan jam 22.00, tetapi jam 06.00 pagi karena jam tayangnya sudah melebihi jam istirahat bagi anak</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Aprico Chandra</td>
                <td style={{ padding: '8px' }}>Dari awal film diputar sampai akhir isinya hanya kekerasan, anak saya umur 3 tahun dan 7 tahun telah mulai main tangan karena film itu</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Penonton setia rcti</td>
                <td style={{ padding: '8px' }}>Kok sekarang tayangan rcti kebanyakan sinetron ya</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
