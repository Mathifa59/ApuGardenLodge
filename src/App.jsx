import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Emotional from './components/Emotional';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Emotional />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
