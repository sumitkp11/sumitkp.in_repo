'use client'
import React from 'react';


function CareerSection() {

    return (
        <div className='bg-slate-800'>
            <div className='text-3xl font-semibold py-5 px-5 dark:text-white'>Timeline</div>
            <div className='px-10 py-5 '>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - March 2025</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Engineer @ Nagarro Software Pvt. Ltd.</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Worked at Nagarro for 3 years, gaining experience in both backend and frontend web technologies, contributing to various projects and delivering scalable solutions.</p>
                        <a href="/jobs/nagarro" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2019 - June 2022</time>
                        <h3 className="text-lg font-semibold text-black-900 dark:text-white">Graduated with Masters in Computer Applications</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">CGPA: 8.9 / 10 | Guru Gobind Singh Indraprastha University, Delhi, IN</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2015 - June 2018</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graduated with Bachelor in Computer Applications</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">CGPA: 8.19 / 10 | Sharda University, UP, IN</p>
                    </li>
                </ol>

            </div>

        </div>





    )
}

export default CareerSection;