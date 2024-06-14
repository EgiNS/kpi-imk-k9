import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import RegulasiComp from "../../component/regulasi/RegulasiComp";

export default function Regulasi () {
    return (
        <div className="bg-[#F9F9FB]">
            <NavBar />
            <div className="pt-24 lg:px-20 md:px-10 px-4">
                <h1 className="text-center md:text-3xl sm:text-2xl text-lg text-[#420101] font-bold lg:mb-4 mb-2 mt-4">
                    Regulasi KPI
                </h1>
                <RegulasiComp />
            </div>
            <Footer />
        </div>
    );
}