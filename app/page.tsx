import Header from "../components/Header";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
