import{BrowserRouter,Routes,Route} from "react-router-dom";
import Footercomponent from "./components/Footercomponent";
import Navbar from "./components/navbar";
import AboutUs from "./pages/About Us";
import Categories from "./pages/Categories";
import Clients from "./pages/Clients";
import ContactUs from "./pages/Contact Us";
import Home from "./pages/Home";
import Services from "./pages/Services";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="Home" element={<Home/>}/>
      <Route path="About Us" element={<AboutUs/>}/>
      <Route path="Categories" element={<Categories/>}/>
      <Route path="Clients" element={<Clients/>}/>
      <Route path="Services" element={<Services/>}/>
      <Route path="Contact Us" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    <Footercomponent/>
    </>
  )
}