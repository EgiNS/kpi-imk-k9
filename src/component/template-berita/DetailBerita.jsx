import React from 'react';
import { useParams } from 'react-router-dom';
import DataBerita from './DataBerita';

const DetailKPID = () => {
    const { id } = useParams();
    const berita = DataBerita.find(item => item.id === parseInt(id));

    if (!berita) {
        return <div>Berita tidak ditemukan</div>;
    }

    const paragraphs = berita.fullcontent.split('<br><br>');
    const firstParagraph = paragraphs.shift();

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-6">
            <h1 className="font-bold text-[#000000] md:text-3xl text-2xl mb-6 text-center">{berita.title}</h1>
            <div className="flex justify-center mb-6">
                <img src={berita.img} alt="Gambar Kegiatan" className="w-98" />
            </div>
            <div className="mb-6 text-sm">
                <p className='font-bold'>Detail</p>
                <p>Ditulis oleh {berita.writer}</p>
                <p>Ditayangkan: {berita.date}</p>
            </div>
            <div className="text-sm leading-relaxed text-[#000000] text-justify">
                <strong>{berita.location}</strong> - <span className="mb-4">{firstParagraph}</span><br /><br />
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default DetailKPID;
