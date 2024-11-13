import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  jobTitle: string;
  product: {
    langSmith: boolean;
    langGraph: boolean;
  };
  companySize: string;
  region: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    product: {
      langSmith: false,
      langGraph: false,
    },
    companySize: '',
    region: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-950">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Talk to our team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              LangChain provides a suite of products to help teams build AI applications. 
              This includes LangSmith — our platform for prompt engineering, evaluation, 
              and observability of LLM apps — and LangGraph Platform for building and 
              deploying AI agents at scale.
            </p>
            <p className="text-xl text-gray-300">
              Get in touch. Our team will answer your questions and follow up with a 
              product demo to help you drive results.
            </p>

            {/* Logos */}
            <div className="pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <img 
                  src="https://www.elastic.co/static-res/images/elastic-logo-dark.svg" 
                  alt="Elastic" 
                  className="h-8 opacity-70"
                />
                <img 
                  src="https://www.ncl.com/sites/default/files/NCL_Logo_White.png" 
                  alt="Norwegian" 
                  className="h-8 opacity-70"
                />
                <img 
                  src="https://logos-world.net/wp-content/uploads/2021/03/Moodys-Logo.png" 
                  alt="Moody's" 
                  className="h-8 opacity-70"
                />
                <img 
                  src="https://global.rakuten.com/corp/assets/img/common/logo/rakuten_white.svg" 
                  alt="Rakuten" 
                  className="h-8 opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ACME"
                  required
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="john.doe@acme.com"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">* personal emails will not be accepted.</p>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="i.e. Software engineer"
                  required
                />
              </div>

              {/* Products */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Which of our products are you interested in?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.product.langSmith}
                      onChange={(e) => setFormData({
                        ...formData,
                        product: { ...formData.product, langSmith: e.target.checked }
                      })}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">LangSmith</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.product.langGraph}
                      onChange={(e) => setFormData({
                        ...formData,
                        product: { ...formData.product, langGraph: e.target.checked }
                      })}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">LangGraph Platform</span>
                  </label>
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Company Size
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {['1-20', '21-100', '101-500', '501-2k', '2k+'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({ ...formData, companySize: size })}
                      className={`px-4 py-2 rounded-full border ${
                        formData.companySize === size
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'border-gray-300 text-gray-700 hover:border-emerald-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Global Headquarters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Company Global Headquarters
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                  {[
                    'NA - West Coast',
                    'NA - Central',
                    'NA - East Coast',
                    'APAC',
                    'EMEA',
                    'LATAM'
                  ].map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setFormData({ ...formData, region })}
                      className={`px-4 py-2 rounded-full border ${
                        formData.region === region
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'border-gray-300 text-gray-700 hover:border-emerald-500'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
              >
                <span>Submit</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}