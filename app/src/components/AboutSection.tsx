'use client'
import Typed from 'typed.js';
import React from 'react';

function AboutSection() {
    // create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Developer', 'Coder', 'ML Enthusiast'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <div className="relative h-screen bg-gray-100 md:columns-2 md:flex-col flex-row">
                <div className="md:order-1 order-last w-100 pt-8 md:h-full md:flex flex-col justify-center items-center">
                    <img className="w-1/2 md:w-100% mx-auto rounded-full md:drop-shadow-2xl" src="./sumit-1.png" />

                </div>
                <div className="md:order-last order-1 md:w-100 md:h-full md:flex md:justify-center md:items-center">
                    <div className="font-sans md:text-7xl">
                        I am <span ref={el} />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default AboutSection;