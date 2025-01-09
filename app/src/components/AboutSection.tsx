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
        <div className="h-[calc(100vh-4rem)] bg-gray-100 md:grid-rows-2 md:grid">
            <div className=" grid sm:grid-rows-2 md:grid md:grid-cols-2 bg-gray-100">
                <div className="grid place-items-center relative w-full overflow-hidden">
                    <Image
                        className="object-contain sm:w-1/3 md:w-1/2 my-auto mx-auto rounded-full md:drop-shadow-2xl" src="/sumit-1.png"
                        width={100}
                        height={100}
                        unoptimized={true}
                        alt="Picture of the author" />
                </div>
                <div className="md:flex md:justify-center md:items-center md:text-5xl text-3xl">
                    <div className="flex justify-center items-center md:flex md:text-yellow-500 md:p-4">I am</div>
                    <div className="flex justify-center items-center md:flex-grow md:p-1">
                        <span ref={el} />
                    </div>
                </div>
               

            </div>
            <div>
                    I’m a Full Stack Developer with 2+ years of experience in Node.js and AWS, building scalable web applications. Passionate about delivering high-quality solutions with a focus on both frontend and backend development.
                </div>
        </div>

    )
};

export default AboutSection;