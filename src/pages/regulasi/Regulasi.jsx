import Breadcrumbs from "../../component/Breadcrumb";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import RegulasiComp from "../../component/regulasi/RegulasiComp";

export default function Regulasi () {
    return (
        <div className="bg-[#F9F9FB]">
            <NavBar />
            <div className="pt-24 lg:px-20 md:px-10 px-4">
                <div className="mt-12">
                    <Breadcrumbs />
                </div>
                <RegulasiComp />
            </div>
            <Footer />
        </div>
    );
}