'use client'
import Typed from 'typed.js';
import React from 'react';

function AboutSection() {
    // create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    const elMobile = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Developer', 'Coder', 'Full-stack Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        const typedMobile = new Typed(elMobile.current, {
            strings: ['Developer', 'Coder', 'Full-stack Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
            typedMobile.destroy
        };
    }, []);
    return (
        <div>
            <div className="relative h-screen bg-gray-100 md:columns-2 md:flex-col flex-row">
                <div className="md:order-1 order-last w-100 pt-8 md:h-full md:flex flex-col justify-center items-center">
                    <img className="w-1/2 md:w-100% mx-auto rounded-full md:drop-shadow-2xl" src="./sumit-1.png" />

                </div>
                <div className="mt-10 md:w-100 md:h-full flex justify-center items-center">
                    <div className="invisible md:visible font-sans md:text-7xl">
                        I am <span ref={el} />
                    </div>
                    <div className="visible md:invisible font-sans text-5xl">
                        I am
                    </div>
                    
                </div>
                <div className='visble md:invisible flex justify-center items-center text-4xl'>
                        <span ref={elMobile} />
                    </div>

            </div>
        </div>
    )
};

export default AboutSection;