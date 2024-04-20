'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import webinarData from '../data/webinars.json'
import { Button } from "./ui/moving-border";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);



function UpcomingWebinars() {

  const featuredWebinars = webinarData.webinars.filter(webinar => webinar.isFeatured);




  useGSAP(() => {
    gsap.from('.featuredwebinar', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.ndh2pcontent',
        start: 'top 72%',
        end: 'center 70%',
        scrub: 2,
      }
    })
    gsap.from('.enhanceyourknowledge', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.ndh2pcontent',
        start: 'top 70%',
        end: 'center 70%',
        scrub: 2,
      }
    })
    gsap.from('.webinarcontent', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 3
      },
      scrollTrigger: {
        trigger: '.allwebinarcontent',
        start: 'top 70%',
        end: 'center 70%',
        scrub: 2,
      }
    })
    gsap.from('.btn3rd', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.btn3rd',
        start: 'top 70%',
        end: 'center 70%',
        scrub: 2,
      }
    })

  });

  const hovereffectref = useRef<HTMLDivElement>(null);
    const [bgcolor, setBgcolor] = useState("rgb(17,24,39)");

    function hovereffect() {
      setBgcolor("linear-gradient(to bottom, #000000, #222222)");
    }
    function unhovereffect() {
      setBgcolor("rgb(17,24,39)");
    }


  
  return (
    <div ref={hovereffectref}  className="py-12"  style={{alignItems: 'center', transition: "all ease 1.5s", background: bgcolor}}>
      
      <div className="ndh2pcontent max-w-7xl mx-auto px-4 sm:px-0">
        <div className="text-center">
          <h2 className="featuredwebinar text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="enhanceyourknowledge mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Knowledge</p>
        </div>

        <div className="allwebinarcontent mt-10">
          <HoverEffect className="webinarcontent"
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`
            }
          ))}
          />
        </div>

        <div className="btn3rd mt-20 text-center">
        <Link
          href={"/courses"}
          onMouseEnter={hovereffect} onMouseLeave={unhovereffect}

        >
          <Button
            borderRadius="1rem"
            className="text-black dark:text-white bg-transparent"
          >
            View All courses
          </Button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars