import React, {useEffect} from 'react';
import Breadcrumbs from '../Breadcrumb';

const Pengawasan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto p-6">
      <div className="mt-6">
        <Breadcrumbs />
      </div>
      <div className='p-6 shadow-md my-6 rounded-xl'>
        <h1 className="font-bold text-center text-[#420101] md:text-3xl text-2xl mb-6">Pengawasan Penyiaran</h1>
        <div className="leading-relaxed text-[#000000] text-justify mb-6">
          <p>Eksistensi KPI adalah bagian dari wujud peran serta masyarakat dalam hal penyiaran, baik sebagai wadah aspirasi maupun mewakili kepentingan masyarakat (UU Penyiaran, pasal 8 ayat 1). Legitimasi politik bagi posisi KPI dalam kehidupan kenegaraan berikutnya secara tegas diatur oleh UU Penyiaran sebagai lembaga negara independen yang mengatur hal-hal mengenai penyiaran (UU Penyiaran, pasal 7 ayat 2). Secara konseptual posisi ini mendudukkan KPI sebagai lembaga kuasi negara atau dalam istilah lain juga biasa dikenal dengan auxilarry state institution.</p><br />
          <p>Dalam rangka menjalankan fungsinya KPI memiliki kewenangan (otoritas) menyusun dan mengawasi berbagai peraturan penyiaran yang menghubungkan antara lembaga penyiaran, pemerintah dan masyarakat. Pengaturan ini mencakup semua daur proses kegiatan penyiaran, mulai dari tahap pendirian, operasionalisasi, pertanggungjawaban dan evaluasi. Dalam melakukan kesemua ini, KPI berkoordinasi dengan pemerintah dan lembaga negara lainnya, karena spektrum pengaturannya yang saling berkaitan. Ini misalnya terkait dengan kewenangan yudisial dan yustisial karena terjadinya pelanggaran yang oleh UU Penyiaran dikategorikan sebagai tindak pidana. Selain itu, KPI juga berhubungan dengan masyarakat dalam menampung dan menindaklanjuti segenap bentuk apresiasi masyarakat terhadap lembaga penyiaran maupun terhadap dunia penyiaran pada umumnya.</p><br />
          <p>Berikut ini adalah kewenangan, tugas dan kewajiban KPI dalam rangka melakukan pengaturan penyiaran.</p>
        </div>
        <p className='text-lg font-bold text mb-4 mt-2 text-center'>Wewenang</p>
        <div className="leading-relaxed mb-8 text-[#000000]">
          <ol className="list-decimal list-inside space-y-2 text-justify">
              <li>Menetapkan standar program siaran</li>
              <li>Menyusun peraturan dan menetapkan pedoman perilaku penyiaran (diusulkan oleh asosiasi/masyarakat penyiaran kepada KPI)</li>
              <li>Mengawasi pelaksanaan peraturan dan pedoman perilaku penyiaran serta standar program siaran</li>
              <li>Memberikan sanksi terhadap pelanggaran peraturan dan pedoman perilaku penyiaran serta standar program siaran</li>
              <li>Melakukan koordinasi dan/atau kerjasama dengan Pemerintah, lembaga penyiaran, dan masyarakat</li>
          </ol>
        </div>
        <p className='text-lg font-bold text mb-4 mt-2 text-center'>Tugas dan Kewajiban</p>
        <div className="leading-relaxed mb-8 text-[#000000]">
          <ol className="list-decimal list-inside space-y-2 text-justify">
              <li>Menjamin masyarakat untuk memperoleh informasi yang layak dan benar sesuai dengan hak asasi manusia</li>
              <li>Ikut membantu pengaturan infrastruktur bidang penyiaran</li>
              <li>Ikut membangun iklim persaingan yang sehat antarlembaga penyiaran dan industri terkait</li>
              <li>Memelihara tatanan informasi nasional yang adil, merata, dan seimbang</li>
              <li>Menampung, meneliti, dan menindaklanjuti aduan, sanggahan, serta kritik dan apresiasi masyarakat terhadap penyelenggaraan penyiaran</li>
              <li>Menyusun perencanaan pengembangan sumber daya manusia yang menjamin profesionalitas di bidang penyiaran</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pengawasan;
