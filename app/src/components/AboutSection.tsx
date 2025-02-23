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
        <div className=" grid sm:grid-rows-2 md:grid md:grid-cols-2 bg-gray-100 h-[calc(100vh-4rem)]">
            <div className="grid place-items-center relative w-full h-auto">
                <Image
                    className="object-contain w-48 md:w-1/3 my-auto mx-auto rounded-full md:drop-shadow-2xl" src="/images/sumit-1.png"
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Picture of the author" />
            </div>
            <div className="md:flex md:justify-center md:items-center md:text-5xl text-3xl">
                <div className="flex justify-center items-center md:flex text-yellow-500 md:p-4">I am</div>
                <div className="flex justify-center items-center md:flex-grow md:p-1">
                    <span ref={el} />
                </div>
            </div>
        </div>
    )
};

export default AboutSection;