import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Pillars } from "../components/Pillars";
import { Footer } from "../components/Footer";
import { CaseStudies } from "../components/CaseStudies";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Pricing } from "../components/Pricing";
import { Partners } from "../components/Partners";
import { IndustriesSlider } from "../components/IndustriesSlider";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Pillars />
      <IndustriesSlider />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}