"use client"
import Header from "../../src/components/Header";
import FooterSection from "../../src/components/Footer";
import React from "react";
import { Counter, CounterOffices } from "@/app/src/components/Counter";
// import Lottie from '@lottielab/lottie-player/react';
import Image from "next/image";


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
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 grid grid-rows-2">
          <div className="h-auto w-auto md:flex md:justify-center md:items-center">
            {/* <Lottie src="https://cdn.lottielab.com/l/E2VvddPkQLZ9di.json" autoplay /> */}
            <Image
              src="/images/nagarro-logo.png"
              width={974}
              height={256}
              alt="nagarro company logo"
              className="h-24 w-auto" />
          </div>
          <div className="grid grid-rows-3 place-items-center md:flex md:justify-center md:items-center md:text-xl">
            <Counter endNumber={18000} title="employees" />
            <CounterOffices endNumber={90} title="offices" />
            <CounterOffices endNumber={37} title="countries" />
          </div>
        </div>

      </div>
      <div className="grid grid-rows-1 bg-[#eff1f4] h-auto">
        <div className="p-10">
        <div className='text-3xl font-semibold py-5 text-[#47d7ac]'>Employement History</div>
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-black-900 dark:text-[#333333]">Java Trainee</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022 - Jun 2022</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Worked on Java, SpringBoot, Angular and Node under the mentorship of <a href="https://www.linkedin.com/in/umesh-kumar-82388991/" className="hover:text-[#47d7ac]">Umesh Kumar</a></p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-black-900 dark:text-[#333333]">Associate Engineer</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2022 - Jul 2023</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Worked on a client project specifically on backend technologies with AWS under the guidance of <a href="https://www.linkedin.com/in/shailendramishra0202/" className="hover:text-[#47d7ac]">Shailendra Mishra</a> </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-black-900 dark:text-[#333333]">Engineer</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2023 - Oct 2024</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Continued working with the same client.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <FooterSection />
    </div>

  );
}