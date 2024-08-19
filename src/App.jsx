import Notification from "./components/Notification";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker"
import Pricing from "./components/Pricing";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Notification />
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase /> 
      <Pricing />
      <Testimonials />
    </main>
  )
}

export default App