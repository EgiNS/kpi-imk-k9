export default function EdaranDetail({edaran}) {
    return(
        <>
            <h1 className="text-center font-bold">SURAT EDARAN</h1>
            <h2 className="text-center font-bold">KOMISI PENYIARAN INDONESIA PUSAT {edaran.nomor}</h2>
            <h2 className="text-center font-bold mb-6">TENTANG {(edaran.judul).toUpperCase()}</h2>
            <div dangerouslySetInnerHTML={{ __html: edaran.deskripsi }} className="prose text-justify" />
        </>
    )
}