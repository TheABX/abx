'use client'

import { useState, useEffect } from 'react'

// Define the types for our data structures
interface Listing {
  id: string;
  businessName: string;
  location: string;
  price: string;
  revenue?: string;
  teaserDescription: string;
  isAiGenerated?: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  listings?: Listing[];
}

export default function RealestateMockupPage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  
  // AI Chatbot states
  const [messages, setMessages] = useState<Message[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Email capture states
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailName, setEmailName] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  // Multi-step form state
  const [showMultiStep, setShowMultiStep] = useState(false);
  const [step, setStep] = useState(0);
  const [multiStepData, setMultiStepData] = useState<Record<number, string | string[]>>({});

  // Multi-step form questions and options (from screenshots)
  const multiStepQuestions = [
    {
      question: 'Have you owned or operated a business before?',
      options: [
        'First time',
        'Owned 1-2 before',
        'Owned 3-5',
        'Owned 6+ (Serial Entrepreneur)',
        'I currently own a business',
        'I invest professionally (e.g. PE or VC)'
      ],
      multi: false
    },
    {
      question: 'Which industries have you worked in?',
      options: [
        'Tech', 'Healthcare', 'Retail', 'Food & Beverage', 'Services',
        'Construction', 'Real Estate', 'Finance', 'Marketing', 'Other'
      ],
      multi: true
    },
    {
      question: 'What is your professional background?',
      options: [
        'Finance & Accounting', 'Corporate/Exec', 'Marketing & Sales',
        'Tech & Engineering', 'Healthcare', 'Legal / Consulting',
        'Construction / Real Estate', 'Retail / Hospitality', 'Other'
      ],
      multi: true
    },
    {
      question: 'How much are you looking to invest?',
      options: [
        'Under $250k', '$250k-$500k', '$500k-$1M', '$1M-$2M', '$2M-$5M', '$5M+', 'Not sure yet'
      ],
      multi: false
    },
    {
      question: 'How do you plan to fund your purchase?',
      options: [
        'Cash', 'Bank loan', 'Equity from home', 'Investors', 'Seller finance', 'Other', 'Not sure yet'
      ],
      multi: true
    },
    {
      question: 'Are your finances ready to move quickly if you find the right business?',
      options: [
        'Yes, ready to go', 'Need a few weeks', 'Need a few months', 'Not sure yet'
      ],
      multi: false
    },
    {
      question: 'Which types of businesses are you interested in?',
      options: [
        'E-commerce', 'Services', 'Wholesale/Trade', 'Manufacturing', 'Healthcare', 'Tech', 'Retail', 'Food & Beverage', 'Other'
      ],
      multi: true
    },
    {
      question: 'What is your ideal business size (annual revenue)?',
      options: [
        'Under $500k', '$500k-$1M', '$1M-$2M', '$2M-$5M', '$5M+', 'No preference'
      ],
      multi: false
    },
    {
      question: 'How many employees would you prefer?',
      options: [
        'Solo/Owner-operator', '2-5', '6-20', '21-50', '51+', 'No preference'
      ],
      multi: false
    },
    {
      question: 'What are your main goals for buying a business?',
      options: [
        'Financial freedom', 'Lifestyle change', 'Build & grow', 'Passive income', 'Family legacy', 'Community impact', 'Other'
      ],
      multi: true
    },
    {
      question: 'When are you hoping to buy?',
      options: [
        'ASAP', 'Within 3 months', '3-6 months', '6-12 months', 'Just exploring'
      ],
      multi: false
    },
    {
      question: 'Which best describes you?',
      options: [
        'Just starting out', 'Actively searching', 'In conversations with sellers', 'Made offers before', 'Ready to buy now'
      ],
      multi: false
    },
    {
      question: 'Are you working with any advisors or brokers?',
      options: [
        'No', 'Yes, a broker', 'Yes, an accountant', 'Yes, a lawyer', 'Yes, other advisor(s)'
      ],
      multi: true
    },
    {
      question: 'Would you like to receive updates with new listings and insights?',
      options: [
        'Yes', 'No'
      ],
      multi: false
    }
  ];

  const totalSteps = multiStepQuestions.length;

  const searchExamples = [
    "I'm looking for a plumbing business in Sydney for under 500k",
    "Nail Salon in Perth for under 200k",
    "Cafe in Melbourne for under 300k",
    "Bakery in Brisbane for under 150k",
    "Restaurant in Adelaide for under 400k"
  ]

  useEffect(() => {
    // Initial delay before starting the animation
    if (!hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true)
      }, 4000) // 4 second delay before starting
      return () => clearTimeout(timeout)
    }

    const currentExample = searchExamples[currentTextIndex]
    
    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentExample.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Move to next example
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % searchExamples.length)
      }
    }
  }, [displayText, currentTextIndex, isDeleting, searchExamples, hasStarted])

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchInput.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: searchInput }
    setMessages(prev => [...prev, userMessage])
    setSearchInput('')
    setIsLoading(true)
    setShowResults(true)
    setShowEmailCapture(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.')
      }
      
      const data = await res.json()
      
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: data.reply || '',
        listings: data.listings 
      }
      setMessages(prev => [...prev, assistantMessage])
      setShowEmailCapture(true)

    } catch (err: unknown) {
      const errorMessage: Message = { 
        role: 'assistant', 
        content: err instanceof Error ? err.message : 'An error occurred' 
      }
      setMessages(prev => [...prev, errorMessage])
      setShowEmailCapture(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);
    setEmailMessage("");
    // Simulate API call or integrate with your backend here
    setTimeout(() => {
      setEmailLoading(false);
      setEmailSubmitted(true);
      setEmailName("");
      setEmailContact("");
      setShowMultiStep(true);
      setStep(0);
    }, 1200);
  };

  // Handle multi-step form option selection
  const handleMultiStepSelect = (option: string) => {
    const q = multiStepQuestions[step];
    setMultiStepData(prev => {
      if (q.multi) {
        const prevArr = Array.isArray(prev[step]) ? prev[step] : [];
        if (prevArr.includes(option)) {
          return { ...prev, [step]: prevArr.filter(o => o !== option) };
        } else {
          return { ...prev, [step]: [...prevArr, option] };
        }
      } else {
        return { ...prev, [step]: option };
      }
    });
  };

  const handleMultiStepNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };
  const handleMultiStepBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-sm flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M7 17V9.5L12 6l5 3.5V17a1 1 0 01-1 1H8a1 1 0 01-1-1z" stroke="#E50914" strokeWidth="2"/></svg>
            </span>
            <span className="text-xl font-bold text-[#23235B]">realestate.com.au</span>
          </div>
          <nav className="hidden md:flex gap-6 ml-8 text-[#23235B] font-medium">
            <a href="#" className="hover:text-red-600">Buy</a>
            <a href="#" className="hover:text-red-600">Rent</a>
            <a href="#" className="hover:text-red-600">Sold</a>
            <a href="#" className="hover:text-red-600">New homes</a>
            <a href="#" className="hover:text-red-600">Find agents</a>
            <a href="#" className="hover:text-red-600">Home loans</a>
            <a href="#" className="hover:text-red-600">News</a>
            <a href="#" className="hover:text-red-600">Commercial</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#23235B] font-medium hover:underline">Sign in</a>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg text-base transition-colors">Join</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center mt-8">
        <div className="w-full max-w-4xl relative rounded-2xl overflow-hidden shadow-lg">
          {/* Property image */}
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Properties" className="w-full h-64 object-cover" />
          {/* Search card overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="text-lg font-semibold text-[#23235B] mb-4">Properties to call home</div>
            {/* Tabs */}
            <div className="flex gap-2 mb-4 w-full justify-center">
              {['Buy', 'Rent', 'Sold', 'Address', 'Agents'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-t-lg font-medium text-sm transition-colors ${tab === 'Agents' ? 'border-b-2 border-red-600 text-red-600 bg-white' : 'text-[#23235B] bg-[#F5F7FB] hover:bg-gray-200'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Search input */}
            <div className="w-full flex items-center border rounded-lg overflow-hidden bg-[#F5F7FB]">
              <span className="px-3 text-gray-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="#B3B8E0" strokeWidth="2"/><path d="M15 15l-3-3" stroke="#B3B8E0" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <input
                type="text"
                placeholder="Search suburb, postcode or region"
                className="flex-1 px-2 py-3 bg-transparent outline-none text-[#23235B] text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domain-style Search Section */}
      <section className="w-full flex flex-col items-center mt-16 mb-16">
        <div className="w-full max-w-5xl relative rounded-2xl overflow-visible flex flex-col items-center">
          {/* Background image */}
          <div className="absolute inset-0 h-72 w-full rounded-2xl overflow-hidden -z-10">
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80" alt="Kitchen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Search card */}
          <div className="relative w-full max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center mt-24">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 w-full justify-center">
              {['Buy', 'Rent', 'House & Land', 'New Homes', 'Sold', 'Retirement', 'Rural'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-semibold text-base rounded-t-lg transition-colors ${tab === 'Buy' ? 'bg-green-600 text-white' : 'text-[#23235B] bg-[#F5F7FB] hover:bg-gray-200'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Search input row */}
            <div className="flex w-full gap-2 mb-4">
              <input
                type="text"
                placeholder="Try a location or a school or project name"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-base outline-none"
              />
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-[#23235B] font-medium bg-white hover:bg-gray-100">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10h12" stroke="#23235B" strokeWidth="2" strokeLinecap="round"/><path d="M10 4v12" stroke="#23235B" strokeWidth="2" strokeLinecap="round"/></svg>
                Filters
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 text-lg shadow transition-colors">
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2"/><path d="M16 16l-3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                Search
              </button>
            </div>
            {/* Recent searches */}
            <div className="w-full mt-4">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 2v6l4 2" stroke="#B3B8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="7" stroke="#B3B8E0" strokeWidth="2"/></svg>
                RECENT SEARCHES
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-green-600 rounded-lg px-4 py-2 text-green-700 font-semibold text-sm shadow-sm">
                  Burnie & North West Region
                  <span className="bg-green-600 text-white rounded-full px-2 py-0.5 text-xs ml-1">29</span>
                  <span className="text-xs text-green-600 ml-1">Land</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-green-600 rounded-lg px-4 py-2 text-green-700 font-semibold text-sm shadow-sm">
                  Devonport - Greater Area
                  <span className="text-xs text-green-600 ml-1">Land</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-green-600 rounded-lg px-4 py-2 text-green-700 font-semibold text-sm shadow-sm">
                  Devonport
                  <span className="text-xs text-green-600 ml-1">Land</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero/Metrics Section (Acquire.com style) */}
      <section className="w-full bg-[#18194A] pt-28 pb-20 px-4 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            The largest marketplace to buy and sell profitable online businesses
          </h1>
          <p className="text-lg md:text-xl text-[#B3B8E0] mb-8 max-w-2xl mx-auto">
            Join 500k+ entrepreneurs closing life-changing deals. Buy and sell SaaS, ecommerce, agencies, content, newsletters, mobile apps and crypto businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-[#4F5DFF] hover:bg-[#3B47CC] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-colors">
              View Listings
            </button>
            <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg text-lg shadow hover:bg-white hover:text-[#18194A] transition-colors">
              Our story
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-white font-semibold">4.7</span>
              <span className="text-[#B3B8E0] text-sm">average rating based on 500+ reviews</span>
            </div>
            <div className="flex gap-1">
              <span className="bg-[#fff] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-[#18194A]">G</span>
              <span className="bg-[#fff] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-[#18194A]">C</span>
              <span className="bg-[#fff] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-[#18194A]">P</span>
            </div>
          </div>
        </div>
        {/* Trust metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-4xl w-full text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">$500M+</div>
            <div className="text-[#B3B8E0] text-sm">closed deal volume</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">2,000+</div>
            <div className="text-[#B3B8E0] text-sm">startups sold</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500k+</div>
            <div className="text-[#B3B8E0] text-sm">entrepreneurs trust us</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">$2B+</div>
            <div className="text-[#B3B8E0] text-sm">in verified buyer funds</div>
          </div>
        </div>
      </section>
    </div>
  );
} 