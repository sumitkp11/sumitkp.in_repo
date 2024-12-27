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
        <div className="relative h-dvh bg-slate-600 columns-2 border-2 border-rose-500">
            <div className="w-100 flex flex-col border-2 border-rose-500">
                <div className='font-sans text-lg font-bold text-white'>I am <span ref={el}/></div>
                <div>Description</div>
            </div>
            <div className="w-100  border-2 border-rose-500">Photo Here</div>
        </div>
    )
};

export default AboutSection;