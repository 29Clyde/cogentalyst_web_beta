import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/ProblemSolution';
import ModelShowcase from '@/components/ModelShowcase';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ModelShowcase />
        <About />
      </main>
      <Footer />
    </>
  );
}