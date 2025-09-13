"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// Placeholder pricing tiers for buyers
const pricingTiers = [
  {
    label: 'Basic',
    heading: 'For buyers just getting started',
    percent: 'Free',
    fee: 'No closing fee',
    monthly: 'No monthly fee',
  },
  {
    label: 'Pro',
    heading: 'For active buyers',
    percent: '$99/mo',
    fee: 'Priority support',
    monthly: 'Cancel anytime',
  },
  {
    label: 'Enterprise',
    heading: 'For institutional buyers',
    percent: 'Custom',
    fee: 'Dedicated advisor',
    monthly: 'Contact us',
  },
];

// Carousel component and data
const dealFlowData = [
  {
    label: 'SaaS startup in the United States',
    desc: 'Reddit SEO marketing engine + SaaS + DFY service driving Google traffic with scalable AI workflows.',
    price: '$500k (2.7x profit)'
  },
  {
    label: 'SaaS startup in the United States',
    desc: 'Interactive content platform to drive engagement, leads, and sales at scale',
    price: '$3.5M (3.1x profit)'
  },
  {
    label: 'Agency startup in the United States',
    desc: 'Award-Winning IT Consultancy Specializing in Digital Transformation, Software Modernization & UX/UI',
    price: '$3.9M (7.2x profit)'
  },
  {
    label: 'SaaS startup in the United States',
    desc: 'WhatsApp marketing automation tool that lets businesses send personalized, automated messages',
    price: '$400k (3.8x profit)'
  },
  {
    label: 'Agency startup in the United States',
    desc: 'Health tech product development, compliance, EHR integration, and AI consulting services',
    price: '$4M (6x profit)'
  },
  {
    label: 'SaaS startup in the United States',
    desc: 'Loyalty, Ambassador, and Referral platform for brands to enhance their acquisition and retention',
    price: '$250k (3x profit)'
  },
  {
    label: 'SaaS startup in Australia',
    desc: 'AI-Powered Content Repurposing Platform with 27,000+ Users and Profitable Operations',
    price: '$300k (2.6x profit)'
  },
  {
    label: 'SaaS startup in the United States',
    desc: 'High margin Solana RPC node subscription business, for developers and traders',
    price: '$175k (2.6x profit)'
  },
  {
    label: 'SaaS startup in the United Kingdom',
    desc: 'A profitable AI video editing tool with 450+ paying customers',
    price: '$150k (1.3x profit)'
  },
  {
    label: 'SaaS startup in Australia',
    desc: '3D/AR product customization that increases sales & reduces return for retailers',
    price: '$850k (3.8x profit)'
  },
];

