"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
                    <div className='mb-3'></div>
                    <TypeAnimation
                        sequence={[
                            'Ahsaas',
                            1000, 
                            'Web Developer',
                            1000,
                            'Software Dev',
                            1000,
                            'UI/UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] sm:text-lg text-base lg:text-xl mb-6'>
                    Ready to build something exciting? Let's make it happen together!
                </p>
                <div>
                    <a href="mailto:dev.ahsaas@gmail.com">
                        <button className='mt-3 px-6 py-3 w-full sm:w-fit font-semibold rounded-full mr-4 bg-gradient-to-br from from-blue-100 via-violet-600 to-lime-100
                                           text-smokewhite animate-bounce lg:active:rotate-12'>
                                            Hire Me
                        </button>
                    </a>

                    <a href="/pdf/CV_Ahsaas.pdf" download="Resume_Ahsaas.pdf">
                        <button className="mt-6 mb-6 w-full sm:w-fit bg-gradient-to-r from-transparent via-transparent to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out
                                           hover:scale-110 hover:brightness-110 hover:animate-pulse ">
                                            Download CV
                        </button>
                    </a>

                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-transparent w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/Images/bg-hero.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection