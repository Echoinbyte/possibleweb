"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const para =
  "Meet Possible Aryal, a 15-year-old tech whiz who loves building websites and editing videos. He's the founder of Orezin and shares his tech journey on his YouTube channel, Orezin. With a passion for innovation, Possible is making waves in the tech world at such a young age.";

function HeroSection() {

  useGSAP(()=>{
    const timeline = gsap.timeline();
    timeline.from('#head', {
      opacity: 0,
      y: '20px',
      duration: 1
    })
    timeline.from('.icons', {
      opacity: 0,
      x: -10,
      duration: 1,
      ease: 'bounce',
      delay: 0.2,
      stagger: {
        from: 'random',
        each: 0.5
      }
    })
    timeline.from('.btn', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
    })
  },[]);

  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-[100vh] fixed"
          particleColor="#FFFFFF"

        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <Boxes />

        <div className="p-4 relative z-10 w-full text-center">
          <h1 id="head" className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Possible
          </h1>
          <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            <TextGenerateEffect words={para} />
          </div>
          <div className="mt-5 flex flex-row gap-2 justify-center align-middle">
            <Link href={'/social/youtube'}>
              <span className="cursor-pointer">
                <FaYoutube className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
            <Link href={'/social/facebook'}>
              <span className="cursor-pointer">
                <FaFacebook className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
            <Link href={'/social/instagram'}>
              <span className="cursor-pointer">
                <FaInstagram className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
            <Link href={'/social/twitter'}>
              <span className="cursor-pointer">
                <FaTwitter className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
            <Link href={'/social/linkedin'}>
              <span className="cursor-pointer">
                <FaLinkedin className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
            <Link href={'/social/github'}>
              <span className="cursor-pointer">
                <FaGithub className="icons" size={32} color="#ffffff" />
              </span>
            </Link>
          </div>
          <div className="mt-4 btn">
            <Link href={"/social"}>
              <Button 
                borderRadius="1.75rem"
                className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                My SM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
