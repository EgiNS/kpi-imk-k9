import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";

export default function Daftar() {
  return (
    <div className="bg-[#F9F9FB]">
      <NavBar />
      <div className="sm:pt-32 pt-16 pb-12 flex items-center justify-center">
        <div className="w-5/6 bg-white rounded-lg border-2 border-[#EDDBD9]">
          <h2 className="text-2xl font-bold text-[#9D262A] text-center mb-4 bg-[#EDDBD9] py-4">
            DAFTAR
          </h2>
          <form className="px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label htmlFor="fullName" className="block">Nama Lengkap</label>
                <input type="text" id="fullName" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                <label htmlFor="nik" className="block">NIK</label>
                <input type="text" id="nik" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="birthDate" className="block">Tanggal Lahir</label>
                <input type="date" id="birthDate" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                <label htmlFor="gender" className="block">Jenis Kelamin</label>
                <input type="text" id="gender" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="userType" className="block">Tipe Pengguna</label>
                <select id="userType" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Pilih Tipe Pengguna</option>
                    <option value="1">Tipe 1</option>
                    <option value="2">Tipe 2</option>
                </select>
                </div>
                <div>
                <label htmlFor="disability" className="block">Disabilitas</label>
                <select id="disability" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Pilih Disabilitas</option>
                    <option value="1">Disabilitas 1</option>
                    <option value="2">Disabilitas 2</option>
                </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="job" className="block">Pekerjaan</label>
                <input type="text" id="job" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                <label htmlFor="phone" className="block">Telepon</label>
                <input type="text" id="phone" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="province" className="block">Provinsi Domisili</label>
                <select id="province" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Pilih Provinsi</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="jawa_barat">Jawa Barat</option>
                </select>
                </div>
                <div>
                <label htmlFor="postalCode" className="block">Kode Post</label>
                <input type="text" id="postalCode" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="address" className="block">Alamat Domisili</label>
                <textarea id="address" className="w-full p-2 border border-gray-300 rounded" rows="3"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="email" className="block">E-mail</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                <label htmlFor="confirmPassword" className="block">Konfirmasi Password</label>
                <input type="password" id="confirmPassword" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="mt-4 pb-6">
                <button type="submit" className="w-full bg-[#9D262A] text-white p-2 rounded">Daftar</button>
            </div>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
