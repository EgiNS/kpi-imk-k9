export default function TeguranDetail({edaran}) {
    return(
        <>
            <h1 className="text-2xl font-bold mb-8 text-center">{edaran.judul}</h1>
            <p className="mb-2"><strong>Tanggal<span className='ml-[4.8rem]'>:</span></strong> {edaran.tanggal}</p>
            <p className="mb-2"><strong>No Surat<span className='ml-[4.5rem]'>:</span></strong> {edaran.noSurat}</p>
            <p className="mb-2"><strong>Status<span className='ml-[5.5rem]'>:</span></strong> {edaran.status}</p>
            <p className="mb-2"><strong>Stasiun Televisi<span className='ml-4'>:</span></strong> {edaran.stasiun}</p>
            <p className="mb-4"><strong>Program Siaran<span className='ml-5'>:</span></strong> {edaran.program}</p>
            <div dangerouslySetInnerHTML={{ __html: edaran.deskripsi }} className="prose text-justify" />
        </>
    )
}