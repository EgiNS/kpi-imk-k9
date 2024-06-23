import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DataKPID from './DataKPID';
import Breadcrumbs from '../Breadcrumb';

const DetailKPID = () => {
    const { slug } = useParams();
    const berita = DataKPID.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    if (!berita) {
        return <div>Berita tidak ditemukan</div>;
    }

    const paragraphs = berita.fullcontent.split('<br><br>');
    const firstParagraph = paragraphs.shift();

    return (
        <div className=''>
            <div className="mt-12 mb-8">
                <Breadcrumbs />
            </div>
            <div data-aos="fade-up" className="mx-auto p-6 bg-white shadow-md my-6 rounded-xl">
                <h1 className="font-bold text-[#000000] md:text-3xl text-2xl mb-6 text-center">{berita.title}</h1>
                <div className="mb-6 text-sm">
                    <p className='font-bold'>Detail</p>
                    <p>Ditulis oleh {berita.writer}</p>
                    <p>Ditayangkan: {berita.date}</p>
                </div>
                <div className="flex justify-center mb-6">
                    <img src={berita.img} alt="Gambar Kegiatan" className="w-98" />
                </div>
                <div className="text-sm leading-relaxed text-[#000000] text-justify">
                    <strong>{berita.location}</strong> - <span className="mb-4">{firstParagraph}</span><br /><br />
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailKPID;
