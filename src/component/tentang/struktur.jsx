import React, {useEffect} from 'react';
import Breadcrumbs from '../Breadcrumb';
import Aos from 'aos';

const struktur = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <div className="mt-12">
                <Breadcrumbs />
            </div>
            <div data-aos="fade-up" className='p-6 pt-2 shadow-md my-6 rounded-xl'>
                <h1 className="font-bold text-center text-[#420101] md:text-3xl sm:text-2xl text-xl mb-6">Struktur Sekretariat</h1>
                <div className="text-base leading-relaxed text-[#000000] text-justify">
                    <p>Perjuangan KPI Pusat untuk memperoleh Sekretariat akhirnya membuahkan hasil dengan dikeluarkannya Surat Keputusan Menteri Komunikasi dan Informasi No.  A/KEP/M.KOMINFO/1/2018 tentang organisasi dan tata kerja sekretariat Komisi Penyiaran Indonesia Pusat dengan tingkat eselon 2a. Hal ini memang tidak sesuai dengan permintaan KPI yang meminta eselon I untuk sekretariat KPI sesuai dengan beban tugas dan kewenangan KPI.</p>
                    <br></br>
                    <p>Dari hasil Rapat Dengar Pendapat dengan DPR RI, KPI optimis akan mendapatkan sebuah Sekretaris Jendral sebagaimana yang diharapkan. Sekretariat KPI didukung oleh 1 Kepala Sekretariat dan tim kerja. Sedangkan bagi staf profesional direkrut secara terbuka dan diseleksi berdasarkan kapasitas masing-masing pelamar berdasarkan kebutuhan KPI. staf profesional non PNS antara lain adalah staf ahli, asisten ahli dan sekretaris.</p>
                    <br></br>
                    <p>Susunan Ketua Tim Kerja di Lingkungan Sekretariat KPI Pusat sebagai berikut:</p>
                    <div className="container mx-auto p-4">
                        <table className="min-w-full border-collapse border border-[#EDDBD9]">
                            <thead>
                                <tr>
                                    <th className="w-1/2 px-6 py-3 text-center text-base text-black bg-[#EDDBD9] border border-[#EDDBD9]">Jabatan</th>
                                    <th className="w-1/2 px-6 py-3 text-center text-base text-black bg-[#EDDBD9] border border-[#EDDBD9]">Nama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Sekretariat KPI Pusat</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Umri, S.Sos., M.Si.</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Perencanaan Program dan Pelaporan</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Rivai Nursetyo, S.H.</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Hukum dan Kerjasama</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Beatrik Dwi Septiana</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Pelayanan Informasi dan Humas</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Mauludi Rachman</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Keuangan</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Irania Zahra</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Manajemen SDM, Organisasi, dan Tata Usaha</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Feri Qotro Verhat Amaith</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Perlengkapan dan Rumah Tangga</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Nofiardi Syarif</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Pengelolaan Teknologi Informasi dan Komunikasi</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Samdea Anggieta</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Pemantauan Isi Siaran</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Wijanarko</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Perekaman Data dan Editing</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Taufiqurrahman</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Pengaduan Masyarakat</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Wayan Arditaningrum</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Penjatuhan Sanksi</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Rahayu Setianingsih</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Pengembangan Kebijakan dan Sistem Penyiaran</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Imam Waluyo</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Kelembagaan</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Wayan Arditaningrum</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">Asisten Ahli</td>
                                    <td className="w-1/2 px-6 py-4 text-left border border-[#EDDBD9]">
                                    Moh. Nur Huda, M.Si. <br></br>
                                    M. Akbar Yaumul Nahar <br></br>
                                    Jehan Mahendra <br></br>
                                    Achmad Riyadi <br></br>
                                    Anifatul Masruroh <br></br>
                                    Intantri Kusmawarni <br></br>
                                    Fanda Puspitasari <br></br>
                                    Ahmad Halim <br></br>
                                    Ni Wayan Hana Pertiwi <br></br>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default struktur;