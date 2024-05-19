import React from "react";
import AppLayout from "../layout/AppLayout";
import Hero from "../components/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <Projects />
    </AppLayout>
  );
};

export default Home;
