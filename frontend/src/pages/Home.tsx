import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Banner1 from "../components/Banner1"
import Services from "../components/Services";
import PopularVenues from "../components/PopularVenues";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero/>
      <Section1/>
      <Banner1/>
      <Services/>
      <PopularVenues/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
