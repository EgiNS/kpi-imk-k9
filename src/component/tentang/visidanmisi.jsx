import React from 'react';

const visidanmisi = () => {
    return (
        <div className="mx-auto p-6 bg-white mt-6">
            <h1 className="font-bold text-[#000000] md:text-3xl text-2xl mb-6">Visi dan Misi</h1>
            <div className="mb-6 text-sm">
                <p className='font-bold'>Detail</p>
                <p>Ditayangkan: 17 Januari 2016</p>
            </div>
            <p className='text-xl font-bold mb-4 text-center'>Visi</p>
            <div className="text-lg leading-relaxed text-[#000000] text-justify mb-6">
                <p>Terwujudnya sistem penyiaran nasional yang berkeadilan dan bermartabat untuk dimanfaatkan sebesar-besarnya bagi kesejahteraan masyarakat.</p>
            </div>
            <p className='text-xl font-bold text mb-4 mt-2 text-center'>Misi</p>
            <div className="text-lg leading-relaxed text-[#000000]">
                <ol class="list-decimal list-inside space-y-2 text-justify">
                    <li>Mengembangkan kebijakan pengaturan, pengawasan dan pengembangan isi siaran</li>
                    <li>Melaksanakan kebijakan pengawasan dan pengembangan terhadap struktur sistem siaran dan profesionalisme penyiaran</li>
                    <li>Membangun kelembagaan KPI dan partisipasi masyarakat terhadap penyelenggaraan penyiaran</li>
                    <li>Meningkatkan kapasitas Sekretariat KPI</li>
                </ol>
            </div>
        </div>
    );
};

export default visidanmisi;