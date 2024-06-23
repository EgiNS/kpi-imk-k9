import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import EdaranComp from "../../component/edaran/EdaranComp";

export default function Edaran() {
    return (
        <div>
            <NavBar />
                <div className="sm:pt-24 pt-12">
                    <EdaranComp />
                </div>
            <Footer />
        </div>
    )
}