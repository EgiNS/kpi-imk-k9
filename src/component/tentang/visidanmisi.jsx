import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import Breadcrumbs from '../Breadcrumb';

const visidanmisi = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <div className="mt-12">
                <Breadcrumbs />
            </div>
            <div data-aos="fade-up" className='p-6 pt-2 shadow-md my-6 rounded-xl'>
                <p className='text-xl font-bold mb-4 text-center'>Visi</p>
                <div className="text-lg leading-relaxed text-[#000000] text-justify mb-6">
                    <p>Terwujudnya sistem penyiaran nasional yang berkeadilan dan bermartabat untuk dimanfaatkan sebesar-besarnya bagi kesejahteraan masyarakat.</p>
                </div>
                <p className='text-xl font-bold text mb-4 mt-2 text-center'>Misi</p>
                <div className="text-lg leading-relaxed text-[#000000]">
                    <ol className="list-decimal list-inside space-y-2 text-justify">
                        <li>Mengembangkan kebijakan pengaturan, pengawasan dan pengembangan isi siaran</li>
                        <li>Melaksanakan kebijakan pengawasan dan pengembangan terhadap struktur sistem siaran dan profesionalisme penyiaran</li>
                        <li>Membangun kelembagaan KPI dan partisipasi masyarakat terhadap penyelenggaraan penyiaran</li>
                        <li>Meningkatkan kapasitas Sekretariat KPI</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default visidanmisi;