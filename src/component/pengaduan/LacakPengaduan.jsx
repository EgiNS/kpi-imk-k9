import searchIcon from '/img/search.svg'; 

export default function LacakPengaduan() {
  return (
    <div>
      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
        Telusuri Aduan Penyiaran Anda
      </h1>
      
      <div className="flex justify-center mt-24 mb-32">
        <div className="flex justify-center mt-4" style={{ maxWidth: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="relative" style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="Masukkan Nomor Aduan"
              className="px-4 py-2 border-2 border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A] pr-10" 
            />
            <img src={searchIcon} alt="Search" style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', width: '20px', height: '20px', fontWeight: 'bold'}} /> 
          </div>
        </div>
      </div>
    </div>
  );
}
