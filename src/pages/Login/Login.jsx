// src/components/Login.js
import React, { useState } from "react";
import NavBar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      sessionStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="bg-[#F9F9FB]">
      <NavBar />
      <div className="pt-24 h-screen w-full flex items-center justify-center">
        <div className="w-72 bg-white px-6 py-4 rounded-lg border-2 border-[#EDDBD9]">
            <h2 className="text-2xl font-bold text-[#9D262A] text-center mb-4">LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <p className="text-sm">Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#F9F9FB] rounded-lg outline-1 w-full h-9 px-1"
                    />
                </div>
                <div>
                    <p className="text-sm">Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#F9F9FB] rounded-lg outline-1 w-full h-9 px-1"
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
