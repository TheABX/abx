"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    // Optionally redirect: window.location.href = "/";
    alert("Login successful!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-full max-w-md flex flex-col gap-8" onSubmit={handleLogin}>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-2">Welcome back</h1>
        {/* Social buttons */}
        <div className="flex flex-col gap-4">
          <button type="button" className="flex items-center gap-3 border border-[#E6ECFA] rounded-xl px-4 py-3 font-semibold text-[#23235B] bg-white hover:bg-[#F7F8FC] transition-colors">
            <FaLinkedin className="text-2xl text-[#0A66C2]" />
            <span className="flex-1 text-center">Sign in with LinkedIn</span>
          </button>
          <button type="button" className="flex items-center gap-3 border border-[#E6ECFA] rounded-xl px-4 py-3 font-semibold text-[#23235B] bg-white hover:bg-[#F7F8FC] transition-colors">
            <FaGoogle className="text-2xl text-[#EA4335]" />
            <span className="flex-1 text-center">Sign in with Google</span>
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#E6ECFA]" />
          <span className="text-[#7B849B] font-semibold">Or</span>
          <div className="flex-1 h-px bg-[#E6ECFA]" />
        </div>
        {/* Email/password fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-[#23235B]">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="rounded-xl border border-[#E6ECFA] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F5DFF]"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-[#23235B]">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="rounded-xl border border-[#E6ECFA] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F5DFF] w-full pr-12"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B849B]"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="text-sm mt-1">
              <span className="text-[#7B849B]">Forgot your password? </span>
              <a href="#" className="text-[#4F5DFF] font-semibold hover:underline">Reset</a>
            </div>
          </div>
        </div>
        {/* Error message */}
        {error && (
          <div className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}
        {/* Log in button */}
        <button
          type="submit"
          className={`font-semibold px-8 py-4 rounded-xl text-lg shadow transition-colors mt-2 flex items-center justify-center gap-2 ${
            loading 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-[#4F5DFF] text-white hover:bg-[#3B4BCC]'
          }`}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Logging in...
            </>
          ) : (
            "Log in"
          )}
        </button>
        {/* Sign up link */}
        <div className="text-center text-[#7B849B] text-sm mt-2">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#4F5DFF] font-semibold hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
} 