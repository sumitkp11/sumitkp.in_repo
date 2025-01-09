'use client'
import Typed from 'typed.js';
import React from 'react';
import Image from 'next/image';

function AboutSection() {
   // create reference to store the DOM element containing the animation
           const el = React.useRef(null);
               React.useEffect(() => {
                   const typed = new Typed(el.current, {
                       strings: ['Developer', 'Coder', 'Full-stack Developer', 'Content Creator', 'Blogger', 'Author'],
                       typeSpeed: 105,
                       backSpeed: 110,
                       loop: true
                   });
           
                   return () => {
                       typed.destroy();
                   };
               }, []);
   
       return (
           <div className="h-[calc(100vh-4rem)] grid grid-cols-2 bg-gray-100">
               <div className="md:grid md:place-items-center">
               <Image
                className="md:border-5 md:border-black w-1/2 md:w-100 my-auto mx-auto rounded-full md:drop-shadow-2xl" src="./sumit-1.png"
                alt="Picture of the author" />
               </div>
               <div className="flex justify-center items-center text-5xl">
                   <div className="flex b-yellow-500 p-4">I am</div>
                   <div className="flex-grow p-1">
                   <span ref={el} />
                   </div>
   
               </div>
           </div>
       )
};

export default AboutSection;