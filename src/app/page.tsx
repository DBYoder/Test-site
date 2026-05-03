import HeroSection from '@/components/home/HeroSection';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import WhyUs from '@/components/home/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSnapshot />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
