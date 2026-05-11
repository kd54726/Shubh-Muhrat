import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import SignatureExperiences from './components/SignatureExperiences';
import RealWeddingStories from './components/RealWeddingStories';
import DestinationShowcase from './components/DestinationShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <SignatureExperiences />
        <RealWeddingStories />
        <DestinationShowcase />
        <WhyChooseUs />
        <Testimonials />
        <InstagramFeed />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
