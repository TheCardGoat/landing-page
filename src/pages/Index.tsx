import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Features from '@/components/Features';
import Community from '@/components/Community';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300">
      <Hero />
      <WhoWeAre />
      <Features />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
