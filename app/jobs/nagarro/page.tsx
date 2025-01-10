"use client"
import Header from "../../src/components/Header";
import FooterSection from "../../src/components/Footer";
import React from "react";
import { Counter, CounterOffices } from "@/app/src/components/Counter";
import Lottie from '@lottielab/lottie-player/react';


export default function NagarroPage() {
  return (
    <div>
      <Header />
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        <video autoPlay muted loop className="hidden md:block w-full h-auto">
          <source
            src="/videos/nagarro-web-bg.webm"
          />
        </video>
        <video autoPlay muted loop className="md:hidden w-full h-auto">
          <source
            src="/videos/nagarro-mobile-bg.webm" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 grid grid-rows-3 place-items-center md:flex md:justify-center md:items-center">
        <Counter endNumber={18000} title="employees" />
        <CounterOffices endNumber={90} title="offices" />
        <CounterOffices endNumber={37} title="countries" />
        </div>
      </div>
      <div className="bg-purple-200 h-24 w-auto">
      {/* <Lottie src="https://cdn.lottielab.com/l/E2VvddPkQLZ9di.json" autoplay /> */}
        
      </div>

      <FooterSection />
    </div>

  );
}