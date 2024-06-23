import React from 'react';
import { useParams } from 'react-router-dom';
import EdaranData from '../../component/edaran/EdaranData.js';
import Footer from '../../component/Footer.jsx';
import NavBar from '../../component/Navbar.jsx';
import TeguranDetail from '../../component/edaran/TeguranDetail.jsx';
import EdaranDetail from '../../component/edaran/EdaranDetail.jsx';

const DetailEdaran = () => {
  const { slug } = useParams();
  const edaran = EdaranData.find((item) => item.slug === slug);

  if (!edaran) {
    return <div className="container mx-auto mt-8">Data tidak ditemukan</div>;
  }

  return (
    <div>
        <NavBar />
            <div className="pt-36 lg:px-20 md:px-10 px-5 pb-12">
                {
                    edaran.tipe === "teguran" ?
                    <TeguranDetail edaran={edaran} /> : <EdaranDetail edaran={edaran} />
                }
            </div>
        <Footer />
    </div>
  );
};

export default DetailEdaran;
