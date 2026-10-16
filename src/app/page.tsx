import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Journey from "@/components/portfolio/Journey";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function HomePage() {
  return <main className="site-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Navbar/><Hero/><About/><Skills/><Journey/><Projects/><Contact/><Footer/></main>;
}
