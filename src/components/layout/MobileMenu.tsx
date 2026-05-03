'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-coral"
      >
        <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-3 text-base font-medium border-b border-gray-50 last:border-0 ${
                pathname === href ? 'text-brand-coral' : 'text-brand-charcoal hover:text-brand-coral'
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/estimate"
            onClick={() => setOpen(false)}
            className="mt-3 bg-brand-coral text-white text-center py-3 rounded-full font-semibold hover:bg-[#e55a5a] transition-colors"
          >
            Get Estimate
          </Link>
        </div>
      )}
    </>
  );
}
