'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const pricingTiers = [
  {
    label: '<$250k',
    heading: 'For asking prices below $250k',
    percent: '8%',
    fee: 'closing fee when you sell',
    monthly: 'Plus $25/mo to list',
  },
  {
    label: '$250k-$1M',
    heading: 'For asking prices between $250k-$1M',
    percent: '7%',
    fee: 'closing fee when you sell',
    monthly: 'Plus $50/mo to list',
  },
  {
    label: '$1M+',
    heading: 'For asking prices above $1M',
    percent: '6%',
    fee: 'closing fee when you sell',
    monthly: 'Plus $100/mo to list',
  },
];

const features = [
  {
    label: 'Valuations',
    title: 'Valuations',
    desc: 'Free valuation to help you get the price you deserve',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Valuation recommendation</div>
            <div className="text-2xl font-extrabold text-[#4F5DFF]">$450k</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Synchronized metrics',
    title: 'Synchronized metrics',
    desc: 'Synchronized metrics to keep your listing up-to-date',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Monthly Recurring Revenue</div>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none"><rect x="0" y="0" width="120" height="40" rx="6" fill="#F5F7FB" /><polyline points="10,30 30,28 50,29 70,27 90,28 110,27" fill="none" stroke="#4F5DFF" strokeWidth="2" /><circle cx="90" cy="28" r="3" fill="#4F5DFF" /></svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Ad campaigns',
    title: 'Ad campaigns',
    desc: 'Ad campaigns to expose your listing to 500k+ buyers',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">New SaaS listing</div>
            <div className="flex gap-2 mt-2">
              <span className="bg-[#4F5DFF] text-white rounded-full px-2 py-1 text-xs font-bold">🔥</span>
              <span className="bg-[#F5F7FB] text-[#4F5DFF] rounded-full px-2 py-1 text-xs font-bold">Ad</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Listing optimization',
    title: 'Listing optimization',
    desc: 'Help creating a listing that grabs buyers\' attention',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Listing checks</div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="bg-[#4F5DFF] text-white rounded px-2 py-1 text-xs font-bold">✔️</span>
              <span className="bg-[#F5F7FB] text-[#4F5DFF] rounded px-2 py-1 text-xs font-bold">✔️</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Vetted buyers',
    title: 'Vetted buyers',
    desc: 'Vetted buyer identities and available funds to save time',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="flex items-center gap-2 mb-1">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Buyer" className="w-8 h-8 rounded-full" />
              <span className="bg-[#4F5DFF] text-white rounded-full px-2 py-1 text-xs font-bold">✔️</span>
              <span className="bg-[#F5F7FB] text-[#4F5DFF] rounded-full px-2 py-1 text-xs font-bold">$</span>
            </div>
            <div className="text-xs text-[#7B849B] font-semibold">Smiles Davis</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Automated NDAs',
    title: 'Automated NDAs',
    desc: 'Automatic NDAs to protect your privacy',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Non-disclosure agreement</div>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User1" className="w-8 h-8 rounded-full" />
              <span className="text-[#4F5DFF] text-xl">→</span>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User2" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Legal doc builders',
    title: 'Legal doc builders',
    desc: 'Legal document builders to help close quickly',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Letter of Intent</div>
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Asset Purchase Agreement</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Free & secure escrow',
    title: 'Free & secure escrow',
    desc: 'Free escrow to ensure you close safely and securely',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Closing payment</div>
            <div className="text-xs text-[#7B849B] font-semibold mb-1">Conditional holdback</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Expert guidance',
    title: 'Expert guidance',
    desc: 'Customer success manager to help when you need it',
    illustration: (
      <div className="flex items-center gap-4">
        <div className="bg-[#E6ECFA] rounded-2xl p-6 flex flex-col items-center">
          <div className="bg-white rounded-xl p-4 shadow-md mb-2">
            <div className="flex items-center gap-2 mb-1">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="CSM" className="w-8 h-8 rounded-full" />
              <span className="bg-[#4F5DFF] text-white rounded-full px-2 py-1 text-xs font-bold">A</span>
            </div>
            <div className="text-xs text-[#7B849B] font-semibold">Customer success manager</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PricingSellersPage() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="min-h-screen bg-[#3B369C] flex flex-col">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">A custom acquisition plan that scales with you</h1>
        <p className="text-lg text-white text-center mb-12">Scalable pricing based on your startup's asking price.</p>
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
          {/* Right: Features List */}
          <div className="flex-1 flex flex-col gap-8 items-start justify-center pl-0 md:pl-12">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#3B369C" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="#3B369C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Maximum interest</div>
                <div className="text-[#7B849B] text-base">Attract more buyers with marketing and listing support.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="#3B369C" strokeWidth="2" /><path d="M9 10a3 3 0 016 0c0 1.657-1.343 3-3 3s-3-1.343-3-3z" stroke="#3B369C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Expert guidance</div>
                <div className="text-[#7B849B] text-base">Sell for the highest price and best terms with our help.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FB] text-[#3B369C]">
                <svg width="24" height="24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#3B369C" strokeWidth="2" /><path d="M8 12h8M12 8v8" stroke="#3B369C" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="font-bold text-[#23235B] text-lg">Free and secure escrow</div>
                <div className="text-[#7B849B] text-base">Close safely and easily with trusted escrow partners.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What you get when you sell with us section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-12">What you get when you sell with us</h2>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
          {/* Stepper */}
          <div className="flex flex-col gap-2 min-w-[220px]">
            {features.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-3 py-2 px-2 text-left font-semibold transition-all ${selected === i ? 'text-[#23235B]' : 'text-[#7B849B]'} ${selected === i ? 'bg-[#F5F7FB] rounded-xl' : ''}`}
              >
                <span className={`w-4 h-4 rounded-full border-2 ${selected === i ? 'border-[#4F5DFF] bg-white' : 'border-[#B3B8E0] bg-white'}`}></span>
                <span className={selected === i ? 'text-lg font-bold' : ''}>{f.label}</span>
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="flex-1 bg-[#F7F8FC] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 min-h-[320px]">
            <div>{features[selected].illustration}</div>
            <div>
              <div className="text-2xl font-extrabold text-[#23235B] mb-2">{features[selected].title}</div>
              <div className="text-[#7B849B] text-lg">{features[selected].desc}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Guided by Acquire Section */}
      <section className="w-full bg-[#23235B] py-24 px-4 flex flex-col items-center justify-center">
        <div className="mb-6">
          <span className="inline-block bg-[#4F5DFF] bg-opacity-30 text-[#E6E9F8] text-base font-semibold rounded-full px-6 py-2">For profitable SaaS startups with $100k+ revenue only</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">Maximize your exit with Guided by Acquire</h2>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* SaaS specialists */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B369C] mb-6">
              {/* SaaS icon */}
              <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill="#4F5DFF" fillOpacity="0.15"/><path d="M18 26c4.418 0 8-1.79 8-4V16c0-2.21-3.582-4-8-4s-8 1.79-8 4v6c0 2.21 3.582 4 8 4Z" stroke="#4F5DFF" strokeWidth="2"/><path d="M10 16c0 2.21 3.582 4 8 4s8-1.79 8-4" stroke="#4F5DFF" strokeWidth="2"/></svg>
            </span>
            <div className="text-2xl font-extrabold text-white mb-4">SaaS specialists</div>
            <div className="text-[#E6E9F8] text-lg">Maximize interest, attract more offers, and boost your valuation with an M&amp;A team led by former SaaS founders.</div>
          </div>
          {/* Expert matchmaking */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B369C] mb-6">
              {/* Matchmaking icon */}
              <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill="#4F5DFF" fillOpacity="0.15"/><path d="M12 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm8 8v-2a4 4 0 0 0-8 0v2" stroke="#4F5DFF" strokeWidth="2"/><path d="M24 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 8v-2a4 4 0 0 0-8 0v2" stroke="#4F5DFF" strokeWidth="2"/></svg>
            </span>
            <div className="text-2xl font-extrabold text-white mb-4">Expert matchmaking</div>
            <div className="text-[#E6E9F8] text-lg mb-8">From private equity to high net-worth individuals, we bring you the most qualified buyers and match them to your goals.</div>
            <button className="bg-[#4F5DFF] hover:bg-[#23235B] text-white font-semibold px-10 py-4 rounded-xl text-lg shadow transition-colors flex items-center gap-2 mx-auto">
              Learn more
              <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          {/* Life-changing acquisitions */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3B369C] mb-6">
              {/* Handshake icon */}
              <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill="#4F5DFF" fillOpacity="0.15"/><path d="M12 20l4 4 8-8" stroke="#4F5DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 20l-2-2m2 2l2-2m8-8l-2 2m2-2l-2 2" stroke="#4F5DFF" strokeWidth="2"/></svg>
            </span>
            <div className="text-2xl font-extrabold text-white mb-4">Life-changing acquisitions</div>
            <div className="text-[#E6E9F8] text-lg">We'll perfect your listing, market your startup, and coach you through every step of your life-changing acquisition.</div>
          </div>
        </div>
      </section>
      {/* Why Founders Love Us Section */}
      <section className="w-full bg-[#f7f8fc] py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-16">Why founders love us</h2>
        <FounderTestimonialCarousel />
      </section>
      {/* Comparison Table Section */}
      <section className="w-full bg-[#E6ECFA] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-16">How do we compare to the competition?</h2>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-4 gap-4 mb-12">
          <div className=""></div>
          <div className="bg-[#4F5DFF] rounded-xl flex items-center justify-center py-6 px-2 col-span-1">
            <span className="flex items-center gap-2 text-white text-2xl font-extrabold">
              <svg width="32" height="32" fill="none"><path d="M16 4l10.392 18H5.608L16 4z" fill="#fff"/><path d="M16 4l10.392 18H5.608L16 4z" fill="#4F5DFF" fillOpacity=".8"/></svg>
              acquire<span className="font-normal text-white text-lg">.com</span>
            </span>
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 col-span-1">
            <span className="text-[#23235B] text-xl font-bold">Other marketplaces</span>
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 col-span-1">
            <span className="text-[#23235B] text-xl font-bold">Business brokers</span>
          </div>
          {/* Row: Closing fee */}
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 font-bold text-[#23235B]">Closing fee</div>
          <div className="bg-[#4F5DFF] rounded-xl flex items-center justify-center py-6 px-2 text-white text-xl font-bold">6-8%</div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 text-[#23235B] text-xl font-bold">2.5-15%</div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 text-[#23235B] text-xl font-bold">10-15%</div>
          {/* Row: Listing fee */}
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 font-bold text-[#23235B]">Listing fee</div>
          <div className="bg-[#4F5DFF] rounded-xl flex items-center justify-center py-6 px-2 text-white text-xl font-bold">$25-$100</div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 text-[#23235B] text-xl font-bold">$49-$599</div>
          <div className="bg-white rounded-xl flex items-center justify-center py-6 px-2 text-[#23235B] text-xl font-bold">NA</div>
        </div>
        <a href="/pricingsellers" className="bg-[#23235B] hover:bg-[#18194A] text-white font-semibold px-12 py-5 rounded-xl text-lg shadow transition-colors flex items-center gap-2 mt-8">
          Get started
          <svg width="20" height="20" fill="none"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </section>
      {/* FAQ Section */}
      <section className="w-full bg-[#F7F8FC] py-24 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23235B] text-center mb-16">FAQs</h2>
        <FAQAccordion />
      </section>
    </div>
  );
}

// Founder Testimonial Carousel Component
const founderTestimonials = [
  {
    quote: "This was our first acquisition, but the experience was amazing. The platform is super intuitive, and the team is so supportive and very proactive. We worked with Emiley, and she helped us a lot at every step. She always asked if everything was clear, how conversations were going, if we needed any help, shared materials, etc. She was just like a part of our team, really :)",
    name: 'Veranika Prilutskaya',
    company: 'Sold Notionlytics',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    highlight: '"...the team is so supportive and very proactive."',
    sub: 'Sold Notionlytics',
    tag: 'SaaS',
  },
  {
    quote: "It's never an easy decision when a founder decides to sell their business. But when the time comes, Acquire is the ideal platform for profitable bootstrapped businesses. Gone are the days of working with expensive M&A firms. Acquire is easy, transparent, and supportive. I worked with Ebony from Acquire. She was a great resource and helped us navigate the ups and downs of selling a business. Ultimately we received 7 offers before accepting a great cash deal.",
    name: 'Michael Sanders',
    company: 'Sold Done Done',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    highlight: '"...the ideal platform for profitable businesses..."',
    sub: 'Sold Done Done',
    tag: 'SaaS',
  },
  {
    quote: "Had a fast an easy transaction and most importantly, Acquire helped us find an ideal strategic buyer for our niche app. The hands-on support from Emiley Noonan was unexpected (especially with experience on other platforms) and she was very knowledgeable, well-informed, supportive, and showed up to the call having actually spent some time going through our profile which made the whole thing a much better investment of time. Would definitely recommend.",
    name: 'Dave Lawrence',
    company: 'Sold HappyDetailer',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
    highlight: '"...Acquire helped us find an ideal strategic buyer for our niche app."',
    sub: 'Sold HappyDetailer',
    tag: 'SaaS',
  },
  {
    quote: "Acquire.com was a great experience. Ky Pratt was truly amazing to work with. They aren't just selling a service, they are good people and care about your outcome. I would highly recommend them because they have a simple toolset and process to follow that makes each step easily executable. They invested hours of time and countless resources to help us, and we had a great experience that I don't think we would have had anywhere else. If you are accepted on their platform, I would absolutely follow their process and take advantage of all the help they provide.",
    name: 'William Hamilton',
    company: 'Sold SmartPath.co',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    highlight: '"They aren\'t just selling a service, they are good people and care about your outcome."',
    sub: 'Sold SmartPath.co',
    tag: 'SaaS',
  },
  {
    quote: "Acquire was instrumental in selling my SaaS business. I went out on my own at first to try to get offers without a broker, and I received 1 LOI. When I posted the business on Acquire, I got 6 LOIs, and I accepted an offer over asking. Selling a business is not easy, but if you are running a profitable, small SaaS business, there is no better place to sell it than Acquire. I had never sold a business before, and Emiley, one of their advisors, met with me at least 5 or 6 times through the process to advise me and support me to sell the business. They do a great job of getting the right eyeballs on your listing, crafting a process to build FOMO and drive up offers/offer price, and help you land the ship with a successful sale.",
    name: 'Harris Osserman',
    company: 'Sold TalkHiring',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
    highlight: '"Acquire was instrumental in selling my SaaS business."',
    sub: 'Sold TalkHiring',
    tag: 'SaaS',
  },
];

function FounderTestimonialCarousel() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
      {/* Left: Main Testimonial */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="relative bg-[#e6ecfa] rounded-3xl p-10 md:p-12 shadow-md min-w-[320px] max-w-xl">
          <svg width="48" height="36" fill="none" className="absolute -top-6 -left-6 text-[#B3B8E0]"><text x="0" y="32" fontSize="48" fontWeight="bold" fill="#B3B8E0">“</text></svg>
          <p className="text-[#23235B] text-lg mb-8">{founderTestimonials[selected].quote}</p>
          <div className="font-extrabold text-[#23235B] text-base">
            {founderTestimonials[selected].name} <span className="font-normal text-[#7B849B]">{founderTestimonials[selected].company}</span>
          </div>
          <div className="text-xs text-[#7B849B] mt-1 italic">{founderTestimonials[selected].tag}</div>
          <svg width="48" height="36" fill="none" className="absolute -bottom-6 right-6 text-[#B3B8E0] rotate-180"><text x="0" y="32" fontSize="48" fontWeight="bold" fill="#B3B8E0">“</text></svg>
        </div>
      </div>
      {/* Right: Reviewer List */}
      <div className="flex-1 flex flex-col gap-4 max-w-md">
        {founderTestimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-left shadow-sm ${selected === i ? 'bg-white shadow-lg' : 'bg-transparent'} hover:bg-white/80`}
            style={{ border: selected === i ? '2px solid #e6ecfa' : 'none' }}
          >
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className={`font-bold text-[#23235B] text-base ${selected === i ? '' : 'opacity-80'}`}>{t.highlight}</div>
              <div className="text-xs text-[#7B849B] mt-1">{t.sub}</div>
            </div>
          </button>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute left-1/2 bottom-0 translate-x-[-50%] mt-8 flex gap-2">
        {founderTestimonials.map((_, i) => (
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

const faqs = [
  {
    q: "Why is there a listing fee?",
    a: "The listing fee ensures only serious sellers list their startups, which helps the marketplace attract high-quality buyers serious about making offers."
  },
  {
    q: "What is the closing fee and when is it paid?",
    a: "The closing fee is a percentage of the total purchase price of your business and is due in full when your acquisition closes. There are no additional hidden fees or costs associated with this payment."
  },
  {
    q: "Do I pay a fee if I can't sell my startup?",
    a: "No, you only pay the closing fee if your business is successfully acquired. The listing fee is non-refundable."
  },
  {
    q: "Who pays for escrow?",
    a: "Escrow fees are typically split between the buyer and seller, but this can be negotiated as part of your acquisition agreement."
  },
  {
    q: "How does my expert advisor help me?",
    a: "You get a dedicated acquisition expert for free when selling on Acquire.com to help you achieve your acquisition goals and sell for the highest price and best terms. Your expert will perfect your listing, answer acquisition questions, help you navigate the Acquire.com platform, and share resources to help you achieve your acquisition goals."
  },
  {
    q: "Do I need professional services (such as a broker) when selling with Acquire.com?",
    a: "No, we give you everything you need to sell your business, from listing guidance to data rooms, legal document builders to metrics integrations. When you list on Acquire.com, we share your business with over 500k entrepreneurs, increasing your chances of meeting the right buyer.\n\nThat said, we recommend involving an attorney if you're unsure of the legal process or want a second opinion on a buyer's offer. Equally, a CPA would help tidy up your financials and value your business. But most things you can do yourself. Ask your acquisition expert for help if you're unsure."
  },
  {
    q: "How does Guided by Acquire work?",
    a: "Guided by Acquire is a more hands-on expert advisory service for profitable SaaS startups making at least $100k in TTM revenue.\n\nUnder the program, you work with an in-house M&A advisor to maximize your exit. For example, we'll optimize your listing, market your business to qualified buyers, pre-qualify you for financing, coach you on negotiations and due diligence, and lots more – for free.\n\nLearn more about Guided by Acquire."
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {faqs.map((item, i) => (
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