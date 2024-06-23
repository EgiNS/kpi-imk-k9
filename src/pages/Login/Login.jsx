// src/components/Login.js
import React, { useState,useEffect } from "react";
import swal from "sweetalert";
import NavBar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
      swal({
        title: 'Sukses',
        text: 'Login berhasil!',
        icon: 'success',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            className: 'bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
          },
        },
      }); 
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="bg-[#F9F9FB]">
      <NavBar />
      <div className="sm:pt-24 pt-14 h-screen w-full flex items-center justify-center">
        <div className="w-72 bg-white px-6 py-4 rounded-lg border-2 border-[#EDDBD9]">
            <h2 className="text-2xl font-bold text-[#9D262A] text-center mb-4">LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <p className="text-sm">Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#F9F9FB] border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A] w-full h-9 px-1"
                    />
                </div>
                <div>
                    <p className="text-sm">Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#F9F9FB] border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A] w-full h-9 px-1"
                    />
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <div className="flex flex-row justify-between items-center mt-6">
                    <button type="submit" className="bg-[#9D262A] text-white rounded-xl px-4 py-2 text-sm">Login</button>
                    <a href="#" className="hover:underline text-sm">Lupa password?</a>
                </div>
                <div className="text-sm mt-6 mb-1">
                    Belum punya akun? <Link to="/daftar" className="font-semibold hover:underline">Daftar disini</Link>
                </div>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
