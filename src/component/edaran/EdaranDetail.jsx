import { useEffect } from "react";
import Breadcrumbs from "../Breadcrumb";

export default function EdaranDetail({edaran}) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>
            <div className="mb-8">
                <Breadcrumbs />
            </div>
            <div data-aos="fade-up" className="mx-auto p-6 bg-white shadow-md my-6 rounded-xl">
                <h1 className="text-center font-bold sm:mb-2 mb-1 text-lg">SURAT EDARAN</h1>
                <h2 className="text-center font-bold sm:mb-2 mb-1 text-lg">KOMISI PENYIARAN INDONESIA PUSAT {edaran.nomor}</h2>
                <h2 className="text-center font-bold mb-6 text-lg">TENTANG {(edaran.judul).toUpperCase()}</h2>
                <div dangerouslySetInnerHTML={{ __html: edaran.deskripsi }} className="prose text-justify" />
            </div>
        </div>
    )
}