"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGoogle, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    if (!name.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }

    // Sign up the user with Supabase Auth
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Success! Redirect to onboarding
    // The Supabase trigger will handle profile creation automatically
    router.push("/onboarding");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 md:px-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Signup Form */}
        <form className="flex-1 w-full max-w-md flex flex-col gap-8" onSubmit={handleSignUp}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-2">Sign up now to join Acquire</h1>
          {/* Social buttons */}
          <div className="flex flex-col gap-4">
            <button type="button" className="flex items-center gap-3 border border-[#E6ECFA] rounded-xl px-4 py-3 font-semibold text-[#23235B] bg-white hover:bg-[#F7F8FC] transition-colors">
              <FaLinkedin className="text-2xl text-[#0A66C2]" />
              <span className="flex-1 text-center">Sign up with LinkedIn</span>
            </button>
            <button type="button" className="flex items-center gap-3 border border-[#E6ECFA] rounded-xl px-4 py-3 font-semibold text-[#23235B] bg-white hover:bg-[#F7F8FC] transition-colors">
              <FaGoogle className="text-2xl text-[#EA4335]" />
              <span className="flex-1 text-center">Sign up with Google</span>
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#E6ECFA]" />
            <span className="text-[#7B849B] font-semibold">Or</span>
            <div className="flex-1 h-px bg-[#E6ECFA]" />
          </div>
          {/* Name, email, password fields */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-[#23235B]">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="rounded-xl border border-[#E6ECFA] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F5DFF]"
                placeholder="Your full name"
                required
              />
            </div>
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
              <div className="flex items-center gap-2 text-xs text-[#7B849B] mt-1">
                <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#E6ECFA"/><path d="M8 4v4l2 2" stroke="#4F5DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                This should be an email you can access post-acquisition
              </div>
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
              <div className="text-xs text-[#7B849B] mt-1">Must include at least 8 characters</div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="font-semibold text-[#23235B]">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="rounded-xl border border-[#E6ECFA] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F5DFF] w-full pr-12"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B849B]"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
          {/* Error message */}
          {error && (
            <div className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
              {error}
            </div>
          )}
          {/* Sign up button */}
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
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </button>
          {/* Log in link */}
          <div className="text-center text-[#7B849B] text-sm mt-2">
            Already have an account?{' '}
            <a href="/login" className="text-[#4F5DFF] font-semibold hover:underline">Log in</a>
          </div>
        </form>
        {/* Why Acquire.com? Section */}
        <div className="flex-1 w-full max-w-md bg-[#F7F8FC] rounded-2xl shadow p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-[#23235B] mb-2">Why Acquire.com?</h2>
          <ul className="flex flex-col gap-3 text-[#23235B] text-base mb-4">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Get to an offer in as little as 30 days</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Trusted by 500k+ entrepreneurs</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Transact safely with Escrow.com</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Guided acquisition process</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Build acquisition documents</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Syncs with startup metrics</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Verified profiles and vetted listings</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#4F5DFF]" />Expert support when you need it</li>
          </ul>
          <div className="bg-[#E6ECFA] rounded-xl p-6 flex flex-col gap-4">
            <p className="italic text-[#23235B] text-base">"I had 15+ folks reach out to me on Acquire.com. I was completely blown away by how easy it's been to reach these prospective buyers. We weren't necessarily looking to sell but Acquire.com has been A+. From start to finish, we were acquired within 30 days at full asking price."</p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/men/49.jpg" alt="Derek Homann" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold text-[#23235B]">Derek Homann</div>
                <div className="text-[#7B849B] text-sm">Founder of Median</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="bg-[#E6ECFA] text-[#4F5DFF] font-bold px-2 py-1 rounded">Acquired</span>
                  <span className="text-[#7B849B] text-xs">for $285,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 