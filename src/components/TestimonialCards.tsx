'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialData from '../data/testimonials.json'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const testimonials = testimonialData.testimonials.filter(testimonial => testimonial.isFeatured);

function Testimonials() {
  useGSAP(() => {
    // const timeline2 = gsap.timeline();
    gsap.from('.title', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.contain',
        start: 'top 70%',
        end: 'center center',
        scrub: 5,
      }
    })
    gsap.from('.moving', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.contain',
        start: 'top 70%',
        end: 'center center',
        scrub: 5,
      }
    })
  }, []);

  return (
    <div className="contain h-[40rem] w-full dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h1 className="title text-center mt-20 mb-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">See the Reaction: Framework of success</h1>
        <div className="moving flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default Testimonials