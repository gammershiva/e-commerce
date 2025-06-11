import Banner from "./pages/Banner";
import Category from "./pages/Category";
import Category2 from "./pages/Category2";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import headphone from "./assets/catogory img/headphone.png"
import watch from "./assets/catogory img/swatch.png"
import Banner2 from "./pages/Banner2";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Sponcer from "./Sponcer/Sponcer";
import Footer from "./pages/footer/Footer";


const Bannerdata = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 jan to 28 jan",
  image: headphone,
  title2: "Air solo bass",
  title3: "Winter sale",
  title: "Circuit board,soldering,using a multimeter or oscilloscope",
  className: "bg-red-500"


}
const Bannerdata2 = {
  discount: "40% OFF",
  title: "Fine Smile",
  date: "10 jan to 28 jan",
  image: watch,
  title2: "Smart Watch",
  title3: "Winter sale",
  title: "Circuit board,soldering,using a multimeter or oscilloscope",
  className: "bg-green-500"


}

let App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={Bannerdata} />
      <Products />
      <Banner2 data={Bannerdata2} />
      <Blog />
      <Sponcer />
      <Footer/>
    </>
  )
}


export default App;