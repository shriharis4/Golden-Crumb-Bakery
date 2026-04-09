import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import CakeGrid from '../components/CakeGrid';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <CakeGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;