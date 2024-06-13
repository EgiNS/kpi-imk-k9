import React from 'react';

const Publikasi = ({ src, title, link }) => {
  return (
    <a href={link} target='_blank' className='border-1 shadow-lg lg:p-4 p-2 rounded-xl cursor-pointer'>
      <img src={src} alt="" className='rounded-lg' />
      <h1 className='font-semibold text-center lg:text-xl md:text-lg mt-2'>{title}</h1>
    </a>
  );
};

export default Publikasi;