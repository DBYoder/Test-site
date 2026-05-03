'use client';

import { useState } from 'react';
import Button from './Button';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  contact_pref: 'phone' | 'email';
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  contact_pref: 'email',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please call us directly or try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-teal/10 border border-brand-teal rounded-2xl p-8 text-center">
        <span className="text-4xl block mb-4">🎨</span>
        <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">Message Received!</h3>
        <p className="text-brand-slate">We&apos;ll be in touch within one business day. Talk soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-brand-charcoal">Full Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Smith"
            className="border border-gray-200 rounded-xl px-4 py-3 text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@example.com"
            className="border border-gray-200 rounded-xl px-4 py-3 text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-brand-charcoal">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="(540) 555-0000"
          className="border border-gray-200 rounded-xl px-4 py-3 text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-brand-charcoal">Tell Us About Your Project *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="I need my living room and two bedrooms painted..."
          className="border border-gray-200 rounded-xl px-4 py-3 text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none"
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-brand-charcoal">Preferred Contact Method</legend>
        <div className="flex gap-6">
          {(['email', 'phone'] as const).map((pref) => (
            <label key={pref} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contact_pref"
                value={pref}
                checked={form.contact_pref === pref}
                onChange={() => update('contact_pref', pref)}
                className="accent-brand-teal"
              />
              <span className="text-sm text-brand-charcoal capitalize">{pref}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
      )}

      <Button type="submit" variant="secondary" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
