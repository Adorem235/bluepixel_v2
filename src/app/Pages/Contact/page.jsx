// src/app/Pages/Contact/page.jsx
'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_ccvwjtg';
  const TEMPLATE_ID = 'template_l109wer';
  const PUBLIC_KEY = 'yyX46MjCxtDfTUPHi';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name.trim()) {
      return setError('Name is required.');
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      return setError('Please provide at least an email or phone number.');
    }

    setLoading(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSuccess("Thanks! We'll be in touch shortly.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Let us know what you’re looking for. We’d love to help bring your ideas to life.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}

        <div>
          <label className="block text-sm font-medium">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded"
            placeholder="+263 77 123 4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Brief Description</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded"
            placeholder="Tell us a bit about what you need..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
