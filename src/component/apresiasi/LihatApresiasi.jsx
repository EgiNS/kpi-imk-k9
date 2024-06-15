import React, { useState } from 'react';

export default function LihatApresiasi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pengirim, setPengirim] = useState('');
  const [apresiasi, setApresiasi] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPengirim('');
    setApresiasi('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Pengirim:", pengirim);
    console.log("Apresiasi:", apresiasi);
    handleCloseModal();
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
        Halaman Apresiasi
      </h1>

      <div style={{ margin: 'auto', maxWidth: '1000px', border: '1px solid #EDDBD9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '16px' }}>
        <div style={{ backgroundColor: '#EDDBD9', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>  
              <label htmlFor="jumlahAduan" style={{ marginRight: '8px' }}>Menampilkan </label>
              <select id="jumlahAduan" style={{ marginRight: '8px', borderRadius: '5px' }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <label htmlFor="jumlahAduan"> Apresiasi Masyarakat</label>
            </div>
            <div style={{ position: 'relative', maxWidth: '300px', width: '100%' }}>
              <input
                type="text"
                placeholder="Cari Apresiasi"
                className="px-1 py-1 border border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                style={{ width: '100%', paddingRight: '24px', paddingLeft: '16px', fontSize: '14px' }}
              />
              <img src="/img/search.svg" alt="Search" style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
            </div>
          </div>
        </div>

        <div style={{ padding: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #EDDBD9' }}>
            <thead style={{ borderBottom: '2px solid #EDDBD9', backgroundColor: '#EDDBD9' }}>
              <tr>
                <th style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Pengirim</th>
                <th style={{ padding: '8px' }}>Apresiasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>Anonim</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>Tayangan Indosiar sangat menarik</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>Penggemar Berita</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>Jam tayang berita TVOne makin bertambah ya, bagus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>Ana Murdiana</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>Jam tayang siaran anak diperpanjang lagi yaa, anak saya pengen liat Tayo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>Aprico Chandra</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>Film nya sangat menghibur, lucu-lucu juga dan memiliki pesan</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>Penonton setia rcti</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>Sinetronnya makin hari makin seruu abis</td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <img src="/img/tambah.svg" alt="Tambah" style={{ width: '32px', height: '32px', cursor: 'pointer' }} onClick={handleOpenModal} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', width: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-2xl text-[#420101]  font-bold mb-4">Tambah Apresiasi</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="pengirim" style={{ display: 'block', marginBottom: '8px', textAlign: 'left'}}>Pengirim</label>
                <input
                  id="pengirim"
                  type="text"
                  value={pengirim}
                  onChange={(e) => setPengirim(e.target.value)}
                  className="px-2 py-1 border-2 border-[#EDDBD9] rounded-lg w-full focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                  required
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="apresiasi" style={{ display: 'block', marginBottom: '8px', textAlign: 'left' }}>Apresiasi</label>
                <textarea
                  id="apresiasi"
                  value={apresiasi}
                  onChange={(e) => setApresiasi(e.target.value)}
                  className="px-2 py-1 border-2 border-[#EDDBD9] rounded-lg w-full focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleCloseModal} className="bg-[#EDDBD9] text-[#9D262A] py-2 px-4 rounded mr-2">Batal</button>
                <button type="submit" className="bg-[#9D262A] text-white py-2 px-4 rounded">Tambah</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
