import { useEffect } from "react";
import Breadcrumbs from "../Breadcrumb";

export default function TeguranDetail({edaran}) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return(
        <div>
            <div className="mb-8">
                <Breadcrumbs />
            </div>
            <div className="mx-auto p-6 bg-white shadow-md my-6 rounded-xl">
                <h1 className="text-2xl font-bold mb-8 text-center">{edaran.judul}</h1>
                <p className="mb-2"><strong>Tanggal<span className='ml-[4.8rem]'>:</span></strong> {edaran.tanggal}</p>
                <p className="mb-2"><strong>No Surat<span className='ml-[4.5rem]'>:</span></strong> {edaran.noSurat}</p>
                <p className="mb-2"><strong>Status<span className='ml-[5.5rem]'>:</span></strong> {edaran.status}</p>
                <p className="mb-2"><strong>Stasiun Televisi<span className='ml-4'>:</span></strong> {edaran.stasiun}</p>
                <p className="mb-4"><strong>Program Siaran<span className='ml-5'>:</span></strong> {edaran.program}</p>
                <div dangerouslySetInnerHTML={{ __html: edaran.deskripsi }} className="prose text-justify" />
            </div>
        </div>
    )
}