'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructorsData from "../data/instructors.json"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const instructors = instructorsData.instructors;

function Instructors() {


  useGSAP(() => {
    const timeline3 = gsap.timeline();
    timeline3.from('.meetinstructor', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.maincontainer',
        start: 'top 75%',
        end: 'center center',
        scrub: 2,
      }
    })
    timeline3.from('.discoverpara', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.maincontainer',
        start: 'top 70%',
        end: 'center center',
        scrub: 2,
      }
    })
    timeline3.from('.wavybg', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.maincontainer',
        start: 'top 65%',
        end: 'center center',
        scrub: 2,
      }
    })
    timeline3.from('.animatedtooltip', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 3
      },
      scrollTrigger: {
        trigger: '.maincontainer',
        start: 'top 60%',
        end: 'center center',
        scrub: 2,
      }
    })

  });

  return (
    <div className="maincontainer relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="wavybg w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="meetinstructor text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="discoverpara text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="animatedtooltip flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors