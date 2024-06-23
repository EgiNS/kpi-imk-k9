import React, {useEffect} from 'react';
import Breadcrumbs from '../Breadcrumb';
import Aos from 'aos';

const dasar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <div className="mt-12">
                <Breadcrumbs />
            </div>
            <div data-aos="fade-up" className='p-6 pt-2 shadow-md my-6 rounded-xl'>
                <h1 className="font-bold text-center text-[#420101] md:text-3xl sm:text-2xl text-xl mb-6">Dasar Pembentukan</h1>
                <div className="text-base leading-relaxed text-[#000000] text-justify">
                    <p>Undang-undang Penyiaran Nomor 32 Tahun 2002 merupakan dasar utama bagi pembentukan Komisi Penyiaran Indonesia (KPI). Semangatnya adalah pengelolaan sistem penyiaran yang merupakan ranah publik harus dikelola oleh sebuah badan independen yang bebas dari campur tangan pemodal maupun kepentingan kekuasaan.</p>
                    <br></br>
                    <p>Berbeda dengan semangat dalam Undang-undang penyiaran sebelumnya, yaitu Undang-undang No. 24 Tahun 1997 pasal 7 yang berbunyi "Penyiaran dikuasai oleh negara yang pembinaan dan pengendaliannya dilakukan oleh pemerintah", menunjukkan bahwa penyiaran pada masa itu merupakan bagian dari instrumen kekuasaan yang digunakan untuk semata-mata bagi kepentingan pemerintah.</p>
                    <br></br>
                    <p>Proses demokratisasi di Indonesia menempatkan publik sebagai pemilik dan pengendali utama ranah penyiaran. Karena frekuensi adalah milik publik dan sifatnya terbatas, maka penggunaannya harus sebesar-besarnya bagi kepentingan publik. Sebesar-besarnya bagi kepentingan publik artinya adalah media penyiaran harus menjalankan fungsi pelayanan informasi publik yang sehat. Informasi terdiri dari bermacam-macam bentuk, mulai dari berita, hiburan, ilmu pengetahuan, dll. Dasar dari fungsi pelayanan informasi yang sehat adalah seperti yang tertuang dalam Undang-undang Penyiaran Nomor 32 Tahun 2002 yaitu Diversity of Content (prinsip keberagaman isi) dan Diversity of Ownership (prinsip keberagaman kepemilikan).</p>
                    <br></br>
                    <p>Kedua prinsip tersebut menjadi landasan bagi setiap kebijakan yang dirumuskan oleh KPI. Pelayanan informasi yang sehat berdasarkan Diversity of Content (prinsip keberagaman isi) adalah tersedianya informasi yang beragam bagi publik baik berdasarkan jenis program maupun isi program. Sedangkan Diversity of Ownership (prinsip keberagaman kepemilikan) adalah jaminan bahwa kepemilikan media massa yang ada di Indonesia tidak terpusat dan dimonopoli oleh segelintir orang atau lembaga saja. Prinsip Diversity of Ownership juga menjamin iklim persaingan yang sehat antara pengelola media massa dalam dunia penyiaran di Indonesia.</p>
                    <br></br>
                    <p>Apabila ditelaah secara mendalam, Undang-undang no. 32 Tahun 2002 tentang Penyiaran lahir dengan dua semangat utama, pertama pengelolaan sistem penyiaran harus bebas dari berbagai kepentingan karena penyiaran merupakan ranah publik dan digunakan sebesar-besarnya untuk kepentingan publik. Kedua adalah semangat untuk menguatkan entitas lokal dalam semangat otonomi daerah dengan pemberlakuan sistem siaran berjaringan.</p>
                    <br></br>
                    <p>Maka sejak disahkannya Undang-undang no. 32 Tahun 2002 terjadi perubahan fundamental dalam pengelolaan sistem penyiaran di Indonesia. Perubahan paling mendasar dalam semangat UU tersebut adalah adanya limited transfer of authority dari pengelolaan penyiaran yang selama ini merupakan hak ekslusif pemerintah kepada sebuah badan pengatur independen (Independent regulatory body) bernama Komisi Penyiaran Indonesia (KPI). Independen dimaksudkan untuk mempertegas bahwa pengelolaan sistem penyiaran yang merupakan ranah publik harus dikelola oleh sebuah badan yang bebas dari intervensi modal maupun kepentingan kekuasaan. Belajar dari masa lalu dimana pengelolaan sistem penyiaran masih berada ditangan pemerintah (pada waktu itu rejim orde baru), sistem penyiaran sebagai alat strategis tidak luput dari kooptasi negara yang dominan dan digunakan untuk melanggengkan kepentingan kekuasaan. Sistem penyiaran pada waktu itu tidak hanya digunakan untuk mendukung hegemoni rejim terhadap publik dalam penguasaan wacana strategis, tapi juga digunakan untuk mengambil keuntungan dalam kolaborasi antara segelintir elit penguasa dan pengusaha.</p>
                    <br></br>
                    <p>Terjemahan semangat yang kedua dalam pelaksanaan sistem siaran berjaringan adalah, setiap lembaga penyiaran yang ingin menyelenggarakan siarannya di suatu daerah harus memiliki stasiun lokal atau berjaringan dengan lembaga penyiaran lokal yang ada didaerah tersebut. Hal ini untuk menjamin tidak terjadinya sentralisasi dan monopoli informasi seperti yang terjadi sekarang. Selain itu, pemberlakuan sistem siaran berjaringan juga dimaksudkan untuk merangsang pertumbuhan ekonomi daerah dan menjamin hak sosial-budaya masyarakat lokal. Selama ini sentralisasi lembaga penyiaran berakibat pada diabaikannya hak sosial-budaya masyarakat lokal dan minoritas. Padahal masyarakat lokal juga berhak untuk memperolah informasi yang sesuai dengan kebutuhan polik, sosial dan budayanya. Disamping itu keberadaan lembaga penyiaran sentralistis yang telah mapan dan berskala nasional semakin menghimpit keberadaan lembaga-lembaga penyiaran lokal untuk dapat mengembangkan potensinya secara lebih maksimal. Undang-undang no. 32 Tahun 2002 dalam semangatnya melindungi hak masyarakat secara lebih merata.</p>
                </div>
            </div>
        </div>
    );
};

export default dasar;