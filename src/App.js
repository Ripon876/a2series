import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CareerPage from "./pages/Career";
import CareerDetailPage from "./pages/CareerDetailPage";



function App() {

  return ( 
    <>

  <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/career" element={<CareerPage />} />
       <Route path="/career/:title" element={<CareerDetailPage />} />
  </Routes>

    </>
  )
}

export default App;
