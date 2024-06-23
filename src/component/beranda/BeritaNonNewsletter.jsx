import { Link } from "react-router-dom";

export default function BeritaNonNewsletter({ items, url }) {
  return (
    <div data-aos="fade-right" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-2xl shadow grid sm:grid-cols-6 grid-cols-1 sm:grid-rows-1 grid-rows-2 gap-x-3 bg-[#EDDBD9]"
        >
          <div
            style={{ backgroundImage: `url(${item.img})` }}
            className="sm:col-span-2 bg-cover bg-center"
          />
          <div className="sm:col-span-4">
            {/* <h2 className="text-lg font-semibold">{item.title}</h2> */}
            <Link to={`${url}/${item.slug}`} className="text-lg font-semibold hover:underline">{item.title}</Link>
            <p className="text-xs">{item.date}</p>
            <p className="mt-4 text-sm">
              {item.location} - {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
