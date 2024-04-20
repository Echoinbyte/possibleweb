'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import webinarData from "@/data/webinars.json"
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger);

function WebinarPage() {


  useGSAP(() => {
    gsap.from('.webinarheaddata, .wholewebinarcontain', {
      y: 50,
      opacity: 0,
      duration: 2,
    })
    
    gsap.from('.individualwebinarsalldata', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: {
        from: 'start',
        each: 0.5,
      },
      scrollTrigger: {
        trigger: '.themastercontainer2nd',
        start: 'top bottom',
        end: '90% bottom',
        scrub: true,
      }
    })
  })


  return (
    <>
    <div className="themastercontainer2nd min-h-screen bg-black py-12 pt-36">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <h1 className="webinarheaddata text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All Webinars ({webinarData.webinars.length})</h1>  
        <div className="wholewebinarcontain flex flex-wrap justify-center">
            {webinarData.webinars.map((course) => (
                <CardContainer className="inter-var m-4" key={null}>
                <CardBody className="individualwebinarsalldata bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <Link href={`webinars/${course.slug}`}>
                      Join Now
                      </Link>
                      
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
    <Footer/>
    </>
  )
}

export default WebinarPage