function DealFlowCarousel() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(dealFlowData.length / cardsPerPage);
  const start = page * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleDeals = dealFlowData.slice(start, end);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <div className="flex gap-8 w-full overflow-x-auto pb-4 scrollbar-hide">
        {visibleDeals.map((deal, i) => (
          <div key={i} className="flex-1 min-w-[320px] max-w-xs bg-[#F7F8FC] rounded-3xl shadow p-8 flex flex-col mb-2" style={{ borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
            <div className="bg-[#23235B] text-white text-base font-semibold rounded-t-2xl px-6 py-3 mb-6" style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>{deal.label}</div>
            <div className="text-[#23235B] text-xl font-extrabold mb-8 flex-1">{deal.desc}</div>
            <div className="bg-white rounded-xl px-6 py-4 text-[#23235B] text-lg font-bold shadow flex items-center">Asking price <span className="ml-2 font-extrabold">{deal.price}</span></div>
          </div>
        ))}
      </div>
      {/* Carousel dots */}
      <div className="flex gap-2 mt-6 mb-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full ${page === i ? 'bg-[#23235B]' : 'bg-[#E6ECFA]'}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Testimonial carousel component and data
const buyersTestimonials = [
  {
    quote: "My favorite site to find tools and software companies is Acquire.com. It's the best. I like the combination of quality and responsiveness from founders. You've done a really good job curating listings.",
    highlight: '“Favorite site to find tools and software companies”',
    name: 'Tara Reed',
    title: 'CEO of Apps Without Code',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'Love the transparency',
    highlight: '“Love the transparency”',
    name: 'Sujan Patel',
    title: 'Managing Director of Ramp Ventures',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote: "By far the best experience I've had.",
    highlight: '“By far the best experience I\'ve had.”',
    name: "Brian O'Connor",
    title: 'Owner of iRevise',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    quote: 'Easily meet and connect with startup founders',
    highlight: '“Easily meet and connect with startup founders”',
    name: 'Syed Balkhi',
    title: 'Founder and CEO of Awesome Motive',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    quote: 'Meet quality startups without any of the headaches',
    highlight: '“Meet quality startups without any of the headaches”',
    name: 'John Smith',
    title: 'Founder of Circle Square Capital',
    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
];

function BuyersTestimonialCarousel() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto w-full">
      {/* Left: Main Testimonial */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-md min-w-[320px] max-w-xl">
          <svg width="48" height="36" fill="none" className="absolute -top-6 -left-6 text-[#B3B8E0]"><text x="0" y="32" fontSize="48" fontWeight="bold" fill="#B3B8E0">“</text></svg>
          <p className="text-[#23235B] text-lg mb-8">{buyersTestimonials[selected].quote}</p>
          <div className="font-extrabold text-[#23235B] text-base">
            {buyersTestimonials[selected].name} <span className="font-normal text-[#7B849B]">{buyersTestimonials[selected].title}</span>
          </div>
        </div>
      </div>
      {/* Right: Reviewer List */}
      <div className="flex-1 flex flex-col gap-4 max-w-md">
        {buyersTestimonials.map((t, i) => (
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
        {buyersTestimonials.map((_, i) => (
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

// FAQ Section
const buyersFaqs = [
  {
    q: "Does a paid subscription guarantee I'll find a startup I like?",
    a: "We're confident a paid subscription will help you find a startup you're excited about. It unlocks full access to listings—including company names, financials, and direct messaging with sellers—plus a suite of tools designed to support your search. You'll also gain access to Acquire Academy, including our flagship course How to Buy, Grow, and Sell Startups, to help you navigate the process with confidence and clarity."
  },
  {
    q: "Can I cancel a paid membership?",
    a: "Membership offers rewards for the lifetime of your career as an entrepreneur, investor, or M&A professional. From M&A masterclasses to exclusive events and community connections, there's much more to the paid membership than access to profitable startups and motivated founders. But if you ever feel like you need a break, or aren't interested in M&A opportunities, you can cancel anytime.\n\nPlease note that we can't give pro-rated refunds or refunds for cancellations after the first seven days of membership."
  },
  {
    q: "What types of membership are available?",
    a: "You can upgrade to either Premium or Platinum membership depending on the size of startups you'd like to acquire. Premium gives you access to startups priced at up to $250k while Platinum grants access to startups of all sizes. Both plans offer the full suite of membership benefits including an expert concierge and free enrolment in Acquire Academy."
  },
  {
    q: "What is Acquire Academy?",
    a: "Acquire Academy is our educational arm offering you masterclasses on how to build wealth through acquisition. By learning from our founder's serial exits and our team's decades of M&A experience, you can maximize your returns, identify the best opportunities, and avoid common mistakes. There are courses in everything from evaluating businesses to growth strategies for all levels, from the first-time buyer to the serial acquirer. Given its long-term value, Acquire Academy is worth membership alone."
  },
];

function BuyersFAQAccordion() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {buyersFaqs.map((item, i) => (
        <div key={i} className="rounded-3xl bg-[#E6ECFA] overflow-hidden transition-all">
          <button
            className="w-full flex items-center justify-between px-8 py-6 text-lg md:text-xl font-bold text-[#23235B] focus:outline-none"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg width="24" height="24" fill="none" className={`transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" stroke="#23235B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {open === i && (
            <div className="px-8 pb-8 text-[#23235B] text-base md:text-lg animate-fade-in">
              {item.a.split('\n').map((line, idx) => (
                <p key={idx} className="mb-4 last:mb-0">{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PricingBuyersPage() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="min-h-screen bg-[#3B369C] flex flex-col">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">Flexible pricing for every buyer</h1>
        <p className="text-lg text-white text-center mb-12">Choose the plan that fits your acquisition goals.</p>
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-10 gap-10">
          {/* Left: Pricing Card */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex gap-2 mb-8">
              {pricingTiers.map((tier, i) => (
                <button
                  key={tier.label}
                  onClick={() => setSelected(i)}
                  className={`px-8 py-3 rounded-xl font-semibold text-lg border-2 transition-all ${selected === i ? 'bg-[#4F5DFF] text-white border-[#4F5DFF]' : 'bg-white text-[#4F5DFF] border-[#4F5DFF]'}`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <div className="text-center mb-8">
              <div className="text-[#23235B] font-bold text-lg mb-2">{pricingTiers[selected].heading}</div>
              <div className="text-6xl font-extrabold text-[#23235B] mb-2">{pricingTiers[selected].percent}</div>
              <div className="text-[#23235B] text-lg mb-2">
                <span className="border-b border-dashed border-[#23235B]">{pricingTiers[selected].fee}</span>
              </div>
              <div className="text-[#7B849B] text-base mb-6">{pricingTiers[selected].monthly}</div>
              <button className="bg-[#4F5DFF] hover:bg-[#23235B] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2 mx-auto">
                Get started
                <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Placeholder for buyers features */}
          <div className="flex-1 flex flex-col gap-8 items-start justify-center pl-0 md:pl-12">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#3B369C" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="#3B369C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Access exclusive listings</div>
                <div className="text-[#7B849B] text-base">See deals before anyone else.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="#3B369C" strokeWidth="2" /><path d="M9 10a3 3 0 016 0c0 1.657-1.343 3-3 3s-3-1.343-3-3z" stroke="#3B369C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Priority support</div>
                <div className="text-[#7B849B] text-base">Get help from our team, fast.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#3B369C" strokeWidth="2" /><path d="M8 12h8M12 8v8" stroke="#3B369C" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Custom deal alerts</div>
                <div className="text-[#7B849B] text-base">Be notified instantly when new listings match your criteria.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive member-only benefits section */}
      <section className="w-full bg-[#F4F6FE] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#23235B] text-center mb-4">Exclusive member-only benefits</h2>
        <p className="text-lg text-[#7B849B] text-center mb-16 max-w-2xl">Discover how membership helps you find, acquire, and grow startups with support across every stage of your deal.</p>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white shadow p-8 flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6ECFA] text-[#23235B]">
              {/* Icon: Deals */}
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6ECFA"/><path d="M9 19V9h10v10H9zm2-2h6v-6h-6v6z" stroke="#23235B" strokeWidth="2"/></svg>
            </span>
            <div className="font-extrabold text-2xl text-[#23235B] mb-2">Access vetted deals</div>
            <div className="text-[#7B849B] text-base">Connect with 1,000s of startups we've curated and prepped for a seamless exit.</div>
          </div>
          {/* Card 2 */}
          <div className="rounded-3xl bg-white shadow p-8 flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6ECFA] text-[#23235B]">
              {/* Icon: Streamline */}
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6ECFA"/><rect x="9" y="13" width="10" height="6" rx="2" stroke="#23235B" strokeWidth="2"/><path d="M13 9h2v4h-2z" fill="#23235B"/></svg>
            </span>
            <div className="font-extrabold text-2xl text-[#23235B] mb-2">Streamline your acquisitions</div>
            <div className="text-[#7B849B] text-base">Simplify and accelerate dealmaking with legal, diligence, and closing tools.</div>
          </div>
          {/* Card 3 */}
          <div className="rounded-3xl bg-white shadow p-8 flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6ECFA] text-[#23235B]">
              {/* Icon: Community */}
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6ECFA"/><path d="M14 17a4 4 0 100-8 4 4 0 000 8z" stroke="#23235B" strokeWidth="2"/><path d="M7 21c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#23235B" strokeWidth="2"/></svg>
            </span>
            <div className="font-extrabold text-2xl text-[#23235B] mb-2">Join an exclusive community</div>
            <div className="text-[#7B849B] text-base">Network with other buyers and share insights to maximize returns.</div>
          </div>
          {/* Card 4 */}
          <div className="rounded-3xl bg-white shadow p-8 flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6ECFA] text-[#23235B]">
              {/* Icon: Academy */}
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6ECFA"/><path d="M8 18v-2a4 4 0 018 0v2" stroke="#23235B" strokeWidth="2"/><circle cx="14" cy="11" r="3" stroke="#23235B" strokeWidth="2"/></svg>
            </span>
            <div className="font-extrabold text-2xl text-[#23235B] mb-2">Access to Acquire Academy</div>
            <div className="text-[#7B849B] text-base">Learn how to build wealth through acquisition with our M&A masterclasses.</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Become a member
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
      {/* Unsure where to start section */}
      <section className="w-full bg-gradient-to-r from-[#2B267A] to-[#3B369C] py-24 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Text and CTA */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Unsure where to start?</h2>
          <p className="text-lg text-[#E6E9F8] mb-10">Whether it's your first acquisition or you're a seasoned professional, every paid membership comes with expert M&A guidance to help you find and close a life-changing deal.</p>
          <button className="bg-[#4F5DFF] hover:bg-[#23235B] text-white font-semibold px-10 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Become a member
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        {/* Right: Image collage and chat bubbles */}
        <div className="flex-1 flex flex-col items-center justify-center relative max-w-2xl">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80" alt="Team" className="rounded-2xl w-40 h-28 object-cover" />
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80" alt="Advisor" className="rounded-2xl w-32 h-28 object-cover" />
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80" alt="Call" className="rounded-2xl w-32 h-32 object-cover col-span-1 row-span-2" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=400&q=80" alt="Group" className="rounded-2xl w-40 h-32 object-cover col-span-1 row-span-2" />
          </div>
          {/* Chat bubbles */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 bg-white rounded-full px-6 py-3 shadow text-[#23235B] font-medium text-base flex items-center gap-2">
            <span>Let's talk acquisition strategy</span>
          </div>
          <div className="absolute right-0 top-8 translate-x-1/3 bg-white rounded-full px-6 py-3 shadow text-[#23235B] font-medium text-base flex items-center gap-2">
            <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#4F5DFF"/><text x="5" y="14" fontSize="12" fill="#fff">3</text></svg>
            <span>New matches live this week</span>
          </div>
          <div className="absolute right-0 bottom-8 translate-x-1/3 bg-white rounded-full px-6 py-3 shadow text-[#23235B] font-medium text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            <span>Online to help</span>
          </div>
          <div className="absolute left-0 bottom-8 -translate-x-1/3 bg-white rounded-full px-6 py-3 shadow text-[#23235B] font-medium text-base flex items-center gap-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Advisor" className="w-6 h-6 rounded-full object-cover" />
            <span>—</span>
          </div>
        </div>
      </section>
      {/* Unrivaled deal flow section */}
      <section className="w-full bg-white py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#23235B] text-center mb-4">Unrivaled deal flow</h2>
        <p className="text-lg text-[#7B849B] text-center mb-16 max-w-2xl">A few of our favorite SaaS businesses live and under expert guidance from our M&A team.</p>
        <DealFlowCarousel />
        <div className="flex justify-center mt-10">
          <button className="border border-[#23235B] text-[#23235B] font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2 hover:bg-[#F4F6FE]">
            Explore for free
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#23235B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
      {/* Compare plans section */}
      <section className="w-full bg-[#F4F6FE] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#23235B] text-center mb-16">Compare plans to find the right one for you</h2>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-4 mb-12">
          <div></div>
          <div className="bg-white rounded-t-xl py-4 text-center font-extrabold text-xl text-[#23235B]">Basic</div>
          <div className="bg-white rounded-t-xl py-4 text-center font-extrabold text-xl text-[#23235B]">Paid membership</div>
          {/* Features rows */}
          {[
            {
              label: 'View public details of all listed startups',
              basic: true,
              paid: true,
            },
            {
              label: 'Get instant notifications of new listings matching your criteria',
              basic: true,
              paid: true,
            },
            {
              label: 'Browse quality listings curated and vetted by our curation team',
              basic: true,
              paid: true,
            },
            {
              label: 'View key performance metrics and standardized financials',
              basic: false,
              paid: true,
            },
            {
              label: 'Streamline dealmaking with legal, diligence, and closing tools',
              basic: false,
              paid: true,
            },
            {
              label: 'Build, sign, and send LOIs and APAs in minutes',
              basic: false,
              paid: true,
            },
            {
              label: 'Contact founders of vetted startups who are motivated to sell',
              basic: false,
              paid: true,
            },
            {
              label: 'Access Acquire Academy to learn how to build wealth through M&A',
              basic: false,
              paid: true,
            },
            {
              label: 'Join an exclusive community to network with peers and share insights',
              basic: false,
              paid: true,
            },
          ].map((row, i) => (
            <React.Fragment key={i}>
              <div className="bg-white py-5 px-6 text-[#23235B] text-lg font-medium flex items-center rounded-l-xl">{row.label}</div>
              <div className="bg-white flex items-center justify-center py-5">
                {row.basic ? (
                  <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6F9F0"/><path d="M9 15l3 3 7-7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#FEE2E2"/><path d="M10 10l8 8m0-8l-8 8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
                )}
              </div>
              <div className="bg-white flex items-center justify-center py-5 rounded-r-xl">
                {row.paid ? (
                  <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#E6F9F0"/><path d="M9 15l3 3 7-7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#FEE2E2"/><path d="M10 10l8 8m0-8l-8 8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <button className="border border-[#23235B] text-[#23235B] font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2 hover:bg-white bg-white">
            Explore for free
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#23235B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Become a member
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
      {/* Why buyers love us section */}
      <section className="w-full bg-[#F7F8FC] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#23235B] text-center mb-16">Why buyers love us</h2>
        <BuyersTestimonialCarousel />
      </section>
      {/* FAQ Section */}
      <section className="w-full bg-[#F7F8FC] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-16">FAQs</h2>
        <BuyersFAQAccordion />
      </section>
      {/* Final CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-5xl bg-[#D9E8FC] rounded-[3rem] flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-6">Build your advantage in M&amp;A</h2>
          <p className="text-lg text-[#23235B] text-center mb-10 max-w-2xl">Become a member to access exclusive deals, expert-led M&amp;A courses, and a dedicated advisor to support your long-term acquisition goals.</p>
          <button className="bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2">
            Become a member
            <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
    </div>
  );
} 