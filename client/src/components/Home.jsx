import React from "react";
import Hero from "./Hero";
import ContactUs from "./ContactUs";
import Layout from "./Layout";
import {  ProductPage } from "../pages";


const Home = () => {
  return (
    <div> 
      <Layout>
        <Hero />
        {/* <ProductPage />         */}
        <ContactUs />     
      </Layout>  
    </div>
  );
};

export default Home;
