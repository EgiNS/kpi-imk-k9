import { useState, useEffect } from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import HorizontalBarChart from "../../component/publikasi/ikpstv/HorizontalBarChart";
import LineChart from "../../component/publikasi/ikpstv/LineChart";
import Publikasi from "../../component/publikasi/ikpstv/Publikasi";
import Breadcrumbs from "../../component/Breadcrumb";

const Ikpstv = () => {
  const dataLineChart = [
    {label: "2017", value: 2.88},
    {label: "2018", value: 2.81},
    {label: "2019", value: 2.90},
    {label: "2020", value: 3.21},
    {label: "2021", value: 3.13},
    {label: "2022", value: 3.20},
  ];

  const dataByProgram = {
    Berita: [
      { name: "2017", value: 3 },
      { name: "2018", value: 3.01 },
      { name: "2019", value: 3.21 },
      { name: "2020", value: 3.36 },
      { name: "2021", value: 3.24 },
      { name: "2022", value: 3.31 },
    ],
    Talkshow: [
      { name: "2017", value: 3.04 },
      { name: "2018", value: 3.03 },
      { name: "2019", value: 3.22 },
      { name: "2020", value: 3.50 },
      { name: "2021", value: 3.32 },
      { name: "2022", value: 3.46 },
    ],
    VarietyShow: [
        { name: "2017", value: 2.61 },
        { name: "2018", value: 2.68 },
        { name: "2019", value: 2.52 },
        { name: "2020", value: 2.98 },
        { name: "2021", value: 2.92 },
        { name: "2022", value: 3.20 },
    ],
    Infotaiment: [
        { name: "2017", value: 2.51 },
        { name: "2018", value: 2.20 },
        { name: "2019", value: 2.34 },
        { name: "2020", value: 2.86 },
        { name: "2021", value: 2.59 },
        { name: "2022", value: 2.80 },
    ],
    Sinetron: [
        { name: "2017", value: 2.55 },
        { name: "2018", value: 2.28 },
        { name: "2019", value: 2.48 },
        { name: "2020", value: 2.88 },
        { name: "2021", value: 2.62 },
        { name: "2022", value: 2.70 },
    ],
    Anak: [
        { name: "2017", value: 2.98 },
        { name: "2018", value: 2.96 },
        { name: "2019", value: 3.12 },
        { name: "2020", value: 3.28 },
        { name: "2021", value: 3.32 },
        { name: "2022", value: 3.18 },
    ],
    Religi: [
        { name: "2017", value: 3.11 },
        { name: "2018", value: 3.13 },
        { name: "2019", value: 3.09 },
        { name: "2020", value: 3.46 },
        { name: "2021", value: 3.49 },
        { name: "2022", value: 3.53 },
    ],
    WisatadanBudaya: [
        { name: "2017", value: 3.25 },
        { name: "2018", value: 3.27 },
        { name: "2019", value: 3.19 },
        { name: "2020", value: 3.44 },
        { name: "2021", value: 3.62 },
        { name: "2022", value: 3.44 },
    ],
  };

  const dataByYear = {
    2022: [
        { name: "Berita", value: 3.31 },
        { name: "Talkshow", value: 3.46 },
        { name: "Variety Show", value: 3.20 },
        { name: "Infotaiment", value: 2.80 },
        { name: "Sinetron", value: 2.70 },
        { name: "Anak", value: 3.18 },
        { name: "Religi", value: 3.53 },
        { name: "Wisata dan Budaya", value: 3.44 },
    ],
    2021: [
        { name: "Berita", value: 3.24 },
        { name: "Talkshow", value: 3.32 },
        { name: "Variety Show", value: 2.92 },
        { name: "Infotaiment", value: 2.59 },
        { name: "Sinetron", value: 2.62 },
        { name: "Anak", value: 3.32 },
        { name: "Religi", value: 3.49 },
        { name: "Wisata dan Budaya", value: 3.62 },
    ],
    2020: [
        { name: "Berita", value: 3.36 },
        { name: "Talkshow", value: 3.50 },
        { name: "Variety Show", value: 2.98 },
        { name: "Infotaiment", value: 2.86 },
        { name: "Sinetron", value: 2.88 },
        { name: "Anak", value: 3.28 },
        { name: "Religi", value: 3.46 },
        { name: "Wisata dan Budaya", value: 3.44 },
    ],
    2019: [
        { name: "Berita", value: 3.21 },
        { name: "Talkshow", value: 3.22 },
        { name: "Variety Show", value: 2.52 },
        { name: "Infotaiment", value: 2.34 },
        { name: "Sinetron", value: 2.48 },
        { name: "Anak", value: 3.12 },
        { name: "Religi", value: 3.09 },
        { name: "Wisata dan Budaya", value: 3.19 },
    ],
    2018: [
        { name: "Berita", value: 3.01 },
        { name: "Talkshow", value: 3.03 },
        { name: "Variety Show", value: 2.58 },
        { name: "Infotaiment", value: 2.20 },
        { name: "Sinetron", value: 2.28 },
        { name: "Anak", value: 2.96 },
        { name: "Religi", value: 3.13 },
        { name: "Wisata dan Budaya", value: 3.27 },
    ],
    2017: [
        { name: "Berita", value: 3.00 },
        { name: "Talkshow", value: 3.03 },
        { name: "Variety Show", value: 2.43 },
        { name: "Infotaiment", value: 2.36 },
        { name: "Sinetron", value: 2.45 },
        { name: "Anak", value: 3.04 },
        { name: "Religi", value: 3.16 },
        { name: "Wisata dan Budaya", value: 3.30 },
    ],
  };

  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState("year");
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedProgram, setSelectedProgram] = useState("Berita");

  useEffect(() => {
    setData(dataByYear["2022"]);
  }, []);

  const handleFilterTypeChange = (event) => {
    const value = event.target.value;
    setFilterType(value);
    if (value === "program") {
      setData(dataByProgram[selectedProgram.replaceAll(' ', '')]);
    } else if (value === "year") {
      setData(dataByYear[selectedYear]);
    }
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setSelectedYear(value);
    setData(dataByYear[value]);
  };

  const handleProgramChange = (event) => {
    const value = event.target.value;
    setSelectedProgram(value);
    setData(dataByProgram[value.replaceAll(' ', '')]);
  };

  return (
    <div className="bg-[#F9F9FB]">
      <NavBar />
      <div className="sm:pt-32 pt-16 flex flex-col">
      <div className="mt-5 md:px-14 px-5 flex justify-start">
                    <Breadcrumbs />
                </div>
        <h1 className="text-center md:text-3xl sm:text-2xl text-lg text-[#420101] font-bold lg:mb-5 mb-2">
          Indeks Kualitas Program Siaran Televisi
        </h1>
        <div className="mt-2 w-full md:px-14 px-5">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col mb-10 gap-x-5 items-center">
            <div className="pr-5 border-1 border-[#828282] rounded-xl shadow-md p-4 lg:mb-0 mb-6">
              <p>
                Indeks Kualitas Program Siaran Televisi (IKPSTV) adalah sebuah
                penilaian yang dilakukan oleh Komisi Penyiaran Indonesia (KPI)
                untuk mengukur kualitas program siaran televisi di Indonesia.
                Penilaian ini dilakukan secara berkala dan metodik, dengan
                menggunakan indikator-indikator yang telah ditetapkan oleh KPI.
                Indikator tersebut antara lain :
              </p>
              <ul className="list-disc ml-8 my-2">
                <li>Dimensi Pedoman Siaran</li>
                <li>Dimensi Edukasi</li>
                <li>Dimensi Informasi</li>
                <li>Dimensi Hiburan</li>
                <li>Dimensi Keberagaman</li>
                <li>Dimensi Perlindungan Anak</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-center">
                Hasil Indeks Kualitas Program Siaran Televisi 2017-2022
              </p>
              <LineChart data={dataLineChart} />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-6 lg:gap-x-10 flex flex-col border-1 border-black rounded-xl shadow-md p-3 mb-10">
            <h1 className="lg:hidden block md:text-lg text-base text-center font-bold text-[#420101]">Indeks Kualitas Program Siaran Televisi {filterType == "year" ? "Berdasarkan Kategori Program Tahun " + selectedYear : "Berdasarkan Program "+ selectedProgram + " Tahun 2017-2022"}</h1>
            <div className="lg:col-span-4 col-span-6 lg:order-first order-last">
              <h1 className="text-center lg:block hidden font-bold text-[#420101]">Indeks Kualitas Program Siaran Televisi {filterType == "year" ? "Berdasarkan Kategori Program Tahun " + selectedYear : "Berdasarkan Program "+ selectedProgram + " Tahun 2017-2022"}</h1>
              <HorizontalBarChart data={data} />
            </div>
            <div className="lg:col-span-2 pt-8">
              <div className="flex justify-between mb-1">
                <p>Tampilkan Berdasarkan</p>
                <select
                  name="filterType"
                  onChange={handleFilterTypeChange}
                  value={filterType}
                  className="lg:w-40 w-60"
                >
                  <option value="year">Tahun</option>
                  <option value="program">Kategori Program</option>
                </select>
              </div>
              {filterType === "year" && (
                <div className="flex justify-between">
                  <p>Pilih Tahun</p>
                  <select
                    name="year"
                    onChange={handleYearChange}
                    value={selectedYear}
                    className="lg:w-40 w-60"
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
              )}
              {filterType === "program" && (
                <div className="flex justify-between">
                  <p>Pilih Kategori Program</p>
                  <select
                    name="program"
                    onChange={handleProgramChange}
                    value={selectedProgram}
                    className="lg:w-40 w-60"
                  >
                    <option value="Berita">Berita</option>
                    <option value="Talkshow">Talkshow</option>
                    <option value="Variety Show">Variety Show</option>
                    <option value="Infotaiment">Infotaiment</option>
                    <option value="Sinetron">Sinetron</option>
                    <option value="Anak">Anak</option>
                    <option value="Religi">Religi</option>
                    <option value="Wisata dan Budaya">Wisata dan Budaya</option>
                  </select>
                </div>
              )}
              <p className="mt-4 lg:mb-0 mb-5">Standar KPI untuk nilai indeks ini adalah <span className="font-semibold">3.00</span></p>
            </div>
          </div>
          <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mb-4 mt-4">
            Publikasi Lengkap
          </h1>
          <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-x-3 gap-y-2 mb-16">
            <Publikasi src='\img\ikpstv\2015.png' title='Indeks Kualitas Program Siaran Televisi 2015' link="https://drive.google.com/file/d/0ByU1oJt56HTfck9wQ3pFRFNfRDg/view?resourcekey=0-M3bg7R5BbsZs1VeqQjJvCQ" />
            <Publikasi src='\img\ikpstv\2016.png' title='Indeks Kualitas Program Siaran Televisi 2016' link="https://drive.google.com/file/d/0ByU1oJt56HTfREI0WHBwSlBqanc/view?resourcekey=0-AOprLIsQb7qEQm8mGrqYXA" />
            <Publikasi src='\img\ikpstv\2017.png' title='Indeks Kualitas Program Siaran Televisi 2017' link="https://www.kpi.go.id/download/penelitian/Ekspose_Survei_II_tahun_2017.pdf" />
            <Publikasi src='\img\ikpstv\2018.jpg' title='Indeks Kualitas Program Siaran Televisi 2018' link="https://kpi.go.id/index.php/id/publikasi/survei-indeks-kualitas-siaran-televisi?layout=edit&id=35200" />
            <Publikasi src='\img\ikpstv\2019.png' title='Indeks Kualitas Program Siaran Televisi 2019' link="https://digilib.uin-suka.ac.id/id/eprint/40380/1/LAPORAN%20HASIL%20RISET%20PERIODE%201%202019%20-%20wa.pdf" />
            <Publikasi src='\img\ikpstv\2020.png' title='Indeks Kualitas Program Siaran Televisi 2020' link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiI-tP58s6GAxXhe2wGHTH8BE8QFnoECCcQAQ&url=https%3A%2F%2Fdigilib.uin-suka.ac.id%2Fid%2Feprint%2F57088%2F1%2FRiset%2520Indeks%2520Kualitas%2520Program%2520Siaran%2520Televisi%2520Tahun%25202020%2520Periode%25201.pdf&usg=AOvVaw1fWrlMwW389pjHt9GgDBZ6&opi=89978449" />
            <Publikasi src='\img\ikpstv\2021.png' title='Indeks Kualitas Program Siaran Televisi 2021' link="https://www.suarasurabaya.net/wp-content/uploads/2021/11/ALL-HASIL-RISET-INDEKS-KUALITAS-PROGRAM-SIARAN-TELEVISI-PERIODE-1-TAHUN-2021.pdf" />
            <Publikasi src='\img\ikpstv\2022.png' title='Indeks Kualitas Program Siaran Televisi 2022' link="https://drive.google.com/file/d/1SY_HClrL69VaHM_9XcMW7Uc4XJrfZjkJ/view" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ikpstv;
