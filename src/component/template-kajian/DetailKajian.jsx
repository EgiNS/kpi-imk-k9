import React from 'react';
import { useParams } from 'react-router-dom';
import DataKajian from './DataKajian';

const DetailKajian = () => {
    const { id } = useParams();
    const kajian = DataKajian.find(item => item.id === parseInt(id));

    if (!kajian) {
        return <div>Informasi kajian tidak ditemukan</div>;
    }

    const paragraphs = kajian.penulis.split('<br><br>');
    const [firstAuthor, ...otherAuthors] = paragraphs;

    return (
        <div className="mx-auto p-6 bg-white shadow-md mt-6">
          <h1 className="font-bold text-[#000000] md:text-3xl text-2xl mb-6 text-center">{kajian.title}</h1>
          <div className="mb-6 text-sm">
            <p className='font-bold'>Detail</p>
            <p>Ditulis oleh {kajian.writer}</p>
            <p>Ditayangkan: {kajian.date}</p>
          </div>
          <div className="flex mb-6 ml-8 mr-8">
            <div className="flex-shrink-0">
              <img src={kajian.img} alt="Gambar Kegiatan" className="w-64" />
            </div>
            <div className="ml-6 text-base leading-relaxed text-[#000000] text-justify">
              <p>Penulis: {firstAuthor}</p>
              {otherAuthors.map((author, index) => (
                <p key={index} className="ml-16">{author}</p>
              ))}
              <p className="mt-4">Deskripsi Fisik Buku: {kajian.deskripsi}</p>
              <p className="mt-4">Tanggal Terbit Pertama: {kajian.publish}</p>
              <p className="mt-4 font-bold">Sinopsis:</p>
              <p className="mt-4">{kajian.sinopsis}</p>
            </div>
          </div>
        </div>
      );
};

export default DetailKajian;