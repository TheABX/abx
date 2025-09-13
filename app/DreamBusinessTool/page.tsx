'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

// Social proof blurbs for micro-conversions
const SOCIAL_PROOF = [
  'Over 8,500 Aussie buyers have used this to find businesses worth $250K-$5M.',
  'Used by first-time buyers, corporate investors, and 6x entrepreneurs alike.',
  "Most successful buyers in your situation found their first business within 90 days. You're on the right path."
];

// Refactored STEPS: each field is its own step
const STEPS = [
  {
    label: "Let's Personalise This for You",
    question: "What's your first name?",
    fields: [
      { name: 'firstName', label: 'First name', type: 'text', required: true, placeholder: 'Your first name' },
    ],
  },
  {
    label: "Let's Personalise This for You",
    question: "What's your best email so we can send you personalised opportunities? (We'll never spam you. You'll get tailored matches and can opt out anytime.)",
    fields: [
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
    ],
  },
  {
    label: "Let's Personalise This for You",
    question: "What should we call your business search?",
    fields: [
      { name: 'searchName', label: 'What should we call your business search?', type: 'text', required: false, placeholder: 'e.g. My Next Big Move' },
    ],
  },
  {
    label: "Let's Get Started",
    question: "Where did you hear about us?",
    fields: [
      { name: 'motivation', label: 'What brings you here today?', type: 'select-icon', required: true, options: [
        { value: 'ready', label: "I'm ready to buy a business soon", icon: '💼' },
        { value: 'exploring', label: "I'm just exploring what's out there", icon: '🔍' },
        { value: 'research', label: 'Researching for a future purchase', icon: '📚' },
        { value: 'curious', label: "I'm curious about business values & trends", icon: '🧠' },
        { value: 'group', label: 'I represent an investment group or fund', icon: '🏢' },
      ] },
    ],
  },
  {
    label: "Let's Get Started",
    question: "How did you find us?",
    fields: [
      { name: 'discovery', label: 'Just curious – how did you find us?', type: 'select-logo', required: true, options: [
        { value: 'google', label: 'Google' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'referral', label: 'Referral from a friend' },
        { value: 'industry', label: 'Industry site' },
        { value: 'broker', label: 'A broker/advisor' },
        { value: 'other', label: 'Other' },
      ] },
    ],
  },
  // Your Background (split into 3 steps)
  {
    label: "Your Background",
    question: "Have you owned or operated a business before?",
    fields: [
      { name: 'experience', label: 'Have you owned or operated a business before?', type: 'select', required: true, options: [
        'First time', 'Owned 1-2 before', 'Owned 3-5', 'Owned 6+ (Serial Entrepreneur)', 'I currently own a business', 'I invest professionally (e.g. PE or VC)'
      ] },
    ],
  },
  {
    label: "Your Background",
    question: "Which industries have you worked in?",
    fields: [
      { name: 'industriesWorked', label: 'Which industries have you worked in?', type: 'multi-select', required: false, options: [
        'Tech', 'Healthcare', 'Retail', 'Food & Beverage', 'Services', 'Construction', 'Real Estate', 'Finance', 'Marketing', 'Other'
      ] },
    ],
  },
  {
    label: "Your Background",
    question: "What is your professional background?",
    fields: [
      { name: 'professionalBackground', label: "What's your professional background?", type: 'select', required: false, options: [
        'Finance & Accounting', 'Corporate/Exec', 'Marketing & Sales', 'Tech & Engineering', 'Healthcare', 'Legal / Consulting', 'Construction / Real Estate', 'Retail / Hospitality', 'Other'
      ] },
    ],
  },
  // Financial Readiness (split into 3 steps)
  {
    label: "Financial Readiness",
    question: "How much are you looking to invest?",
    fields: [
      { name: 'budget', label: "Roughly, what's your budget for buying a business?", type: 'select', required: true, options: [
        'Under $250k', '$250k-$500k', '$500k-$1M', '$1M-$2M', '$2M-$5M', '$5M+', 'Not sure yet'
      ] },
    ],
  },
  {
    label: "Financial Readiness",
    question: "How do you plan to fund your purchase?",
    fields: [
      { name: 'funding', label: 'How do you plan to fund your purchase?', type: 'multi-select', required: false, options: [
        'Cash', 'Bank loan', 'Equity from home', 'Investors', 'Seller finance', 'Other', 'Not sure yet'
      ] },
    ],
  },
  {
    label: "Financial Readiness",
    question: "Are your finances ready to move quickly if you find the right business?",
    fields: [
      { name: 'financeReady', label: 'Are your finances ready to move quickly if you find the right business?', type: 'select', required: false, options: [
        'Yes, ready to go', 'Need a few weeks', 'Need a few months', 'Not sure yet'
      ] },
    ],
  },
  // Business Preferences (split into 4 steps)
  {
    label: "Business Preferences",
    question: "Which types of businesses are you interested in?",
    fields: [
      { name: 'preferredIndustries', label: 'Industries', type: 'multi-select', required: true, options: [
        'E-commerce', 'Services', 'Wholesale/Trade', 'Manufacturing', 'Healthcare', 'Tech', 'Retail', 'Food & Beverage', 'Other'
      ] },
    ],
  },
  {
    label: "Business Preferences",
    question: "What is your preferred location?",
    fields: [
      { name: 'location', label: 'Preferred location(s)', type: 'text', required: false, placeholder: 'e.g. Sydney, Melbourne, Remote, etc.' },
    ],
  },
  {
    label: "Business Preferences",
    question: "What is your ideal business size (annual revenue)?",
    fields: [
      { name: 'size', label: 'Ideal business size (annual revenue)', type: 'select', required: false, options: [
        'Under $500k', '$500k-$1M', '$1M-$2M', '$2M-$5M', '$5M+', 'No preference'
      ] },
    ],
  },
  {
    label: "Business Preferences",
    question: "How many employees would you prefer?",
    fields: [
      { name: 'employees', label: 'Ideal number of employees', type: 'select', required: false, options: [
        'Solo/Owner-operator', '2-5', '6-20', '21-50', '51+', 'No preference'
      ] },
    ],
  },
  // Vision & Fit (split into 3 steps)
  {
    label: "Vision & Fit",
    question: "What are your main goals for buying a business?",
    fields: [
      { name: 'goals', label: 'What are your main goals for buying a business?', type: 'multi-select', required: false, options: [
        'Financial freedom', 'Lifestyle change', 'Build & grow', 'Passive income', 'Family legacy', 'Community impact', 'Other'
      ] },
    ],
  },
  {
    label: "Vision & Fit",
    question: "Do you have any dealbreakers or must-haves?",
    fields: [
      { name: 'dealbreakers', label: 'Any dealbreakers or must-haves?', type: 'text', required: false, placeholder: 'e.g. Must be remote, no food businesses, etc.' },
    ],
  },
  {
    label: "Vision & Fit",
    question: "When are you hoping to buy?",
    fields: [
      { name: 'timeline', label: 'When are you hoping to buy?', type: 'select', required: false, options: [
        'ASAP', 'Within 3 months', '3-6 months', '6-12 months', 'Just exploring'
      ] },
    ],
  },
  // Your Buying Journey (split into 3 steps)
  {
    label: "Your Buying Journey",
    question: "Which best describes you?",
    fields: [
      { name: 'journeyStage', label: 'Which best describes you?', type: 'select', required: true, options: [
        'Just starting out', 'Actively searching', 'In conversations with sellers', 'Made offers before', 'Ready to buy now'
      ] },
    ],
  },
  {
    label: "Your Buying Journey",
    question: "What's your biggest challenge or question right now?",
    fields: [
      { name: 'biggestChallenge', label: "What's your biggest challenge or question right now?", type: 'text', required: false, placeholder: 'e.g. Finding the right fit, getting finance, etc.' },
    ],
  },
  {
    label: "Your Buying Journey",
    question: "Are you working with any advisors or brokers?",
    fields: [
      { name: 'advisors', label: 'Are you working with any advisors or brokers?', type: 'select', required: false, options: [
        'No', 'Yes, a broker', 'Yes, an accountant', 'Yes, a lawyer', 'Yes, other advisor(s)'
      ] },
    ],
  },
  // Final Touches (split into 2 steps)
  {
    label: "Final Touches",
    question: "Anything else you'd like us to know?",
    fields: [
      { name: 'otherNotes', label: 'Anything else?', type: 'text', required: false, placeholder: 'Share any extra info, preferences, or questions.' },
    ],
  },
  {
    label: "Final Touches",
    question: "Would you like to receive updates with new listings and insights?",
    fields: [
      { name: 'subscribe', label: 'Keep me updated with new listings and insights', type: 'select', required: false, options: [
        'Yes', 'No'
      ] },
    ],
  },
];

