import { Link } from "react-router-dom"
import EdaranData from "./EdaranData"

export default function EdaranComp() {
    return (
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
                Edaran dan Sanksi
            </h1>

            <div style={{ margin: 'auto', maxWidth: '1000px', border: '1px solid #EDDBD9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '16px' }}>
                <div style={{ backgroundColor: '#EDDBD9', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>  
                    <label htmlFor="jumlahAduan" style={{ marginRight: '8px' }}>Menampilkan </label>
                    <select id="jumlahAduan" style={{ marginRight: '8px', borderRadius: '5px' }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    <label htmlFor="jumlahAduan"> Edaran dan Sanksi</label>
                    </div>
                    <div style={{ position: 'relative', maxWidth: '300px', width: '100%' }}>
                    <input
                        type="text"
                        placeholder="Cari Edaran & Sanksi"
                        className="px-1 py-1 border border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                        style={{ width: '100%', paddingRight: '24px', paddingLeft: '16px', fontSize: '14px' }}
                    />
                    <img src="/img/search.svg" alt="Search" style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                    </div>
                </div>
                </div>

                <div style={{ padding: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #EDDBD9' }}>
                    <thead style={{ borderBottom: '2px solid #EDDBD9', backgroundColor: '#EDDBD9' }}>
                    <tr>
                        <th style={{ padding: '8px', borderRight: '1px solid #EDDBD9' }}>Judul</th>
                        <th style={{ padding: '8px' }}>Tanggal Ditayangkan</th>
                    </tr>
                    </thead>
                    <tbody>
                        {EdaranData.map((edaran) => (
                            <tr key={edaran.id}>
                                <td style={{ padding: '8px', borderRight: '1px solid #EDDBD9', textAlign: 'left' }}>
                                    <Link to={`/edaran-dan-sanksi/${edaran.id}`} className="hover:underline">{edaran.judul}</Link>
                                </td>
                                <td style={{ padding: '8px', textAlign: 'left' }}>{edaran.tanggal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}