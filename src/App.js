import Courses from "./sections/Courses";
import Footer from "./sections/Footer";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Courses />
      <Pricing />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
