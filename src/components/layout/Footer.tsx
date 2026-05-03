import Link from 'next/link';
import PaintSplash from '@/components/ui/PaintSplash';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <PaintSplash color="#FF6B6B" className="absolute -top-8 -left-8 w-32 h-32 opacity-10" />
      <PaintSplash color="#2EC4B6" className="absolute bottom-0 right-0 w-24 h-24 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-coral rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg">
              Yoder&apos;s <span className="text-brand-coral">Painting</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Transforming homes and businesses in Harrisonburg and the Shenandoah Valley with precision, care, and lasting color.
          </p>
          <p className="text-white/40 text-xs">Licensed & Insured in Virginia</p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-white/90 uppercase tracking-wide text-xs mb-1">Quick Links</h3>
          {[
            { href: '/', label: 'Home' },
            { href: '/services', label: 'Services' },
            { href: '/about', label: 'About Us' },
            { href: '/estimate', label: 'Get an Estimate' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-white/60 hover:text-brand-coral text-sm transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <address className="not-italic flex flex-col gap-3">
          <h3 className="font-semibold text-white/90 uppercase tracking-wide text-xs mb-1">Contact</h3>
          <a href="tel:+15405550100" className="text-white/60 hover:text-brand-coral text-sm transition-colors">
            (540) 555-0100
          </a>
          <a href="mailto:info@yoderspainting.com" className="text-white/60 hover:text-brand-coral text-sm transition-colors">
            info@yoderspainting.com
          </a>
          <p className="text-white/60 text-sm">Harrisonburg, VA 22801</p>
          <div className="text-white/40 text-xs mt-2 space-y-0.5">
            <p>Mon–Fri: 7:00 AM – 6:00 PM</p>
            <p>Saturday: 8:00 AM – 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} Yoder&apos;s Painting. All rights reserved.
      </div>
    </footer>
  );
}
