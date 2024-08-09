import React from "react";
import Navbar from "../Components/Navbar";
import IntroPage from "../Components/IntroPage";
import Cards from "../Components/Cards";
import JobTable from "../Components/JobTable";
import Footer from "../Components/Footer";



function Home() {
    return (
      <>
      <div>
            <Navbar/>
            <IntroPage/>
            <Cards/>
            <JobTable/>          
            <Footer/>
      </div>
      </>
    );
  }

  export default Home;
  