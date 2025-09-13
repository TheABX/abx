"use client";
import React, { useState } from "react";
import { FaCloud, FaShoppingCart, FaEnvelope, FaGlobe, FaUsers, FaRegFileAlt, FaRobot, FaShopify, FaMobileAlt, FaStore, FaBitcoin, FaQuestionCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const startupTypes = [
  { label: "SaaS", icon: <FaCloud size={32} /> },
  { label: "Ecommerce", icon: <FaShoppingCart size={32} /> },
  { label: "Newsletter", icon: <FaEnvelope size={32} /> },
  { label: "Digital", icon: <FaGlobe size={32} /> },
  { label: "Agency", icon: <FaUsers size={32} /> },
  { label: "Content", icon: <FaRegFileAlt size={32} /> },
  { label: "AI", icon: <FaRobot size={32} /> },
  { label: "Shopify app", icon: <FaShopify size={32} /> },
  { label: "Mobile app", icon: <FaMobileAlt size={32} /> },
  { label: "Marketplace", icon: <FaStore size={32} /> },
  { label: "Crypto", icon: <FaBitcoin size={32} /> },
  { label: "Other", icon: <FaQuestionCircle size={32} /> },
];

export default function FindYourIdealBusiness() {
  const [step, setStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [minRevenueMultiple, setMinRevenueMultiple] = useState(0);
  const [maxRevenueMultiple, setMaxRevenueMultiple] = useState(20);
  const [minProfitMultiple, setMinProfitMultiple] = useState(0);
  const [maxProfitMultiple, setMaxProfitMultiple] = useState(20);
  const [minTTMRevenue, setMinTTMRevenue] = useState(0);
  const [maxTTMRevenue, setMaxTTMRevenue] = useState(1000000);
  const [minTTMProfit, setMinTTMProfit] = useState(0);
  const [maxTTMProfit, setMaxTTMProfit] = useState(200000);
  const [industries, setIndustries] = useState<string[]>(["Design & Style", "Advertising", "Games & Hobbies", "Gaming", "Pet Care"]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [businessModels, setBusinessModels] = useState<string[]>(["Agency-based", "Open-Source", "Freemium", "Services", "Business-to-business (B2B)"]);
  const [selectedBusinessModels, setSelectedBusinessModels] = useState<string[]>([]);
  const [techStacks, setTechStacks] = useState<string[]>(["MEVN", "Microsoft Windows", "Swift", "Stripe", "Microsoft Azure", "Scala"]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [customInterest, setCustomInterest] = useState("");

  // Step 8: Area selection (Australian postcodes/suburbs)
  const australianAreas = [
    "Sydney, NSW 2000",
    "Melbourne, VIC 3000",
    "Brisbane, QLD 4000",
    "Perth, WA 6000",
    "Adelaide, SA 5000",
    "Hobart, TAS 7000",
    "Canberra, ACT 2600",
    "Darwin, NT 0800",
    "Bondi, NSW 2026",
    "Toorak, VIC 3142",
    "Manly, NSW 2095",
    "Fitzroy, VIC 3065",
    // ... (add more as needed or load from a file for full coverage)
  ];
  const [areaQuery, setAreaQuery] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const filteredAreas = areaQuery.length > 0
    ? australianAreas.filter(a => a.toLowerCase().includes(areaQuery.toLowerCase()) && !selectedAreas.includes(a))
    : [];

  // Step 9: Recommendation strictness
  const [recommendationStyle, setRecommendationStyle] = useState<string>("");
  const recommendationOptions = [
    {
      label: "Flexible",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M20 6v28M6 20h28" stroke="#4F5DFF" strokeWidth="2.5" strokeLinecap="round"/><circle cx="20" cy="20" r="8" stroke="#4F5DFF" strokeWidth="2.5" fill="#F7F8FC"/></svg>
      ),
      description: "We'll recommend startups matching or closely aligning with your criteria."
    },
    {
      label: "Strict",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M10 30L30 10M10 10l20 20" stroke="#4F5DFF" strokeWidth="2.5" strokeLinecap="round"/><rect x="8" y="8" width="24" height="24" rx="6" stroke="#4F5DFF" strokeWidth="2.5" fill="#F7F8FC"/></svg>
      ),
      description: "We'll only recommend startups exactly matching your criteria."
    }
  ];

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const formatPrice = (val: number) =>
    val >= 2000000 ? "$2,000,000+" : val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const addCustomInterest = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customInterest.trim()) {
      setIndustries([...industries, customInterest.trim()]);
      setSelectedIndustries([...selectedIndustries, customInterest.trim()]);
      setCustomInterest("");
    }
  };

  const addArea = (area: string) => {
    if (!selectedAreas.includes(area)) {
      setSelectedAreas([...selectedAreas, area]);
      setAreaQuery("");
    }
  };
  const removeArea = (area: string) => {
    setSelectedAreas(selectedAreas.filter(a => a !== area));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pb-24">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {step === 1 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              Which startup types interest you?
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {startupTypes.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  className={`flex flex-col items-center justify-center border-2 rounded-xl px-8 py-8 gap-3 font-semibold text-lg transition-all shadow-sm
                    ${selectedTypes.includes(label)
                      ? 'border-[#4F5DFF] bg-[#F7F8FC] text-[#4F5DFF]'
                      : 'border-dashed border-[#B3B8E0] bg-white text-[#23235B] hover:border-[#4F5DFF]/60'}
                  `}
                  onClick={() => toggleType(label)}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end w-full max-w-3xl">
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors
                  ${selectedTypes.length > 0
                    ? 'bg-[#4F5DFF] text-white hover:bg-[#3B4BCC]'
                    : 'bg-[#E6ECFA] text-[#7B849B] cursor-not-allowed'}
                `}
                disabled={selectedTypes.length === 0}
                onClick={() => setStep(2)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              What is your ideal asking price range?
            </h1>
            {/* Histogram placeholder */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full h-32 flex items-end gap-1 mb-6">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4F5DFF] rounded-t"
                    style={{
                      width: 6,
                      height: Math.random() * 80 + 10,
                      opacity: i === 0 || i === 39 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 w-full max-w-md justify-center">
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Min</label>
                  <input
                    type="number"
                    min={0}
                    max={maxPrice}
                    value={minPrice}
                    onChange={e => setMinPrice(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$0"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Max</label>
                  <input
                    type="number"
                    min={minPrice}
                    max={2000000}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$2,000,000+"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-full max-w-md justify-center">
                <span className="text-[#7B849B] text-base">{formatPrice(minPrice)}</span>
                <span className="text-[#7B849B] text-base">–</span>
                <span className="text-[#7B849B] text-base">{formatPrice(maxPrice)}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(3)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              What is your ideal revenue multiple range?
            </h1>
            {/* Histogram placeholder */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full h-32 flex items-end gap-1 mb-6">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4F5DFF] rounded-t"
                    style={{
                      width: 10,
                      height: Math.random() * 80 + 10,
                      opacity: i === 0 || i === 29 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 w-full max-w-md justify-center">
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Min</label>
                  <input
                    type="number"
                    min={0}
                    max={maxRevenueMultiple}
                    value={minRevenueMultiple}
                    onChange={e => setMinRevenueMultiple(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="0x"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Max</label>
                  <input
                    type="number"
                    min={minRevenueMultiple}
                    max={20}
                    value={maxRevenueMultiple}
                    onChange={e => setMaxRevenueMultiple(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="20x+"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-full max-w-md justify-center">
                <span className="text-[#7B849B] text-base">{minRevenueMultiple}x</span>
                <span className="text-[#7B849B] text-base">–</span>
                <span className="text-[#7B849B] text-base">{maxRevenueMultiple === 20 ? '20x+' : `${maxRevenueMultiple}x`}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(4)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              What is your ideal profit multiple range?
            </h1>
            {/* Histogram placeholder */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full h-32 flex items-end gap-1 mb-6">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4F5DFF] rounded-t"
                    style={{
                      width: 10,
                      height: Math.random() * 80 + 10,
                      opacity: i === 0 || i === 29 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 w-full max-w-md justify-center">
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Min</label>
                  <input
                    type="number"
                    min={0}
                    max={maxProfitMultiple}
                    value={minProfitMultiple}
                    onChange={e => setMinProfitMultiple(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="0x"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Max</label>
                  <input
                    type="number"
                    min={minProfitMultiple}
                    max={20}
                    value={maxProfitMultiple}
                    onChange={e => setMaxProfitMultiple(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="20x+"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-full max-w-md justify-center">
                <span className="text-[#7B849B] text-base">{minProfitMultiple}x</span>
                <span className="text-[#7B849B] text-base">–</span>
                <span className="text-[#7B849B] text-base">{maxProfitMultiple === 20 ? '20x+' : `${maxProfitMultiple}x`}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(3)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(5)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              What is your ideal trailing twelve-month (TTM) revenue range?
            </h1>
            {/* Histogram placeholder */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full h-32 flex items-end gap-1 mb-6">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4F5DFF] rounded-t"
                    style={{
                      width: 6,
                      height: Math.random() * 80 + 10,
                      opacity: i === 0 || i === 39 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 w-full max-w-md justify-center">
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Min</label>
                  <input
                    type="number"
                    min={0}
                    max={maxTTMRevenue}
                    value={minTTMRevenue}
                    onChange={e => setMinTTMRevenue(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$0"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Max</label>
                  <input
                    type="number"
                    min={minTTMRevenue}
                    max={1000000}
                    value={maxTTMRevenue}
                    onChange={e => setMaxTTMRevenue(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$1,000,000+"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-full max-w-md justify-center">
                <span className="text-[#7B849B] text-base">${minTTMRevenue.toLocaleString()}</span>
                <span className="text-[#7B849B] text-base">–</span>
                <span className="text-[#7B849B] text-base">{maxTTMRevenue === 1000000 ? '$1,000,000+' : `$${maxTTMRevenue.toLocaleString()}`}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(4)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(6)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              What is your ideal trailing twelve-month (TTM) profit range?
            </h1>
            {/* Histogram placeholder */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full h-32 flex items-end gap-1 mb-6">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#4F5DFF] rounded-t"
                    style={{
                      width: 6,
                      height: Math.random() * 80 + 10,
                      opacity: i === 0 || i === 39 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-4 w-full max-w-md justify-center">
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Min</label>
                  <input
                    type="number"
                    min={0}
                    max={maxTTMProfit}
                    value={minTTMProfit}
                    onChange={e => setMinTTMProfit(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$0"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[#7B849B] mb-1">Max</label>
                  <input
                    type="number"
                    min={minTTMProfit}
                    max={200000}
                    value={maxTTMProfit}
                    onChange={e => setMaxTTMProfit(Number(e.target.value))}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="$200,000+"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-full max-w-md justify-center">
                <span className="text-[#7B849B] text-base">${minTTMProfit.toLocaleString()}</span>
                <span className="text-[#7B849B] text-base">–</span>
                <span className="text-[#7B849B] text-base">{maxTTMProfit === 200000 ? '$200,000+' : `$${maxTTMProfit.toLocaleString()}`}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(5)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(7)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 7 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              Which industries, business models, and tech stacks interest you?
            </h1>
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full mb-4">
                <div className="font-semibold text-[#23235B] mb-2">Choose your interests</div>
                <div className="mb-2">
                  <div className="font-semibold text-[#7B849B] mb-1">Industries</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${selectedIndustries.includes(ind) ? 'bg-[#4F5DFF] text-white border-[#4F5DFF]' : 'bg-white text-[#23235B] border-[#E6ECFA]'}`}
                        onClick={() => setSelectedIndustries(selectedIndustries.includes(ind) ? selectedIndustries.filter(i => i !== ind) : [...selectedIndustries, ind])}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="font-semibold text-[#7B849B] mb-1">Business models</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {businessModels.map((bm) => (
                      <button
                        key={bm}
                        type="button"
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${selectedBusinessModels.includes(bm) ? 'bg-[#4F5DFF] text-white border-[#4F5DFF]' : 'bg-white text-[#23235B] border-[#E6ECFA]'}`}
                        onClick={() => setSelectedBusinessModels(selectedBusinessModels.includes(bm) ? selectedBusinessModels.filter(i => i !== bm) : [...selectedBusinessModels, bm])}
                      >
                        {bm}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="font-semibold text-[#7B849B] mb-1">Tech stacks</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {techStacks.map((ts) => (
                      <button
                        key={ts}
                        type="button"
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${selectedTechStacks.includes(ts) ? 'bg-[#4F5DFF] text-white border-[#4F5DFF]' : 'bg-white text-[#23235B] border-[#E6ECFA]'}`}
                        onClick={() => setSelectedTechStacks(selectedTechStacks.includes(ts) ? selectedTechStacks.filter(i => i !== ts) : [...selectedTechStacks, ts])}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="font-semibold text-[#7B849B] mb-1">Enter an interest and press enter to add</div>
                  <input
                    type="text"
                    value={customInterest}
                    onChange={e => setCustomInterest(e.target.value)}
                    onKeyDown={addCustomInterest}
                    className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                    placeholder="e.g. Business-to-business (B2B)"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(6)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#E6ECFA] text-[#B3B8E0] cursor-not-allowed`}
                disabled
              >
                Next <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-white border border-[#E6ECFA] text-[#23235B] ml-4`}
                onClick={() => setStep(8)}
              >
                Skip
              </button>
            </div>
          </>
        )}
        {step === 8 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              In which areas would you prefer your startup to reside?
            </h1>
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-8">
              <div className="w-full mb-4">
                <div className="font-semibold text-[#7B849B] mb-1">Area</div>
                <input
                  type="text"
                  value={areaQuery}
                  onChange={e => setAreaQuery(e.target.value)}
                  placeholder="Search for a suburb or postcode"
                  className="border-2 border-[#E6ECFA] rounded-xl px-6 py-4 w-full text-lg focus:outline-none focus:border-[#4F5DFF]"
                />
                {filteredAreas.length > 0 && (
                  <div className="border border-[#E6ECFA] rounded-xl bg-white mt-1 max-h-48 overflow-y-auto shadow-lg z-10">
                    {filteredAreas.map(area => (
                      <div
                        key={area}
                        className="px-6 py-3 cursor-pointer hover:bg-[#F7F8FC]"
                        onClick={() => addArea(area)}
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                )}
                {selectedAreas.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedAreas.map(area => (
                      <span key={area} className="px-4 py-2 rounded-full bg-[#4F5DFF] text-white text-sm font-medium flex items-center gap-2">
                        {area}
                        <button type="button" className="ml-1 text-white hover:text-[#B3B8E0]" onClick={() => removeArea(area)}>&times;</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(7)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors bg-[#23235B] text-white hover:bg-[#18194A]`}
                onClick={() => setStep(9)}
              >
                Next <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
        {step === 9 && (
          <>
            <h1 className="text-3xl font-extrabold text-[#23235B] mb-10 text-center mt-24">
              How should we use your criteria to recommend startups?
            </h1>
            <div className="flex flex-row justify-center gap-8 mb-12">
              {recommendationOptions.map(option => (
                <button
                  key={option.label}
                  type="button"
                  className={`flex flex-col items-center border-2 rounded-xl px-12 py-10 gap-4 w-72 transition-all shadow-sm text-center
                    ${recommendationStyle === option.label ? 'border-[#4F5DFF] bg-[#F7F8FC]' : 'border-dashed border-[#B3B8E0] bg-white hover:border-[#4F5DFF]/60'}`}
                  onClick={() => setRecommendationStyle(option.label)}
                >
                  {option.icon}
                  <div className="font-bold text-lg text-[#23235B]">{option.label}</div>
                  <div className="text-[#7B849B] text-base">{option.description}</div>
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full max-w-3xl mt-8">
              <button
                type="button"
                className="font-semibold text-[#23235B] bg-transparent px-8 py-4 rounded-xl text-lg hover:underline"
                onClick={() => setStep(8)}
              >
                Back
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg transition-colors ${recommendationStyle ? 'bg-[#23235B] text-white hover:bg-[#18194A]' : 'bg-[#E6ECFA] text-[#B3B8E0] cursor-not-allowed'}`}
                disabled={!recommendationStyle}
                onClick={() => {
                  if (recommendationStyle) {
                    window.location.href = '/dashboard';
                  }
                }}
              >
                See my recommendations
              </button>
            </div>
          </>
        )}
        {/* Progress bar */}
        <div className="fixed left-0 bottom-0 w-full h-2 bg-[#E6ECFA]">
          <div className="h-2 bg-[#4F5DFF] transition-all" style={{ width: step === 1 ? '10%' : step === 2 ? '20%' : step === 3 ? '30%' : step === 4 ? '40%' : step === 5 ? '50%' : step === 6 ? '60%' : step === 7 ? '70%' : step === 8 ? '80%' : step === 9 ? '100%' : '0%' }} />
        </div>
      </div>
    </div>
  );
} 