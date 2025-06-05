import Banner from "./pages/Banner";
import Category from "./pages/Category";
import Category2 from "./pages/Category2";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import headphone from "./assets/catogory img/headphone.png"


const Bannerdata={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 jan to 28 jan",
  image: headphone,
  title2:"Air solo bass",
  title3:"Winter sale",
  title:"Circuit board,soldering,using a multimeter or oscilloscope",
  className:"bg-red-500"
  

}

let App =()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={Bannerdata}/>
    </>
  )
}


export default App;