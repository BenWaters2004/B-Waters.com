import { About, Contact, Hero, Navbar, StarsCanvas, Footer, Reviews, ProjectsSection, Tech } from "../components";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <ProjectsSection />
      <Tech />
      <Reviews />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </div>
  )
}

