import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import AboutUsPage from "./pages/AboutUs";
import CareerPage from "./pages/Career";
import CareerDetailPage from "./pages/CareerDetailPage";
import InternsPage from "./pages/Interns";
import InternProfilePage from "./pages/InternProfile";
import ContactPage from "./pages/Contact";
import JoiningForm from "./pages/JoiningForm";
import Team from "./pages/Team";
import NotFound from './pages/NotFound';


function App() {

  return ( 
    <>

  <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUsPage />} />
       <Route path="/team" element={<Team />} />
       <Route path="/services" element={<ServicesPage />} />
       <Route path="/services/:serviceName" element={<ServicePage />} />
       <Route path="/career" element={<CareerPage />} />
       <Route path="/career/:title" element={<CareerDetailPage />} />
       <Route path="/career/apply" element={<JoiningForm />} />
       <Route path="/interns" element={<InternsPage />} />
       <Route path="/interns/:id" element={<InternProfilePage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="*" element={<NotFound /> } />
  </Routes>

    </>
  )
}

export default App;
