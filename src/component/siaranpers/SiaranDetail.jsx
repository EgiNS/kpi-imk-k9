import { useEffect } from "react";
import Breadcrumbs from "../Breadcrumb";

export default function SiaranDetail({ edaran }) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <div className="mb-8">
        <Breadcrumbs />
      </div>
      <div data-aos="fade-up" className="mx-auto p-6 bg-white shadow-md my-6 rounded-xl">
        <h1 className="text-center font-bold mb-2 text-lg">SIARAN PERS</h1>
        <h2 className="text-center font-bold mb-2 text-lg">
          Nomor: {edaran.nomor}
        </h2>
        <h2 className="text-center font-bold mb-6 text-lg">
          {edaran.judul.toUpperCase()}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: edaran.konten }}
          className="prose text-justify"
        />
      </div>
    </>
  );
}
