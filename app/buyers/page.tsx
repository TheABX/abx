'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-[#E6ECFA] flex flex-col">
      <Navbar alwaysWhite />
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24">
        {/* Left: Headline and CTA */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#23235B] mb-8 leading-tight">
            Access Australia's best off-market businesses without the hassle.
          </h1>
          <p className="text-lg md:text-xl text-[#23235B] mb-10">
            Search hundreds of Australian businesses for sale. Instantly connect with owners, explore off-market opportunities, and find the right deal — faster, smarter, and hassle-free.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-10 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2"
          >
            Join now
            <span className="inline-block">
              <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
        {/* Right: Animated Graphic */}
        <div className="flex-1 hidden md:flex justify-end items-center">
          {/* Animated SVG graphic */}
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
            <circle cx="160" cy="160" r="120" stroke="#B3B8E0" strokeWidth="16" fill="#E6ECFA" />
            <circle cx="160" cy="160" r="80" stroke="#4F5DFF" strokeWidth="8" fill="none" strokeDasharray="40 20" />
            <circle cx="160" cy="160" r="40" stroke="#23235B" strokeWidth="4" fill="none" strokeDasharray="10 10" />
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 160 160" to="360 160 160" dur="8s" repeatCount="indefinite"/>
          </svg>
        </div>
      </section>
      {/* Trusted Listings Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12">
        {/* Left: Illustration/Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#4F5DFF] rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl relative" style={{ minHeight: '340px' }}>
            <div className="text-white font-semibold text-lg mb-2">Recommended listings</div>
            <div className="text-[#B3B8E0] text-xs mb-4">+45 new listings</div>
            <div className="flex bg-white/20 rounded-xl overflow-hidden mb-6">
              <div className="flex-1 px-4 py-2 text-white text-sm font-medium">Asking price</div>
              <div className="flex-1 px-4 py-2 text-white text-sm font-medium border-l border-[#B3B8E0]/30">TTM revenue</div>
              <div className="flex-1 px-4 py-2 text-white text-sm font-medium border-l border-[#B3B8E0]/30">TTM profit</div>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#B3B8E0] mb-1">Based on criteria</div>
              <div className="flex gap-2 mb-2">
                <div className="bg-[#5C6BFF] rounded-lg px-3 py-2 text-xs text-white font-semibold">Shopify App</div>
                <div className="bg-[#5C6BFF] rounded-lg px-3 py-2 text-xs text-white font-semibold">Mobile</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-[#B3B8E0] mb-1">Acquire.com top picks</div>
              <div className="flex gap-2">
                <div className="bg-[#5C6BFF] rounded-lg px-3 py-2 text-xs text-white font-semibold">Mobile</div>
                <div className="bg-[#5C6BFF] rounded-lg px-3 py-2 text-xs text-white font-semibold">Other</div>
              </div>
            </div>
            {/* Simulated card footer */}
            <div className="absolute left-0 bottom-0 w-full h-8 bg-white rounded-b-3xl opacity-80" style={{ zIndex: 1 }} />
            <div className="absolute left-0 bottom-2 w-3/4 h-2 bg-white rounded-full opacity-40" style={{ zIndex: 2, marginLeft: '12%' }} />
          </div>
        </div>
        {/* Right: Text and Bullets */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] mb-6">Trusted listings</h2>
          <p className="text-[#23235B] text-lg mb-8">Tell us your goals and we'll find you matching startups or filter the marketplace to find the right fit. Contact founders instantly.</p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Filter listings by industry, price, revenue, profit, and more</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Get instant notifications of new listings matching your criteria</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Unlock acquisition financing with the SBA and other lenders</span>
            </li>
          </ul>
        </div>
      </section>
      {/* Metrics That Matter Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12">
        {/* Left: Text and Bullets */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] mb-6">Metrics that matter</h2>
          <p className="text-[#23235B] text-lg mb-8">Measure startup performance across connected web, customer, and financial metrics.</p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">View financial snapshots and P&amp;L summaries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Understand revenue, customers, and churn</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Analyze audience and customer acquisition data</span>
            </li>
          </ul>
        </div>
        {/* Right: Chart Illustration/Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#E6ECFA] rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl flex items-center justify-center" style={{ minHeight: '340px' }}>
            <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow flex flex-col" style={{ minHeight: '220px' }}>
              <div className="text-[#23235B] font-semibold text-base mb-1">Monthly Recurring Revenue</div>
              <div className="text-[#7B849B] text-xs mb-4">Oct 2020 - Oct 2021</div>
              {/* Simulated chart */}
              <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <rect x="0" y="0" width="220" height="60" rx="6" fill="#F5F7FB" />
                <polyline points="10,40 40,38 70,39 100,37 130,38 160,39 190,38 210,37" fill="none" stroke="#4F5DFF" strokeWidth="3" />
                <circle cx="10" cy="40" r="3" fill="#4F5DFF" />
                <circle cx="40" cy="38" r="3" fill="#4F5DFF" />
                <circle cx="70" cy="39" r="3" fill="#4F5DFF" />
                <circle cx="100" cy="37" r="3" fill="#4F5DFF" />
                <circle cx="130" cy="38" r="3" fill="#4F5DFF" />
                <circle cx="160" cy="39" r="3" fill="#4F5DFF" />
                <circle cx="190" cy="38" r="3" fill="#4F5DFF" />
                <circle cx="210" cy="37" r="3" fill="#4F5DFF" />
              </svg>
              <div className="flex justify-between items-center mt-auto">
                <div className="h-3 w-32 bg-[#F5F7FB] rounded-full" />
                <span className="text-xs text-[#B3B8E0] font-semibold ml-2">stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Time-saving Technology and Escrow Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12">
        {/* Left: APA Builder Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#4F5DFF] rounded-3xl p-8 md:p-12 w-full max-w-md shadow-xl relative" style={{ minHeight: '340px' }}>
            <div className="text-white font-semibold text-lg mb-6">APA builder</div>
            <div className="h-3 w-2/3 bg-[#B3B8E0] rounded-full mb-4 opacity-40" />
            <div className="h-3 w-1/2 bg-[#B3B8E0] rounded-full mb-8 opacity-30" />
            <div className="flex flex-col gap-4 mb-8">
              <div className="inline-block px-4 py-2 bg-[#4F5DFF] border border-dashed border-white/60 rounded-lg text-white text-sm font-medium shadow-sm" style={{ position: 'relative', left: '30%' }}>
                2. Payment options
              </div>
              <div className="inline-block px-4 py-2 bg-[#4F5DFF] border border-dashed border-white/60 rounded-lg text-white text-sm font-medium shadow-sm" style={{ position: 'relative', left: '10%' }}>
                3. Closing conditions
              </div>
            </div>
            <button className="w-full bg-white text-[#4F5DFF] font-semibold rounded-xl py-3 text-base flex items-center justify-center gap-2 shadow transition-colors hover:bg-blue-50">
              Build APA
              <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#4F5DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Simulated card footer */}
            <div className="absolute left-0 bottom-0 w-full h-8 bg-white rounded-b-3xl opacity-80" style={{ zIndex: 1 }} />
            <div className="absolute left-0 bottom-2 w-3/4 h-2 bg-white rounded-full opacity-40" style={{ zIndex: 2, marginLeft: '12%' }} />
          </div>
        </div>
        {/* Right: Text and Bullets */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] mb-6">Time-saving technology and integrated escrow</h2>
          <p className="text-[#23235B] text-lg mb-8">From making an offer to closing safely with escrow, our expert tooling streamlines the acquisition process so you can focus on negotiating the best deal.</p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Auto-sign NDAs to get instant access to founder data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Build and send LOIs and APAs in minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-4 h-4 rounded-full bg-[#4F5DFF] flex items-center justify-center">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="font-bold text-[#23235B]">Close safely and securely with Escrow.com</span>
            </li>
          </ul>
        </div>
      </section>
      {/* Make Every Acquisition a Success Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12 bg-gradient-to-r from-[#e6ecfa] to-[#dbe7fa]">
        {/* Left: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] mb-6">Make every acquisition a success</h2>
          <p className="text-[#23235B] text-lg mb-8">With buyer membership, you gain access to exclusive listings, M&amp;A courses, and expert guidance on every deal. Whether you're a first-time buyer or a seasoned pro, count on us to help you succeed.</p>
          <button className="bg-[#4F5DFF] hover:bg-[#23235B] text-white font-semibold px-10 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Learn more
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        {/* Right: Image Collage and Chat Bubbles */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[400px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-w-lg">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=200&q=80" alt="Team" className="rounded-2xl col-span-2 row-span-2 object-cover h-48 w-full shadow-lg" />
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=200&q=80" alt="Whiteboard" className="rounded-2xl object-cover h-24 w-full shadow-md" />
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=200&q=80" alt="Call" className="rounded-2xl object-cover h-24 w-full shadow-md" />
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=200&q=80" alt="Support" className="rounded-2xl object-cover h-24 w-full shadow-md col-start-3 row-start-2" />
          </div>
          {/* Chat Bubbles */}
          <div className="absolute left-1/2 top-8 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow flex items-center gap-2 text-sm font-medium" style={{ minWidth: '180px' }}>
            <span className="bg-[#4F5DFF] text-white rounded-full px-2 py-0.5 text-xs font-bold">3</span>
            New matches live this week
          </div>
          <div className="absolute right-0 bottom-24 bg-white rounded-full px-6 py-2 shadow flex items-center gap-2 text-sm font-medium" style={{ minWidth: '140px' }}>
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Online to help
          </div>
          <div className="absolute left-0 bottom-12 bg-white rounded-full px-6 py-2 shadow flex items-center gap-2 text-sm font-medium" style={{ minWidth: '180px' }}>
            Let's talk acquisition strategy
          </div>
          <div className="absolute left-1/4 bottom-0 bg-white rounded-full px-4 py-1 shadow flex items-center gap-2 text-xs font-medium" style={{ minWidth: '100px' }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Advisor" className="w-6 h-6 rounded-full" />
            {/* Simulated chat message */}
            <span>—</span>
          </div>
        </div>
      </section>
      {/* Why Buyers Love Us Section */}
      <section className="w-full bg-[#f7f8fc] py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-16">Why buyers love us</h2>
        <TestimonialCarousel />
      </section>
      {/* CTA Section: Join Now */}
      <section className="w-full flex justify-center items-center py-24">
        <div className="bg-[#cfe0fa] rounded-[3rem] w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-10">Join 500k+ founders and buyers already doing business on Acquire.com</h2>
          <a href="/signup" className="bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Join now
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}

// Testimonial Carousel Component
const testimonials = [
  {
    quote: "My favorite site to find tools and software companies is Acquire.com. It's the best. I like the combination of quality and responsiveness from founders. You've done a really good job curating listings.",
    name: 'Tara Reed',
    title: 'CEO of Apps Without Code',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    highlight: '“Favorite site to find tools and software companies”',
  },
  {
    quote: "At Ramp Ventures we acquire 1-2 SaaS companies a year which usually requires looking at hundreds of deals. With Acquire.com identifying high potential SaaS companies has never been easier. I also love the transparency and how easy it is to connect with sellers.",
    name: 'Sujan Patel',
    title: 'Managing Director of Ramp Ventures',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    highlight: '“Love the transparency”',
  },
  {
    quote: "I've used a few other sites in the past to buy startups and Acquire.com was by far the best experience I've had. From initial reach out, to deal terms, I was able to acquire a startup in my target range within a day. I highly recommend Acquire.com to anyone interested in purchasing SaaS companies.",
    name: 'Gareth Cuddy',
    title: 'Owner of iRevise',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    highlight: '“By far the best experience I\'ve had.”',
  },
  {
    quote: "Acquire.com allows me to easily meet and connect with startup founders looking to sell their business. Through Acquire.com, I was able to acquire a company that fit perfectly within the Awesome Motive portfolio. I highly recommend Acquire.com to anyone looking to buy or sell a SaaS business.",
    name: 'Syed Balkhi',
    title: 'Founder and CEO of Awesome Motive',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    highlight: '“Easily meet and connect with startup founders”',
  },
  {
    quote: "Circle Square Capital is a private equity fund focused on creating value and growth in lower middle market buyouts. Acquire.com helps us meet quality startups without any of the headaches.",
    name: 'Alan Ezeir',
    title: 'Founder of Circle Square Capital',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    highlight: '“Meet quality startups without any of the headaches”',
  },
];

function TestimonialCarousel() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
      {/* Left: Main Testimonial */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="relative bg-[#e6ecfa] rounded-3xl p-10 md:p-12 shadow-md min-w-[320px] max-w-xl">
          <svg width="48" height="36" fill="none" className="absolute -top-6 -left-6 text-[#B3B8E0]"><text x="0" y="32" fontSize="48" fontWeight="bold" fill="#B3B8E0">“</text></svg>
          <p className="text-[#23235B] text-lg mb-8">{testimonials[selected].quote}</p>
          <div className="font-extrabold text-[#23235B] text-base">
            {testimonials[selected].name} <span className="font-normal text-[#7B849B]">{testimonials[selected].title}</span>
          </div>
          <svg width="48" height="36" fill="none" className="absolute -bottom-6 right-6 text-[#B3B8E0] rotate-180"><text x="0" y="32" fontSize="48" fontWeight="bold" fill="#B3B8E0">“</text></svg>
        </div>
      </div>
      {/* Right: Reviewer List */}
      <div className="flex-1 flex flex-col gap-4 max-w-md">
        {testimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-left shadow-sm ${selected === i ? 'bg-white shadow-lg' : 'bg-transparent'} hover:bg-white/80`}
            style={{ border: selected === i ? '2px solid #e6ecfa' : 'none' }}
          >
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className={`font-bold text-[#23235B] text-base ${selected === i ? '' : 'opacity-80'}`}>{t.highlight}</div>
              <div className="text-xs text-[#7B849B] mt-1">{t.title}</div>
            </div>
          </button>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute left-1/2 bottom-0 translate-x-[-50%] mt-8 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-3 h-3 rounded-full ${selected === i ? 'bg-[#4F5DFF]' : 'bg-[#B3B8E0]'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 