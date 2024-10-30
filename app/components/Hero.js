"use client"
import React,{useRef,useEffect} from 'react'
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Coding', 'web development', 'software engineering', 'data science', 'machine learning', 'cloud computing', 'business', 'Artificial intelligence', 'Cybersecurity', 'blockchain', 'Internet of Things', 'Big data', 'Virtual reality', 'Augmented reality'],
            typeSpeed: 50,
        });
    
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    
    return (
        <div className="relative">
            <section className="h-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
                <video className="relative top-0 left-0 w-full h-auto lg:h-screen object-cover" autoPlay loop muted>
                    <source src="/coffee.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:text-left lg:w-1/2 lg:-mt-8 z-10">
                    <h1 className="text-sm leading-snug md:text-4xl">
                        Welcome to <span className="font-semibold">DuttaBlog, A Blogging Hub</span>! <br className="hidden lg:block" /> Dive into a world of <div className="underline font-semibold decoration-primary"><span ref={el} /></div>
                    </h1>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                        Discover engaging articles, share your thoughts, and connect with fellow readers. <br className="hidden lg:block" /> Join us in creating a vibrant community of bloggers and enthusiasts!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Hero