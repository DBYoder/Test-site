import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';
import PaintSplash from '@/components/ui/PaintSplash';

export const metadata: Metadata = {
  title: 'Contact Yoder\'s Painting | Request a Quote',
  description:
    "Get in touch to schedule a free on-site estimate. Serving Harrisonburg, VA and surrounding areas of the Shenandoah Valley.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <PaintSplash color="#FFD166" className="absolute top-0 right-0 w-64 h-64 opacity-15 translate-x-10 -translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
            <p className="text-brand-slate mb-8">Fill out the form and we&apos;ll respond within one business day.</p>
            <ContactForm />
          </div>

          {/* Contact info */}
          <aside className="md:col-span-2">
            <div className="bg-brand-offwhite rounded-2xl p-8 flex flex-col gap-7">
              <div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-4">Contact Info</h3>
                <address className="not-italic flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-coral/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-brand-coral">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-slate uppercase tracking-wide font-semibold mb-0.5">Phone</p>
                      <a href="tel:+15405550100" className="text-brand-charcoal hover:text-brand-coral transition-colors font-medium">
                        (540) 555-0100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-teal/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-brand-teal">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-slate uppercase tracking-wide font-semibold mb-0.5">Email</p>
                      <a href="mailto:info@yoderspainting.com" className="text-brand-charcoal hover:text-brand-teal transition-colors font-medium break-all">
                        info@yoderspainting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-yellow/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-brand-dark">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-brand-slate uppercase tracking-wide font-semibold mb-0.5">Location</p>
                      <p className="text-brand-charcoal font-medium">Harrisonburg, VA 22801</p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-3">Business Hours</h3>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-slate">Mon – Fri</span>
                    <span className="text-brand-charcoal font-medium">7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-slate">Saturday</span>
                    <span className="text-brand-charcoal font-medium">8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-slate">Sunday</span>
                    <span className="text-brand-charcoal font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-3">Service Area</h3>
                <p className="text-brand-slate text-sm">Harrisonburg · Staunton · Waynesboro · Rockingham County · Augusta County and surrounding Shenandoah Valley communities.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
