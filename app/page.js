import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Careers />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}
