import Image from "next/image";
import HeaderSection from "./components/header";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection"; 
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
      <div className="container mt-24 mx-auto px-13 py-4">
        <HeaderSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
