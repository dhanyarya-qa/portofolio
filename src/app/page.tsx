import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import KeyboardNav from "@/components/KeyboardNav";
import ToastContainer from "@/components/ToastContainer";
import FloatingCTA from "@/components/FloatingCTA";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WhyHireMe from "@/components/WhyHireMe";
import BugWarStories from "@/components/BugWarStories";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      {/* Overlays */}
      <LoadingScreen />
      <ScrollProgressBar />
      <KeyboardNav />
      <ToastContainer />
      <FloatingCTA />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <TechMarquee />
      <About />
      <ImpactMetrics />
      <Skills />
      <TechMarquee />
      <Experience />
      <WhyHireMe />
      <BugWarStories />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  );
}
