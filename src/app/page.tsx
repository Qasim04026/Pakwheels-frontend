"use client";
import React, { useState } from 'react';
import Banner from "./banner/header";
import HeroSection from "./heroSection/page";
import Feactured from "./Features/page";
import Booking from "./Order/page";
import ThankYou from "./ThankYou/page";

const Home: React.FC = () => {
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  return (
    <div>
      <Banner />
      <HeroSection />
      <Feactured />
      {!orderPlaced ? (
        <Booking setOrderPlaced={setOrderPlaced} />
      ) : (
        <ThankYou />
      )}
    </div>
  );
};

export default Home;
