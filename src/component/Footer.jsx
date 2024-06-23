import { Link } from "react-router-dom";
import logo from "/img/logo_kpi.png";

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#9D262A] sm:text-base text-sm w-full sm:px-16 px-4 py-8 sm:pr-24">
                {/* <img src={logo} alt="Logo" className="h-20 mb-1" /> */}
                <div className="text-[#F9F9FB] flex md:flex-row flex-col justify-between">
                    <div>
                        <p className="font-bold text-lg mt-3 mb-2">Komisi Penyiaran Indonesia Pusat</p>
                        <p>Gedung Komisi Penyiaran Indonesia</p>
                        <p>Jl.Ir. H. Djuanda No.36, Jakarta 10120 Indonesia</p>
                        <p>Telp. 021-22346444, 22035002,22346384</p>
                        <p>Fax. 021-21203907, 21203922</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg mt-3 mb-2">Tentang KPI</p>
                        <p><Link to="/struktur-sekretariat" className="hover:underline">Struktur Sekretariat</Link></p>
                        <p><Link to="/dasar-pembentukan" className="hover:underline">Dasar Pembentukan</Link></p>
                        <p><Link to="/visi-dan-misi" className="hover:underline">Visi dan Misi</Link></p>
                        <p><Link to="/profil-KPI" className="hover:underline">Profil KPI</Link></p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <p className="font-bold text-lg mt-3 mb-2">Media Sosial</p>
                        <div className="flex flex-row gap-x-5">
                            <a target="_blank" href="https://www.facebook.com/KPIPusat/"><img src="/img/facebook.svg" alt="" className="h-11"/></a>
                            <a target="_blank" href="http://twitter.com/KPI_Pusat"><img src="/img/x.svg" alt="" className="h-11"/></a>
                            <a target="_blank" href="https://www.instagram.com/kpipusat/"><img src="/img/instagram.svg" alt="" className="h-11"/></a>   
                        </div>
                        <a href="https:/wa.me/6281213070000" target="_blank" className="flex flex-row items-center gap-x-3">
                            <img src="/img/sms.svg" alt="" className="h-11"/>
                            <p>0812 130 70000</p>
                        </a>
                        <a href="mailto:layananpublik@kpi.go.id" className="flex flex-row items-center gap-x-3">
                            <img src="/img/email.svg" alt="" className="h-11"/>
                            <p>layananpublik@kpi.go.id</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#EDDBD9] sm:text-base text-sm sm:px-16 px-4 sm:pr-24 py-2">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <p className="sm:mb-0 mb-2 text-center sm:text-start">Hak Cipta © 2024 Komisi Penyiaran Indonesia. Semua Hak Dilindungi.</p>
                    <div className="flex flex-row items-center gap-x-5">
                        <img src="/img/callcenter.svg" alt="" className="h-12"/>
                        <p className="font-bold">021-2234 6444</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}