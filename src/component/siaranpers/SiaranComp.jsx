import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiaranData from "./SiaranData";
import ReactPaginate from "react-paginate";
import Breadcrumbs from "../Breadcrumb";

export default function SiaranComp() {
  const [selectedAduan, setSelectedAduan] = useState({});
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    console.log(Number(event.target.value));
    setCurrentPage(0); // Reset to first page when items per page changes
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // Reset to first page when search term changes
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredData = SiaranData.filter(
    (item) =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div style={{ textAlign: "center", marginBottom: "32px" }} className='lg:px-32 md:px-16 sm:px-12 px-8'>
      <div className="mt-12">
        <Breadcrumbs />
      </div>

      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold sm:mb-8 mb-4">
        Siaran Pers
      </h1>

      <div
        style={{
          margin: "auto",
          border: "1px solid #EDDBD9",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "16px",
        }}
      >
        <div style={{ backgroundColor: "#EDDBD9", padding: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            className='sm:text-base text-sm'
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <label htmlFor="jumlahAduan" style={{ marginRight: "8px" }}>
                Menampilkan{" "}
              </label>
              <select 
                id="jumlahAduan" 
                style={{ marginRight: '8px', borderRadius: '5px' }}
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <label htmlFor="jumlahAduan"> Siaran Pers</label>
            </div>
            <div
              style={{ position: "relative"}} className='sm:w-72 w-full sm:mt-0 mt-4'
            >
              <input
                type="text"
                placeholder="Cari Siaran Pers"
                className="px-1 py-1 border border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
                style={{ width: '100%', paddingRight: '24px', paddingLeft: '16px', fontSize: '14px' }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <img
                src="/img/search.svg"
                alt="Search"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "8px",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ padding: "16px" }}>
          {
            filteredData.length == 0 ?
            <p className="font-medium text-xl text-gray-700 mb-12 text-center">Siaran pers tidak ditemukan</p>
            :
            <div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  border: "1px solid #EDDBD9",
                }}
              >
                <thead
                  style={{
                    borderBottom: "2px solid #EDDBD9",
                    backgroundColor: "#EDDBD9",
                  }}
                >
                  <tr>
                    <th
                      style={{ padding: "8px", borderRight: "1px solid #EDDBD9" }}
                    >
                      Judul
                    </th>
                    <th style={{ padding: "8px" }}>Tanggal Ditayangkan</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((edaran) => (
                    <tr key={edaran.id}>
                      <td
                        style={{
                          padding: "8px",
                          borderRight: "1px solid #EDDBD9",
                          textAlign: "left",
                        }}
                      >
                        <Link
                          to={`/siaran-pers/${edaran.slug}`}
                          className="hover:underline"
                        >
                          {edaran.judul}
                        </Link>
                      </td>
                      <td style={{ padding: "8px", textAlign: "left" }}>
                        {edaran.tanggal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='flex sm:justify-end justify-center mt-3'>
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination flex justify-center list-none p-0"}
                  subContainerClassName={"pages pagination list-none"}
                  activeClassName={"active bg-[#CEABA5] text-white"}
                  pageClassName={"inline-block mx-1"}
                  pageLinkClassName={"px-3 py-1 border border-[#ccc] rounded text-[#333] bg-transparent"}
                  previousClassName={`inline-block mx-1 ${currentPage === 0 ? 'text-gray-400' : ''}`}
                  previousLinkClassName={"px-3 py-1 border border-[#ccc] rounded text-[#333] bg-transparent"}
                  nextClassName={`inline-block mx-1 ${currentPage === pageCount - 1 ? 'text-gray-400' : ''}`}
                  nextLinkClassName={"px-3 py-1 border border-[#ccc] rounded text-[#333] bg-transparent"}
                  forcePage={currentPage}
                  disableInitialCallback={true}
                />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
