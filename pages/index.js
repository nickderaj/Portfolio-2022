import Layout from '../components/Layout/Layout';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import WorkExp from '../components/Sections/WorkExp';
import Contact from '../components/Sections/Contact';
import Hero from '../components/Sections/Hero';

export default function Home() {
  return (
    <Layout title="Nick De Raj">
      <Hero />
      <About />
      <Projects />
      <WorkExp />
      <Contact />
    </Layout>
  );
}