export default function DreamBusinessTool() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSave, setShowSave] = useState(false);
  const [socialProofIdx, setSocialProofIdx] = useState(0);

  const currentStep = STEPS[step];

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setError('');
    // Validate required fields
    for (const field of currentStep.fields) {
      if (field.required && !formData[field.name]) {
        setError('Please fill in all required fields.');
        return;
      }
    }
    setStep((s) => s + 1);
    setSocialProofIdx((idx) => (idx + 1) % SOCIAL_PROOF.length);
  };

  const handleBack = () => {
    setError('');
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    try {
      const submissionData = {
        form_data: {
          ...formData,
          submitted_at: new Date().toISOString(),
        },
      };
      const { error: supabaseError } = await supabase
        .from('Potential Buyers')
        .insert([submissionData]);
      if (supabaseError) throw supabaseError;
      // Show a thank you or redirect
      router.push('/');
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Save progress (email required)
  const handleSaveProgress = async () => {
    if (!formData.email) {
      setError('Please enter your email to save progress.');
      return;
    }
    // Save partial data to Supabase
    setIsLoading(true);
    try {
      const partialData = {
        form_data: {
          ...formData,
          partial: true,
          saved_at: new Date().toISOString(),
        },
      };
      await supabase.from('Potential Buyers').insert([partialData]);
      setShowSave(false);
      setError("Progress saved! We'll email you your matches when you return.");
    } catch {
      setError('Failed to save progress.');
    } finally {
      setIsLoading(false);
    }
  };

  // Render field types
  const renderField = (field: any) => {
    if (field.type === 'text' || field.type === 'email') {
      return (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={e => handleChange(field.name, e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg mb-4"
          placeholder={field.placeholder || ''}
          required={field.required}
        />
      );
    }
    if (field.type === 'select-icon') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {field.options.map((opt: any) => (
            <button
              type="button"
              key={opt.value}
              className={`flex items-center gap-3 border-2 rounded-xl p-4 transition-all text-left cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium
                ${formData[field.name] === opt.value ? 'border-blue-700 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400'}`}
              onClick={() => handleChange(field.name, opt.value)}
              aria-pressed={formData[field.name] === opt.value}
            >
              <span className="text-2xl">{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      );
    }
    // Render 'select' as single-select pills
    if (field.type === 'select') {
      return (
        <div className="flex flex-wrap gap-2 mb-4">
          {field.options.map((opt: string) => (
            <button
              type="button"
              key={opt}
              className={`px-4 py-2 rounded-full border-2 text-base font-medium transition-all
                ${formData[field.name] === opt ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
              onClick={() => handleChange(field.name, opt)}
              aria-pressed={formData[field.name] === opt}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }
    if (field.type === 'select-logo') {
      return (
        <select
          name={field.name}
          value={formData[field.name] || ''}
          onChange={e => handleChange(field.name, e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg mb-4"
          required={field.required}
        >
          <option value="">Select an option</option>
          {field.options.map((opt: any) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      );
    }
    if (field.type === 'multi-select') {
      return (
        <div className="flex flex-wrap gap-2 mb-4">
          {field.options.map((opt: string) => (
            <button
              type="button"
              key={opt}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all
                ${Array.isArray(formData[field.name]) && formData[field.name].includes(opt) ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
              onClick={() => {
                const prev = Array.isArray(formData[field.name]) ? formData[field.name] : [];
                if (prev.includes(opt)) {
                  handleChange(field.name, prev.filter((v: string) => v !== opt));
                } else {
                  handleChange(field.name, [...prev, opt]);
                }
              }}
              aria-pressed={Array.isArray(formData[field.name]) && formData[field.name].includes(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with logo and save progress */}
      <header className="flex items-center justify-between px-12 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img src="/THEABX.png" alt="ABX Logo" className="h-16 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-blue-700 underline text-sm font-medium" onClick={() => setShowSave(true)}>
            Save my progress
          </button>
        </div>
      </header>
      {/* Main form area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <form
          className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-16 flex flex-col gap-8"
          onSubmit={e => {
            e.preventDefault();
            if (step < STEPS.length - 1) {
              handleNext();
            } else {
              handleSubmit();
            }
          }}
        >
          <div className="w-full flex items-start mb-1">
            <span className="text-lg font-bold text-black">{currentStep.label}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{currentStep.question}</h2>
          </div>
          <div>
            {currentStep.fields.map((field: any) => (
              <div key={field.name}>{renderField(field)}</div>
            ))}
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
          {/* Progress bar and navigation at the bottom */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center mt-2">
              <button
                type="button"
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50"
                onClick={handleBack}
                disabled={step === 0 || isLoading}
              >
                Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold disabled:opacity-50 flex items-center gap-2"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  Next
                  <span className="text-xl">→</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
            {/* Social proof blurb */}
            <div className="text-center text-gray-500 text-sm mt-4">
              {SOCIAL_PROOF[socialProofIdx]}
            </div>
          </div>
        </form>
        {/* Save progress modal */}
        {showSave && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full flex flex-col gap-4">
              <h3 className="text-lg font-bold mb-2">Save your progress</h3>
              <p className="text-gray-600 mb-2">Enter your email and we'll send you your matches when you return.</p>
              <input
                type="email"
                value={formData.email || ''}
                onChange={e => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg mb-2"
                placeholder="you@example.com"
                required
              />
              <div className="flex gap-2 justify-end">
                <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={() => setShowSave(false)}>Cancel</button>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-lg" onClick={handleSaveProgress} disabled={isLoading}>Save</button>
              </div>
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 