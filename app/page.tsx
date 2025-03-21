
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services/>
      <Portfolio/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </main>
  )
}

