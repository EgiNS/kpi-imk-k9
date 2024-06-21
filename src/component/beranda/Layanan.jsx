import apresiasi from "/img/apresiasi.svg"
import aduan from "/img/aduan.svg"
import edaran from "/img/edaran.svg"
import siaran from "/img/siaran.svg"
import { Link } from "react-router-dom"

export default function Layanan() {

    return (
        <div className="grid grid-rows-1 grid-cols-4 lg:px-24 md:px-16 cursor-pointer justify-center lg:gap-x-28 md:gap-x-16 gap-x-5 mt-6">
            <Link to="/apresiasi">
                <img src={apresiasi} alt="" className="rounded-full"/>
                <p className="text-center text-[#420101] sm:text-base text-sm font-medium mt-2">Apresiasi</p>
            </Link>
            <Link to="/pengaduan" >
                <img src={aduan} alt="" className="rounded-full"/>
                <p className="text-center text-[#420101] sm:text-base text-sm font-medium mt-2">Aduan</p>
            </Link>
            <Link to="/edaran-dan-sanksi">
                <img src={edaran} alt="" className="rounded-full"/>
                <p className="text-center text-[#420101] sm:text-base text-sm font-medium mt-2">Edaran & Sanksi</p>
            </Link>
            <div>
                <img src={siaran} alt="" className="rounded-full"/>
                <p className="text-center text-[#420101] sm:text-base text-sm font-medium mt-2">Siaran Pers</p>
            </div>
        </div>
    )
}