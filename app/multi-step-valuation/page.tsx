'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

// Add icons for each industry (using emoji for simplicity, can be replaced with SVGs)
const INDUSTRY_OPTIONS = [
  { name: 'E-commerce', icon: '🛒' },
  { name: 'Trade Business', icon: '🔧' },
  { name: 'SaaS', icon: '💻' },
  { name: 'Marketplace', icon: '🏪' },
  { name: 'Agency', icon: '👥' },
  { name: 'Technology', icon: '🧑‍💻' },
  { name: 'Retail', icon: '🏬' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Food & Beverage', icon: '🍔' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Finance', icon: '💰' },
  { name: 'Other', icon: '❓' },
];

const INDUSTRIES = INDUSTRY_OPTIONS.map(opt => opt.name);

const ECOM_OPTIONAL_FIELDS = [
  { name: 'cac', label: 'Customer Acquisition Cost (CAC)', type: 'number', optional: true },
  { name: 'ltv', label: 'Customer Lifetime Value (LTV)', type: 'number', optional: true },
  { name: 'aov', label: 'Average Order Value (AOV)', type: 'number', optional: true },
  { name: 'inventory', label: 'Inventory Value', type: 'number', optional: true },
  { name: 'fulfillment', label: 'Fulfillment Method', type: 'text', optional: true },
];

const BASE_STEPS = [
  { name: 'email', label: "What's your email?", description: "We'll send you a valuation report that includes your estimated range and the data we used to calculate it", type: 'email', required: true, placeholder: 'Email address' },
  { name: 'name', label: "What's your name?", description: '', type: 'text', required: true, placeholder: 'Full name' },
  { name: 'phone', label: "What's your phone number?", description: '', type: 'text', required: false, placeholder: 'Phone number' },
  { name: 'industry', label: 'What type of business do you have?', description: '', type: 'select', options: INDUSTRIES, required: true },
  { name: 'subCategory', label: 'What is your business sub-category?', description: '', type: 'text', required: false, placeholder: 'Sub-category (optional)' },
  { name: 'businessName', label: "What's your business name?", description: '', type: 'text', required: true, placeholder: 'Business name' },
  { name: 'website', label: "What's your business website?", description: '', type: 'text', required: false, placeholder: 'Website URL' },
  { name: 'country', label: "Where is your business located?", description: '', type: 'text', required: true, placeholder: 'Country' },
  { name: 'yearsInOperation', label: 'How many years has your business been operating?', description: '', type: 'number', required: false, placeholder: 'Years in operation' },
  { name: 'revenue', label: 'Revenue (last 12 months)', description: '', type: 'number', required: true, placeholder: 'e.g. 500000' },
  { name: 'profit', label: 'Net Profit (last 12 months)', description: '', type: 'number', required: true, placeholder: 'e.g. 100000' },
  { name: 'reason', label: 'Why are you looking for a valuation?', description: '', type: 'select', options: [
    'I want to test the market',
    "I'm buying a business",
    'I want to sell now',
    'I want to sell eventually',
    'Just curious',
  ], required: true },
];

// Types for form fields
interface BaseField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  optional?: boolean;
  description?: string;
  placeholder?: string;
}

type FormDataType = Record<string, string | number | undefined>;

function getStepsForIndustry(industry: string | undefined): BaseField[] {
  if (industry === 'E-commerce') {
    return [...BASE_STEPS, ...ECOM_OPTIONAL_FIELDS];
  }
  // Add more industry-specific fields here if needed
  return BASE_STEPS;
}

export default function MultiStepValuationForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const steps = getStepsForIndustry(formData.industry as string | undefined);
  const currentField = steps[step];

  const formContainerClass = `w-full ${currentField.name === 'industry' ? 'max-w-5xl' : 'max-w-2xl'} mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-16 flex flex-col gap-8`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setError('');
    if (currentField.required && !formData[currentField.name]) {
      setError('This field is required.');
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError('');
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Prepare submission data for Supabase and API
      const submissionData = {
        form_data: {
          ...formData,
          submitted_at: new Date().toISOString(),
        },
      };
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('valuations')
        .insert([submissionData]);
      if (supabaseError) throw supabaseError;

      // Call API route to get valuation result (like original form)
      const res = await fetch('/valuation/api', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          submitted_at: new Date().toISOString(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const apiData = await res.json();
      // Save report data to localStorage and redirect
      localStorage.setItem('valuationResult', JSON.stringify(apiData));
      setIsLoading(false);
      // Redirect to valuation backend page
      window.location.href = '/valuation-backend';
    } catch (err) {
      setError('Submission failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with logo and exit */}
      <header className="flex items-center justify-between px-12 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img src="/THEABX.png" alt="ABX Logo" className="h-16 w-auto" />
        </div>
        <button className="text-gray-500 font-medium hover:text-gray-700 text-base" onClick={() => router.push('/')}>Exit</button>
      </header>
      {/* Main form area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <form
          className={formContainerClass}
          onSubmit={e => {
            e.preventDefault();
            if (step < steps.length - 1) {
              handleNext();
            } else {
              handleSubmit();
            }
          }}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{currentField.label}</h2>
            {currentField.description && (
              <p className="text-base text-gray-600 mb-2">{currentField.description}</p>
            )}
          </div>
          <div>
            {currentField.name === 'industry' ? (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mb-8">
                  {INDUSTRY_OPTIONS.map(opt => (
                    <button
                      type="button"
                      key={opt.name}
                      className={`flex flex-col items-center justify-center border-2 rounded-xl p-6 transition-all text-center cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium gap-2
                        ${formData.industry === opt.name ? 'border-blue-700 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400'}`}
                      onClick={() => setFormData({ ...formData, industry: opt.name })}
                      aria-pressed={formData.industry === opt.name}
                      tabIndex={0}
                    >
                      <span className="text-3xl mb-2">{opt.icon}</span>
                      {opt.name}
                    </button>
                  ))}
                </div>
                {/* Fallback select for accessibility and form submission */}
                <select
                  name={currentField.name}
                  value={formData[currentField.name] || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg hidden"
                  required={currentField.required}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">Select an option</option>
                  {currentField.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ) : currentField.type === 'select' ? (
              <select
                name={currentField.name}
                value={formData[currentField.name] || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                required={currentField.required}
              >
                <option value="">Select an option</option>
                {currentField.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={currentField.type}
                name={currentField.name}
                value={formData[currentField.name] || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                placeholder={currentField.placeholder || (currentField.optional ? '(Optional)' : '')}
                required={currentField.required}
                autoFocus
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (step < steps.length - 1) {
                      handleNext();
                    } else {
                      handleSubmit();
                    }
                  }
                }}
              />
            )}
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
          {/* Progress bar and navigation at the bottom */}
          <div className="flex flex-col gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button
                type="button"
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50"
                onClick={handleBack}
                disabled={step === 0 || isLoading}
              >
                Back
              </button>
              {step < steps.length - 1 ? (
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
          </div>
        </form>
      </main>
    </div>
  );
} 