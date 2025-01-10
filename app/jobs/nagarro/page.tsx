"use client"
import Header from "../../src/components/Header";
import FooterSection from "../../src/components/Footer";
import React from "react";
import { Counter, CounterOffices } from "@/app/src/components/Counter";


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
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 flex justify-center items-center">
        <Counter endNumber={18000} title="employees" />
        <CounterOffices endNumber={90} title="offices" />
        </div>
      </div>
      <div className="bg-purple-200 h-screen">
        
      </div>

      <FooterSection />
    </div>

  );
}