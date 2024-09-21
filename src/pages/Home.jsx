import { About, Contact, Hero, Navbar, Works, StarsCanvas, Footer, Feedbacks} from "../components";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <ProjectsSection />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
      
    </div>
  )
}


