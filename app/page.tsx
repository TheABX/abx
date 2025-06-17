'use client'

import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Temporary fake response (we'll wire this to GPT/Supabase in Step 2)
    setResponse(`🔍 Great! Based on what you&apos;re looking for, here&apos;s an off-market deal that might be perfect:

**Off-Market Deal – Well-Established Plumbing Services**
**Name:** Hidden
**Location:** Sydney
**Price:** $388,876
**Revenue:** $1,031,594/year
**Highlights:** All equipment included, Experienced team

👉 **To view the full details and unlock 6 more exclusive off-market deals like this, create your free buyer account.**`)
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgroundtest.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Buy or sell your <br />Business in minutes</h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
          Join thousands using Australia&apos;s most trusted platform to access off-market deals and sell faster with AI
        </p>

        <form onSubmit={handleSubmit} className="flex items-center w-full max-w-lg">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about our business..."
            className="flex-grow px-4 py-3 rounded-l-full bg-white text-gray-800 focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-3 rounded-r-full hover:bg-gray-800"
          >
            ↑
          </button>
        </form>

        {response && (
          <div className="mt-10 max-w-xl bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl text-left text-sm whitespace-pre-wrap text-gray-800">
            {response}
          </div>
        )}
      </div>
    </div>
  )
}
