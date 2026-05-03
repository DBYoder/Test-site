'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin/rates');
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? 'Invalid credentials');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-brand-charcoal">
          Admin Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border border-gray-200 rounded-xl px-4 py-3 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-dark text-white font-semibold py-3 rounded-xl hover:bg-[#2a2a45] disabled:opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2"
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  );
}
