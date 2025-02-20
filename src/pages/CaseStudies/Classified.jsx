import { Navbar, Footer, Contact, StarsCanvas, ClassifiedCont } from "../../components";

export default function Classified() {
  return (
    <section className="relative z-0 bg-primary">
      <Navbar />
      <ClassifiedCont />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer/>
      </div>
    </section>
  )
}