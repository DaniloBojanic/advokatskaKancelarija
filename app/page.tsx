import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { PracticeAreas } from "@/components/sections/practice-areas"
import { Compensation } from "@/components/sections/compensation"
import { SportsLaw } from "@/components/sections/sports-law"
import { News } from "@/components/sections/news"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Compensation />
        <SportsLaw />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
