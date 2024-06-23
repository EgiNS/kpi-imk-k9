import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import SiaranComp from "../../component/siaranpers/SiaranComp";

export default function SiaranPers() {
    return (
        <div>
            <NavBar />
                <div className="sm:pt-24 pt-12">
                    <SiaranComp />
                </div>
            <Footer />
        </div>
    )
}