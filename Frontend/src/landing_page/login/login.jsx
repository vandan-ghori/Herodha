import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL || "https://herodha-backend.onrender.com"}/login`, {
        username,
        password,
      }, {
        withCredentials: true
      });

      if (res.status === 200 || res.status === 201) {
        login(res.data);    
        navigate("/summary");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="px-6 pt-40 md:px-20 lg:px-40 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Login to your demat & trading account
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/account_open.svg"
              alt="Open account"
              className="w-3/4 lg:w-full"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-10 border">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <hr className="mb-6" />

            {error && (
              <div className="text-red-700 bg-red-100 p-2 rounded mb-4">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
