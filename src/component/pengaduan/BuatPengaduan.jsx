
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert';
import Breadcrumbs from '../Breadcrumb';

export default function BuatPengaduan() {
  const [kategori, setKategori] = useState('');
  const [klasifikasi, setKlasifikasi] = useState('');
  const [program, setProgram] = useState('');
  const [lembagaPenyiaran, setLembagaPenyiaran] = useState('');
  const [tanggalTayang, setTanggalTayang] = useState('');
  const [jamTayang, setJamTayang] = useState('');
  const [pesanAduan, setPesanAduan] = useState('');
  const [filePendukung, setFilePendukung] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
  
    if (!kategori) {
      tempErrors["kategori"] = "Kategori tidak boleh kosong!";
      isValid = false;
    }
    if (!klasifikasi) {
      tempErrors["klasifikasi"] = "Klasifikasi tidak boleh kosong!";
      isValid = false;
    }
    if (!program) {
      tempErrors["program"] = "Program tidak boleh kosong!";
      isValid = false;
    }
    if (!lembagaPenyiaran) {
      tempErrors["lembagaPenyiaran"] = "Lembaga Penyiaran tidak boleh kosong!";
      isValid = false;
    }
    if (!tanggalTayang) {
      tempErrors["tanggalTayang"] = "Tanggal Tayang tidak boleh kosong!";
      isValid = false;
    }
    if (!jamTayang) {
      tempErrors["jamTayang"] = "Jam Tayang tidak boleh kosong!";
      isValid = false;
    }
    if (!pesanAduan) {
      tempErrors["pesanAduan"] = "Pesan Aduan tidak boleh kosong!";
      isValid = false;
    }
    if (!filePendukung) {
      tempErrors["filePendukung"] = "File Pendukung tidak boleh kosong!";
      isValid = false;
    }
  
    setErrors(tempErrors);
    return isValid;
  };
  

  const handleSubmit = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
      Swal({
        title: 'Error',
        text: 'Silakan login terlebih dahulu untuk mengirim aduan!',
        icon: 'error',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            className: 'bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
          },
        },
      });
    } else {
      if (validateForm()) {
        setIsProcessing(true);
        Swal({
          title: 'Sukses',
          text: 'Berhasil mengirim aduan!',
          icon: 'success',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              className: 'bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
            },
          },
        }); 
      } else {
        Swal({
          title: 'Error',
          text: 'Semua isian wajib diisi!',
          icon: 'error',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              className: 'bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
            },
          },
        });
      }
    }
  };

  return (
    <div className="mx-auto mt-12 mb-16 lg:px-20 md:px-10 px-5">
      <div className="mt-10 mb-6">
        <Breadcrumbs />
      </div>

      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mb-4">
        Layanan Pengaduan Online Masyarakat
      </h1>

      <div data-aos="fade-up" className="border rounded-lg shadow-lg">
        {/* Card Header */}
        <div className="p-4 bg-[#EDDBD9] border-b border-[#EDDBD9] flex items-center ">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01"/>
          </svg>
          <p className="font-medium text-700">Perhatikan Cara Menyampaikan Pengaduan Yang Baik dan Benar!</p>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-center mb-4">Formulir Pengaduan</h2>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="kategori">Kategori Lembaga Penyiaran</label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Televisi"
                  checked={kategori === 'Televisi'}
                  onChange={(e) => setKategori(e.target.value)}
                  className="mr-2"
                />
                Televisi
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  value="Radio"
                  checked={kategori === 'Radio'}
                  onChange={(e) => setKategori(e.target.value)}
                  className="mr-2"
                />
                Radio
              </label>
            </div>
            {errors.kategori && <span className="error text-red-500 text-xs">{errors.kategori}</span>}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="klasifikasi">Klasifikasi Lembaga</label>
            <select
              id="klasifikasi"
              value={klasifikasi}
              onChange={(e) => setKlasifikasi(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
            >
              <option value="">Pilih</option>
              <option value="Lokal">Lokal</option>
              <option value="Nasional">Nasional</option>
            </select>
            {errors.klasifikasi && <span className="error text-red-500 text-xs">{errors.klasifikasi}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="lembagaPenyiaran">Lembaga Penyiaran</label>
            <select
              id="lembagaPenyiaran"
              value={lembagaPenyiaran}
              onChange={(e) => setLembagaPenyiaran(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
            >
              <option value="">Pilih</option>
              <option value="100,2 GEMAFM YESS">100,2 GEMAFM YESS</option>
              <option value="100,4 KLCBS">100,4 KLCBS</option>
              <option value="101,1 MGT Radio">101,1 MGT Radio</option>
              <option value="101,2 Dioz FM Bali">101,2 Dioz FM Bali</option>
              <option value="101,9 FM The Spirit Of Moslem">101,9 FM The Spirit Of Moslem</option>
              <option value="102 DC FM">102 DC FM</option>
              <option value="NET">NET</option>
              <option value="METRO TV">METRO TV</option>
              <option value="KOMPAS TV">KOMPAS TV</option>
              <option value="iNews">iNews</option>
              <option value="SCTV">SCTV</option>
              <option value="RCTI">RCTI</option>
              <option value="Indosiar">Indosiar</option>
              <option value="GTV">GTV</option>
              <option value="CNN Indonesia">CNN Indonesia</option>
              <option value="CNBN Indonesia">CNBN Indonesia</option>
              <option value="ANTV">ANTV</option>
            </select>
            {errors.lembagaPenyiaran && <span className="error text-red-500 text-xs">{errors.lembagaPenyiaran}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="program">Program Penyiaran</label>
            <select
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
            >
              <option value="">Pilih</option>
              <option value="Iklan Covid-19 versi vaksinasi">Iklan Covid-19 versi vaksinasi</option>
              <option value="Iklan Covid-19 versi cluster">Iklan Covid-19 versi cluster</option>
              <option value="Iklan Covid-19 versi koor host TVRI">Iklan Covid-19 versi koor host TVRI</option>
              <option value="Himbauan Covid">Himbauan Covid</option>
              <option value="Iklan Covid-19 versi hoax">Iklan Covid-19 versi hoax</option>
              <option value="Iklan Jaco Lumbar Pillow Therapy">Iklan Jaco Lumbar Pillow Therapy</option>
              <option value="ILM Covid-19">ILM Covid-19</option>
              <option value="ILM Covid-19 versi TVRI">ILM Covid-19 versi TVRI</option>
              <option value="ILM Vaksinasi Covid-19 Aman & Halal">ILM Vaksinasi Covid-19 Aman & Halal</option>
              <option value="Indonesia Hari Ini">Indonesia Hari Ini</option>
              <option value="Net 24">Net 24</option>
              <option value="Sinema Mistik">Berbagi Rezeki</option>
              <option value="Berhenti Merokok Hebat">Berhenti Merokok Hebat</option>
              <option value="Bioskop TransTV">Bioskop TransTV</option>
              <option value="Breaking News">Breaking News</option>
              <option value="Breakout">Breakout</option>
              <option value="Comedy Night Live">Comedy Night Live</option>
              <option value="Drive N Jive">Drive N Jive</option>
              <option value="Dunia Terbalik">Dunia Terbalik</option>
              <option value="Elshinta News and Talk">Elshinta News and Talk</option>
              <option value="Global Morning Show">Global Morning Show</option>
              <option value="Ini Talkshow">Ini Talkshow</option>
              <option value="Kabar Hari Ini">Kabar Hari Ini</option>
              <option value="Kabar Pagi">Kabar Pagi</option>
              <option value="Kabar Siang">Kabar Siang</option>
              <option value="Tetangga Masa Gitu">Tetangga Masa Gitu</option>
              <option value="Tonight Show">Tonight Show</option>
            </select>
            {errors.program && <span className="error text-red-500 text-xs">{errors.program}</span>}
          </div>

          <div className="mb-4 flex flex-row">
            <div className="mr-2 w-1/2">
              <label className="block mb-2 font-medium" htmlFor="tanggalTayang">Tanggal Tayang</label>
              <input
                type="date"
                id="tanggalTayang"
                value={tanggalTayang}
                onChange={(e) => setTanggalTayang(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
              />
              {errors.tanggalTayang && <span className="error text-red-500 text-xs">{errors.tanggalTayang}</span>}
            </div>
            <div className="ml-2 w-1/2">
              <label className="block mb-2 font-medium" htmlFor="jamTayang">Jam Tayang</label>
              <input
                type="time"
                id="jamTayang"
                value={jamTayang}
                onChange={(e) => setJamTayang(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
              />
              {errors.jamTayang && <span className="error text-red-500 text-xs">{errors.jamTayang}</span>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="pesanAduan">Pesan Aduan</label>
            <textarea
              id="pesanAduan"
              value={pesanAduan}
              onChange={(e) => setPesanAduan(e.target.value)}
              placeholder="Ketik Uraian Pengaduan"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
              rows="4"
            />
            {errors.pesanAduan && <span className="error text-red-500 text-xs">{errors.pesanAduan}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="filePendukung">Pilih File Pendukung</label>
            <input
              type="file"
              id="filePendukung"
              onChange={(e) => setFilePendukung(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9D262A]"
            />
            <p className="text-xs text-gray-500">* Format file mp4, mp3, pdf, jpg, jpeg, png, JPG, JPEG, PNG, dan ukuran maksimal 15 MB</p>
            {errors.filePendukung && <span className="error text-red-500 text-xs">{errors.filePendukung}</span>}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 bg-gray-100 border-t flex justify-end">
          <button className="bg-[#9D262A] text-white px-4 py-2 rounded-lg hover:bg-[#8d3336] focus:outline-none" onClick={handleSubmit}>Proses</button>
        </div>
      </div>
    </div>
  );
}
