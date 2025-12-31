import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigation = useNavigate();

  const validate = () => {
    if (!username.trim()) return "Username is required";
    if (!firstname.trim()) return "First name is required";
    if (!lastname.trim()) return "Last name is required";
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const payload = { username, firstname, lastname, email, password };
      const res = await axios.post(`${import.meta.env.VITE_API_URL || "https://herodha-backend.onrender.com"}/signup`, payload, {
        withCredentials: true
      });

      if (res.status === 201 || res.status === 200) {
        setSuccess("Account created successfully!");
        setUsername("");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigation("/login");
        }, 2000);
      } else {
        setError(res.data?.message || "Unexpected response from server");
      }
    } catch (err) {
      console.error("Signup error:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Failed to create account. Try again later.";
      setError(msg);
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
            Open a free demat & trading account
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Start investing brokerage-free and join 1.6+ crore traders & investors
          </p>
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
            <h2 className="text-2xl font-semibold mb-4">Sign Up Now</h2>
            <hr className="mb-6" />

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="text-sm text-red-700 bg-red-100 p-2 rounded">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-sm text-green-800 bg-green-100 p-2 rounded">
                  {success}
                </div>
              )}

              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  />
                </div>

                <div className="w-full">
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                  />
                </div>
              </div>

              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-all ${
                  loading
                    ? "bg-blue-400 cursor-wait text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
