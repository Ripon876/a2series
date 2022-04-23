import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import CareerPage from "./pages/Career";
import CareerDetailPage from "./pages/CareerDetailPage";
import JoiningForm from "./pages/JoiningForm";



function App() {

  return ( 
    <>

  <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<CareerPage />} />
       <Route path="/services" element={<ServicesPage />} />
       <Route path="/career" element={<CareerPage />} />
       <Route path="/career/:title" element={<CareerDetailPage />} />
       <Route path="/career/apply" element={<JoiningForm />} />
  </Routes>

    </>
  )
}

export default App;
