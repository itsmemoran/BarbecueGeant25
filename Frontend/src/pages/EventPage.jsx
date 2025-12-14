import Navbar from '../Components/navbar'
import APropos from '../Components/APropos' 
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'
import MapSection from '../Components/MapSection'


export default function EventPage() {
  return (
    <>
     <Navbar />
     <Hero/>
     <APropos/>
     <MapSection/>
     <ScrollToTop/>
     <Footer/>
    </>
  )
}
