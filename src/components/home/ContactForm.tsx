import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    help: '',
    consent1: false,
    consent2: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="bg-[#1A1A1A] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                {t('contact.form.company')}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Help */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              {t('contact.form.help')}
            </label>
            <textarea
              value={formData.help}
              onChange={(e) => setFormData({ ...formData, help: e.target.value })}
              className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-blue-500 outline-none transition-colors min-h-[100px]"
              required
            />
          </div>

          {/* Privacy Notice */}
          <div className="space-y-6 text-sm text-gray-400">
            <p>
              {t('contact.form.privacy.info')}{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                {t('contact.form.privacy.policy')}
              </a>
            </p>

            {/* Consent Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent1}
                  onChange={(e) => setFormData({ ...formData, consent1: e.target.checked })}
                  className="mt-1"
                  required
                />
                <span>
                  {t('contact.form.privacy.consent1')}{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    {t('contact.form.privacy.policy')}
                  </a>
                </span>
              </label>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent2}
                  onChange={(e) => setFormData({ ...formData, consent2: e.target.checked })}
                  className="mt-1"
                  required
                />
                <span>{t('contact.form.privacy.consent2')}</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}