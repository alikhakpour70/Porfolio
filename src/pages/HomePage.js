import Home from "../components/home/home";
import React, { Suspense } from "react";
import Layout from "../components/layout/Layout";


const HomePage = () => {
  return (
    <Layout>
        <Home />
    </Layout>
  );
};

export default HomePage;
