import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import AboutUsPage from "./pages/AboutUs";
import CareerPage from "./pages/Career";
import CareerDetailPage from "./pages/CareerDetailPage";
import InternsPage from "./pages/Interns";
import InternProfilePage from "./pages/InternProfile";
import ContactPage from "./pages/Contact";
import JoiningForm from "./pages/JoiningForm";
import Team from "./pages/Team";


function App() {

  return ( 
    <>

  <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUsPage />} />
       <Route path="/team" element={<Team />} />
       <Route path="/services" element={<ServicesPage />} />
       <Route path="/career" element={<CareerPage />} />
       <Route path="/career/:title" element={<CareerDetailPage />} />
       <Route path="/career/apply" element={<JoiningForm />} />
       <Route path="/interns" element={<InternsPage />} />
       <Route path="/interns/:id" element={<InternProfilePage />} />
       <Route path="/contact" element={<ContactPage />} />
  </Routes>

    </>
  )
}

export default App;
