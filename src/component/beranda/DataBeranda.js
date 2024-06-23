const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Menghapus karakter khusus
    .trim()
    .replace(/\s+/g, '-');         // Mengganti spasi dengan strip
};

export const newsData = {
  "Berita Terkini": [
    {
      id: 1,
      title:
        "Penuhi Undangan Google dan Youtube Asia Tenggara, KPI Dorong Pembangunan SDM Melalui Konten di Semua Platform",
      slug: generateSlug('Penuhi Undangan Google dan Youtube Asia Tenggara, KPI Dorong Pembangunan SDM Melalui Konten di Semua Platform'),
      date: "10 Juni 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Juni/Youtube-Singapura-1.jpg",
      content:
        "Komisi Penyiaran Indonesia (KPI) Pusat berkesempatan memenuhi undangan Google dan Youtube perwakilan Asia Tenggara ...",
      url: "/berita-terkini",
    },
    {
      id: 2,
      title:
        "Evaluasi RTV: KPI Minta Kontribusi ILM untuk Edukasi Publik Bijak Bermedia Sosial",
      slug: generateSlug('Evaluasi RTV: KPI Minta Kontribusi ILM untuk Edukasi Publik Bijak Bermedia Sosial'),
      date: "07 Juni 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Juni/WhatsApp-Image-2024-06-06-at-08.34.35-1.jpeg",
      content:
        "Televisi harus menyiarkaan Iklan Layanan Masyarakat (ILM) secara optimal untuk mengedukasi masyarakat agar bijak dalam menggunakan media sosial....",
    },
    {
      id: 3,
      title:
        "Hadir di KPI Pusat, MCMC Kunjungi Sekolah P3SPS dan Pemantauan Langsung",
      slug: generateSlug("Hadir di KPI Pusat, MCMC Kunjungi Sekolah P3SPS dan Pemantauan Langsung"),
      date: "07 Juni 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Juni/MCMC-3.jpg",
      content:
        "Pesatnya perubahan teknologi informasi, termasuk penyiaran di dalamnya, mengharuskan regulator bekerja sama antar negara di kawasan, dalam memanfaatkan...",
    },
    {
      id: 4,
      title:
        "(Bangun Ekosistem Ecobroadcasting) Ketua KPI Pusat: Kuatkan Narasi dan Perlindungan Jurnalis",
      slug: generateSlug("(Bangun Ekosistem Ecobroadcasting) Ketua KPI Pusat: Kuatkan Narasi dan Perlindungan Jurnalis"),
      date: "06 Juni 2024",
      location: "Bandung",
      img: "https://kpi.go.id/images/2024/Juni/Tanam-Pohon-1.jpg",
      content:
        "Rangkaian kegiatan Peringatan Hari Penyiaran Daerah (Harsiarda) di Jawa Barat (Jabar) salah satu acaranya ditandai dengan penanaman bibit...",
    },
  ],
  "Berita KPID": [
    {
      id: 1,
      title: "KPID Sumbar Gandeng Unand Bahas Ranperda Penyiaran",
      slug: generateSlug("KPID Sumbar Gandeng Unand Bahas Ranperda Penyiaran"),
      date: "14 Juni 2024",
      location: "Padang",
      img: "https://kpi.go.id/images/2024/Juni/KPID-Sumbar-1.jpeg",
      content:
        "Rancangan Peraturan Daerah (Ranperda) Penyiaran Sumatera Barat lanjutkan proses tahapan perancangan melalui Focus Group Discussion (FGD) Public Hearing...",
      url: "/berita-KPID",
    },
    {
      id: 2,
      title:
        "Bupati Toba Berharap KPID Sumut Dorong Lembaga Penyiaran Masifkan Siaran Lokal",
      slug: generateSlug("Bupati Toba Berharap KPID Sumut Dorong Lembaga Penyiaran Masifkan Siaran Lokal"),
      date: "13 Juni 2024",
      location: "Sibolga",
      img: "https://kpi.go.id/images/2024/Juni/KPID-Sumut-1.jpeg",
      content:
        "Setelah memaparkan kondisi dan potensi pariwisata di Kabupaten Toba, Bupati Toba, Poltak Sitorus berharap Komisi Penyiaran Indonesia Daerah...",
    },
    {
      id: 3,
      title:
        "Sambut Pilkada 2024, KPID Riau Minta Lembaga Penyiaran Aktif Sosialisasi",
      slug: generateSlug("Sambut Pilkada 2024, KPID Riau Minta Lembaga Penyiaran Aktif Sosialisasi"),
      date: "12 Juni 2024",
      location: "Pekanbaru",
      img: "https://kpi.go.id/images/2024/Juni/KPID-Riau-1.jpg",
      content:
        "Setelah memaparkan kondisi dan potensi pariwisata di Kabupaten Toba, Bupati Toba, Poltak Sitorus berharap Komisi Penyiaran Indonesia Daerah...",
    },
    {
      id: 4,
      title:
        "Peringati Hari Penyiaran Tingkat Jabar, KPID Ingatkan Soal Moderasi Beragama",
      slug: generateSlug( "Peringati Hari Penyiaran Tingkat Jabar, KPID Ingatkan Soal Moderasi Beragama"),
      date: "20 Mei 2024",
      location: "Kadipaten",
      img: "https://kpi.go.id/images/2018/kpid.jpg",
      content:
        "Peringatan Hari Penyiaran Tingkat Jawa Barat (Jabar) di Kampus Institut Agama Islam Latifah Mubarokiyah (IAILM) Suryalaya, Kamis 16 ...",
    },
  ],
  "Dinamika Penyiaran": [
    {
      id: 1,
      title:
        "BBC Sampaikan Permintaan Maaf atas Komentar Tak Pantas dalam Siaran Program D-Day 80",
      slug: generateSlug("BBC Sampaikan Permintaan Maaf atas Komentar Tak Pantas dalam Siaran Program D-Day 80"),
      date: "14 Juni 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Juni/BBC-2.jpg",
      content:
        "BBC telah mengeluarkan permintaan maaf atas 'komentar tidak pantas' yang terdengar selama siaran D-Day. Awal pekan ini, lembaga...",
      url: "/dinamika-penyiaran",
    },
    {
      id: 2,
      title:
        "Aljazair Tegur Stasiun TV karena Iklan Ramadhan Berlebihan dan Siaran yang Tidak Bermoral",
      slug: generateSlug("Aljazair Tegur Stasiun TV karena Iklan Ramadhan Berlebihan dan Siaran yang Tidak Bermoral"),
      date: "26 Maret 2024",
      location: "Aljazair",
      img: "https://kpi.go.id/images/2024/Maret/Algeria.jpeg",
      content:
        "Para pejabat di Aljazair menegur stasiun televisi atas pilihan konten yang mereka buat sejak awal Ramadhan, pekan lalu....",
    },
    {
      id: 3,
      title: "Penyiar Radio AI Pertama di Indonesia Bernama Aimee",
      slug: generateSlug("Penyiar Radio AI Pertama di Indonesia Bernama Aimee"),
      date: "13 Maret 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Maret/Aimee-3.jpeg",
      content:
        "Salah satu stasiun radio swasta terkemuka di Indonesia, Mustang 88 FM, memperkenalkan inovasi terbaru dalam dunia penyiaran radio...",
    },
    {
      id: 4,
      title: "Industri K-Drama Hadapi Krisis Gara-gara Bayaran Artis Meroket",
      slug: generateSlug("Industri K-Drama Hadapi Krisis Gara-gara Bayaran Artis Meroket"),
      date: "15 Februari 2024",
      location: "Jakarta",
      img: "https://kpi.go.id/images/2024/Februari/K-Drama.jpg",
      content:
        "Industri K-drama dilaporkan sedang menghadapi krisis gara-gara bayaran aktor yang semakin tinggi. Asosiasi Perusahaan Produksi Drama Korea mengadakan...",
    },
  ],
  Newsletter: [
    {
      id: 1,
      title: "Penyiaran Kita Vol.1",
      date: "Juli - Agustus 2023",
      img: "https://kpi.go.id/images/2024/April/NL-Juli-Agus-2023.jpg",
      url: "/newsletter",
      link: "https://cloud.kpi.go.id/index.php/s/xaWMoPwt5EKtLkG",
    },
    {
      id: 1,
      title: "Penyiaran Kita Vol.2",
      date: "November - Desember 2023",
      img: "https://kpi.go.id/images/2024/April/NL-November-Desember-2023.jpg",
      link: "https://cloud.kpi.go.id/index.php/s/fPmLzsKN5QkbXfD",
    },
  ],
};

export const kajianData = [
  {
    id: 1,
    title: "Potret Kualitas Program Siaran Anak di Televisi Indonesia",
    slug: generateSlug("Potret Kualitas Program Siaran Anak di Televisi Indonesia"),
    date: "09 Mei 2023",
    img: "https://kpi.go.id/images/2023/Juni/cover-buku-potret-siaran-anak---revisi-.jpg",
  },
  {
    id: 2,
    title: "Potret Sinetron di Media Televisi Indonesia",
    slug: generateSlug("Potret Sinetron di Media Televisi Indonesia"),
    date: "09 Mei 2023",
    img: "https://kpi.go.id/images/2023/Juni/cover-buku-potret-sinetron-kpi---REVISI-.jpg",
  },
  {
    id: 3,
    title: "Potret Program Siaran Wisata dan Budaya di Indonesia",
    slug: generateSlug("Potret Program Siaran Wisata dan Budaya di Indonesia"),
    date: "27 Desember 2022",
    img: "https://kpi.go.id/images/2022/Desember/Cover-Buku-Wisata-Budaya-Revisi001.jpg",
  },
  {
    id: 4,
    title:
      "Potret Kualitas Program Talkshow di Televisi Indonesia",
    slug: generateSlug("Potret Kualitas Program Talkshow di Televisi Indonesia"),
    date: "26 Desember 2022",
    img: "https://kpi.go.id/images/2022/Desember/Cover-Buku-Talkshow.jpg",
  },
  {
    id: 5,
    title: "Potret Program Siaran Religi Di Televisi Indonesia",
    slug: generateSlug("Potret Program Siaran Religi Di Televisi Indonesia"),
    date: "15 Desember 2022",
    img: "https://kpi.go.id/images/2022/Desember/Religiositas-di-Layar-Kaca---low.jpg",
  },
];
