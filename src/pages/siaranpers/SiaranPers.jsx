import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import SiaranComp from "../../component/siaranpers/SiaranComp";

export default function SiaranPers() {
    return (
        <div>
            <NavBar />
                <div className="pt-24">
                    <SiaranComp />
                </div>
            <Footer />
        </div>
    )
}