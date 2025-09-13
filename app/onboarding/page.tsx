"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const howDidYouHearOptions = [
  "AI (ChatGPT, Gemini, etc.)",
  "Social media",
  "Andrew Gazdecki",
  "Personal referral",
  "Google search",
  "YouTube",
  "Other",
];

const socialPlatforms = [
  "LinkedIn",
  "Instagram",
  "TikTok",
  "X (Twitter)",
  "Facebook (Meta)",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);
  const [heardFrom, setHeardFrom] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);
  const router = useRouter();

  // Placeholder for future steps
  // const [otherState, setOtherState] = useState(...);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full">
        {step === 1 && (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#23235B] mb-8 mt-8 md:mt-0">What do you want to do on Acquire?</h1>
            <div className="flex flex-col gap-4 w-full mb-8">
              <button
                type="button"
                className={`w-full text-left px-8 py-6 rounded-xl border-2 transition-all font-semibold text-lg ${role === 'sell' ? 'border-[#4F5DFF] bg-[#F7F8FC]' : 'border-dashed border-[#B3B8E0] bg-white hover:border-[#4F5DFF]/60'}`}
                onClick={() => setRole('sell')}
              >
                I want to sell startups
              </button>
              <button
                type="button"
                className={`w-full text-left px-8 py-6 rounded-xl border-2 transition-all font-semibold text-lg ${role === 'buy' ? 'border-[#4F5DFF] bg-[#F7F8FC]' : 'border-dashed border-[#B3B8E0] bg-white hover:border-[#4F5DFF]/60'}`}
                onClick={() => setRole('buy')}
              >
                I want to buy startups
              </button>
            </div>
            <button
              type="button"
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg transition-colors ${role ? 'bg-[#4F5DFF] text-white hover:bg-[#3B4BCC]' : 'bg-[#E6ECFA] text-[#7B849B] cursor-not-allowed'}`}
              disabled={!role}
              onClick={() => setStep(2)}
            >
              Next <span aria-hidden>→</span>
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#23235B] mb-8 mt-8 md:mt-0">How did you hear about us?</h1>
            <div className="flex flex-col gap-4 w-full mb-8">
              {howDidYouHearOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  className={`w-full text-left px-8 py-4 rounded-xl border-2 transition-all font-semibold text-lg ${heardFrom === option ? 'border-[#4F5DFF] bg-[#F7F8FC]' : 'border-dashed border-[#B3B8E0] bg-white hover:border-[#4F5DFF]/60'}`}
                  onClick={() => setHeardFrom(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg bg-[#E6ECFA] text-[#7B849B] hover:bg-[#D6DDFB]"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg transition-colors ${heardFrom ? 'bg-[#4F5DFF] text-white hover:bg-[#3B4BCC]' : 'bg-[#E6ECFA] text-[#7B849B] cursor-not-allowed'}`}
                disabled={!heardFrom}
                onClick={() => setStep(3)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#23235B] mb-8 mt-8 md:mt-0">Which platform?</h1>
            <div className="flex flex-col gap-4 w-full mb-8">
              {socialPlatforms.map(option => (
                <button
                  key={option}
                  type="button"
                  className={`w-full text-left px-8 py-4 rounded-xl border-2 transition-all font-semibold text-lg ${platform === option ? 'border-[#4F5DFF] bg-[#F7F8FC]' : 'border-dashed border-[#B3B8E0] bg-white hover:border-[#4F5DFF]/60'}`}
                  onClick={() => setPlatform(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg bg-[#E6ECFA] text-[#7B849B] hover:bg-[#D6DDFB]"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg transition-colors ${platform ? 'bg-[#4F5DFF] text-white hover:bg-[#3B4BCC]' : 'bg-[#E6ECFA] text-[#7B849B] cursor-not-allowed'}`}
                disabled={!platform}
                onClick={() => setStep(4)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 4 && role === 'sell' && (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#23235B] mb-4 mt-8 md:mt-0">Let's get you ready for the marketplace</h1>
            <p className="text-[#7B849B] text-lg mb-8">You're three steps away from meeting buyers for your business.</p>
            <ol className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#4F5DFF] text-[#4F5DFF] font-bold">1</span>
                <span>Build your bio, listing, and data room to entice buyers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#4F5DFF] text-[#4F5DFF] font-bold">2</span>
                <span>Verify your ID and business and submit for <a href="#" className="underline text-[#4F5DFF]">approval</a>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#4F5DFF] text-[#4F5DFF] font-bold">3</span>
                <span>Pay your monthly listing fee to go live as a trusted listing.</span>
              </li>
            </ol>
            <button
              type="button"
              className="bg-[#23235B] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2 mb-4 hover:bg-[#18194A]"
              onClick={() => alert('Continue to listing flow!')}
            >
              Awesome, let's go <span aria-hidden>→</span>
            </button>
            <div className="text-[#7B849B] text-sm italic mt-2">This should take less than 10 minutes to complete</div>
            <button
              type="button"
              className="mt-8 text-[#7B849B] hover:underline flex items-center gap-2"
              onClick={() => setStep(3)}
            >
              ← Back
            </button>
          </>
        )}
        {step === 4 && role === 'buy' && (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#23235B] mb-4 mt-8 md:mt-0">Be first in line for your ideal startup</h1>
            <p className="text-[#7B849B] text-lg mb-8">Answer a few quick questions about your acquisition goals, and we'll notify you the moment a matching startup goes live.</p>
            <ul className="mb-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F8FC] text-[#4F5DFF] text-2xl">
                  {/* Icon: target or goal */}
                  <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#4F5DFF" strokeWidth="2"/><circle cx="14" cy="14" r="6" stroke="#4F5DFF" strokeWidth="2"/><circle cx="14" cy="14" r="2" fill="#4F5DFF"/></svg>
                </span>
                <div>
                  <div className="font-semibold text-[#23235B]">Tell us your acquisition goals</div>
                  <div className="text-[#7B849B]">Let us know what types of startups interest you.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F8FC] text-[#4F5DFF] text-2xl">
                  {/* Icon: magic wand or delivery */}
                  <svg width="28" height="28" fill="none"><path d="M7 21l14-14M11 7l10 10M7 11l10 10" stroke="#4F5DFF" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <div>
                  <div className="font-semibold text-[#23235B]">We'll deliver startups that match your criteria</div>
                  <div className="text-[#7B849B]">Get notified when deals that matter to you go live.</div>
                </div>
              </li>
            </ul>
            <div className="w-full bg-[#E6ECFA] rounded-xl p-4 mb-8 text-[#23235B] text-base">
              The more specific you are, the better your recommendations.
            </div>
            <button
              type="button"
              className="bg-[#23235B] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2 mb-4 hover:bg-[#18194A]"
              onClick={() => router.push('/Findyouridealbusiness')}
            >
              Awesome, let's go <span aria-hidden>→</span>
            </button>
            <div className="text-[#7B849B] text-sm italic mt-2">This should take less than 10 minutes to complete</div>
            <button
              type="button"
              className="mt-8 text-[#7B849B] hover:underline flex items-center gap-2"
              onClick={() => setStep(3)}
            >
              ← Back
            </button>
          </>
        )}
      </div>
      {/* Right: Illustration or Testimonial */}
      <div className="flex-1 flex items-center justify-center w-full max-w-xl mt-12 md:mt-0">
        {step === 1 && (
          <svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="270" height="170" rx="16" fill="#F7F8FC" />
            <rect x="80" y="80" width="190" height="80" rx="8" fill="#E6ECFA" />
            <rect x="110" y="110" width="40" height="30" rx="4" fill="#4F5DFF" fillOpacity="0.2" />
            <rect x="160" y="100" width="40" height="40" rx="4" fill="#4F5DFF" fillOpacity="0.4" />
            <rect x="210" y="90" width="40" height="50" rx="4" fill="#4F5DFF" fillOpacity="0.7" />
            <circle cx="120" cy="200" r="18" fill="#B3B8E0" />
            <circle cx="230" cy="200" r="18" fill="#B3B8E0" />
            <rect x="100" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
            <rect x="210" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
          </svg>
        )}
        {step === 2 && (
          <svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="270" height="170" rx="16" fill="#F7F8FC" />
            <rect x="100" y="80" width="60" height="80" rx="8" fill="#B3B8E0" />
            <rect x="180" y="80" width="100" height="80" rx="8" fill="#E6ECFA" />
            <circle cx="130" cy="120" r="24" fill="#4F5DFF" fillOpacity="0.2" />
            <rect x="200" y="100" width="60" height="30" rx="4" fill="#4F5DFF" fillOpacity="0.2" />
            <rect x="220" y="140" width="40" height="10" rx="2" fill="#4F5DFF" fillOpacity="0.4" />
            <rect x="120" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
            <rect x="210" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
            {/* Add more SVG elements to match your illustration style */}
          </svg>
        )}
        {step === 3 && (
          <svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="270" height="170" rx="16" fill="#F7F8FC" />
            <rect x="120" y="80" width="110" height="80" rx="8" fill="#E6ECFA" />
            <rect x="170" y="120" width="60" height="30" rx="4" fill="#4F5DFF" fillOpacity="0.2" />
            <circle cx="180" cy="120" r="24" fill="#4F5DFF" fillOpacity="0.2" />
            <rect x="100" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
            <rect x="210" y="180" width="30" height="10" rx="2" fill="#B3B8E0" />
            {/* Add more SVG elements to match your illustration style */}
          </svg>
        )}
        {step === 4 && role === 'sell' && (
          <div className="w-full max-w-md bg-[#F7F8FC] rounded-2xl shadow p-8 flex flex-col items-center">
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Joe" alt="Joe Benjamin" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow" />
            <div className="font-bold text-lg text-[#23235B]">Joe Benjamin</div>
            <div className="text-[#7B849B] text-sm mb-2">Founder</div>
            <blockquote className="italic text-[#23235B] text-base mb-4">“I really like what your team has built. I always try to recommend it. I get messages on LinkedIn from time to time from people who want to ask about my experience. It's legit. If you're selling your startup, you'd be crazy not to list it on Acquire.com.”</blockquote>
            <a href="#" className="text-[#4F5DFF] font-semibold text-sm hover:underline mb-4">Listen to more <span aria-hidden>⦿</span></a>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 rounded-full bg-[#4F5DFF] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
            </div>
          </div>
        )}
        {step === 4 && role === 'buy' && (
          <div className="w-full max-w-md bg-[#F7F8FC] rounded-2xl shadow p-8 flex flex-col items-center">
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Sujan" alt="Sujan Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow" />
            <div className="font-bold text-lg text-[#23235B]">Sujan Patel</div>
            <div className="text-[#7B849B] text-sm mb-2">Partner at Startup Labs</div>
            <blockquote className="italic text-[#23235B] text-base mb-4">“At Ramp Ventures we acquire 1-2 SaaS companies a year which usually requires looking at hundreds of deals. With Acquire.com identifying high potential SaaS companies has never been easier. I also love the transparency and how easy it is to connect with buyers.”</blockquote>
            <a href="#" className="text-[#4F5DFF] font-semibold text-sm hover:underline mb-4">Listen to more <span aria-hidden>⦿</span></a>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#4F5DFF] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B3B8E0] inline-block" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 