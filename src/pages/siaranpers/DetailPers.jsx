import React from 'react';
import { useParams } from 'react-router-dom';
// import EdaranData from '../../component/edaran/EdaranData.js';
import SiaranData from '../../component/siaranpers/SiaranData.js';
import Footer from '../../component/Footer.jsx';
import NavBar from '../../component/Navbar.jsx';
import SiaranDetail from '../../component/siaranpers/SiaranDetail.jsx';

const DetailPers = () => {
  const { slug } = useParams();
  const edaran = SiaranData.find((item) => item.slug === slug);

  if (!edaran) {
    return <div className="container mx-auto mt-8">Data tidak ditemukan</div>;
  }

  return (
    <div>
        <NavBar />
            <div className="sm:pt-36 pt-24 lg:px-20 md:px-10 px-5 pb-12">
                <SiaranDetail edaran={edaran} />
            </div>
        <Footer />
    </div>
  );
};

export default DetailPers;
