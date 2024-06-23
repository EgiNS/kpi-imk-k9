export default function BeritaNewsletter({ items }) {
  return (
    <div data-aos="fade-right" className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 gap-x-8">
      {items.map((item) => (
        <a
          href={item.link}
          target="_blank"
          key={item.id}
          className="p-4 rounded-2xl shadow flex flex-col bg-[#EDDBD9]"
        >
          <img src={item.img} alt="" className="w-full cursor-pointer" />
          <div className="flex flex-col items-center mt-2">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-xs">{item.date}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
