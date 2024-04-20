
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { title } from "process";
import chooseusData from '../data/chooseus.json'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const possibleContent = chooseusData.chooses;

function WhyChooseUs() {

  useGSAP(() => {
    gsap.from('.whychooseuscontainer', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.whychooseuscontainer',
        start: 'top 72%',
        end: 'center 80%',
        scrub: 2,
      }
    })
  })


  return (
    <div className="whychooseuscontainer" style={{ overflow: "hidden" }}>
        <StickyScroll content={possibleContent} />
    </div>
  )
}

export default WhyChooseUs;