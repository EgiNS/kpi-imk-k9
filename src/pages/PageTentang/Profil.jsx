import { useEffect } from "react";
import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx";
import { getGroupedData } from "../../component/tentangKPI/DataProfil.js";
import Breadcrumbs from "../../component/Breadcrumb.jsx";

export default function Profil() {
  const groupedData = getGroupedData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12 lg:px-20 md:px-10 px-4 bg-[#F9F9FB]">
        <div className="mt-12">
          <Breadcrumbs />
        </div>
        <div className="pt-2 my-6">
          <h1 className="font-bold text-center text-[#420101] md:text-3xl sm:text-2xl text-xl mb-6">
            Profil KPI
          </h1>
          <p className="line-break text-indent-2 text-justify mb-5">
            Komisi Penyiaran Indonesia (KPI), yang lahir atas amanat
            Undang-undang Nomor 32 Tahun 2002, terdiri atas KPI Pusat dan KPI
            Daerah (tingkat provinsi). Anggota KPI Pusat (9 orang) dipilih oleh
            Dewan Perwakilan Rakyat dan KPI Daerah (7 orang) dipilih oleh Dewan
            Perwakilan Rakyat Daerah. Selain itu, anggaran program kerja KPI
            Pusat dibiayai oleh APBN (Anggaran Pendapatan Belanja Negara) dan
            KPI Daerah dibiayai oleh APBD (Anggaran Pendapatan Belanja Daerah).
          </p>
          <p className="line-break text-indent-2 text-justify mb-5">
            Dalam pelaksanaan tugasnya, KPI dibantu oleh sekretariat tingkat
            eselon II yang stafnya terdiri dari staf pegawai negeri sipil serta
            staf profesional non PNS. KPI merupakan wujud peran serta masyarakat
            berfungsi mewadahi aspirasi serta mewakili kepentingan masyarakat
            akan penyiaran harus mengembangkan program-program kerja hingga
            akhir kerja dengan selalu memperhatikan tujuan yang diamanatkan
            Undang- undang Nomor 32 tahun 2002 Pasal 3:
          </p>
          <p className="line-break text-indent-2 text-justify mb-5">
            "Penyiaran diselenggarakan dengan tujuan untuk memperkukuh integrasi
            nasional, terbinanya watak dan jati diri bangsa yang beriman dan
            bertaqwa, mencerdaskan kehidupan bangsa, memajukan kesejahteraan
            umum, dalam rangka membangun masyarakat yang mandiri, demokratis,
            adil, dan sejahtera, serta menumbuhkan industri penyiaran
            Indonesia."
          </p>
          <p className="line-break text-indent-2 text-justify mb-5">
            Untuk mencapai tujuan tersebut organisasi KPI dibagi menjadi tiga
            bidang, yaitu bidang kelembagaan, struktur penyiaran dan pengawasan
            isi siaran. Bidang kelembagaan menangani persoalan hubungan antar
            kelembagaan KPI, koordinasi KPID serta pengembangan kelembagaan KPI.
            Bidang struktur penyiaran bertugas menangani perizinan, industri dan
            bisnis penyiaran. Sedangkan bidang pengawasan isi siaran menangani
            pemantauan isi siaran, pengaduan masyarakat, advokasi dan literasi
            media.
          </p>
          <p className="line-break text-indent-2 text-justify mb-10">
            Mekanisme pembentukan KPI dan rekrutmen anggota yang diatur oleh
            Undang-undang nomor 32 tahun 2002 akan menjamin bahwa pengaturan
            sistem penyiaran di Indonesia akan dikelola secara partisipatif,
            transparan, akuntabel sehingga menjamin independensi KPI.
          </p>
        </div>
        <div className="space-y-8">
          {groupedData.map((group, index) => (
            <div key={index} className="text-center">
              <h1 className="font-bold text-center text-[#420101] md:text-3xl sm:text-2xl text-xl mb-6">
                {group.title}
              </h1>
              <div className="flex justify-center">
                <div
                  className={`grid gap-4 ${
                    index === 0
                      ? "grid-cols-1 md:grid-cols-2"
                      : index === 1
                      ? "grid-cols-1 md:grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10"
                  }`}
                >
                  {group.data.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border border-[#9D262A] shadow-md w-full md:w-auto"
                    >
                      <div
                        className="relative"
                        style={{ paddingTop: "133.33%" }}
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.position}</p>
                        <p className="text-sm text-gray-600">{item.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
