'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import socialData from "@/data/socials.json"
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import { PinContainer } from "@/components/ui/3d-pin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger);

function Page() {

  useGSAP(() => {
    gsap.from('.iamavailablehead, .wholesocialcontain', {
      y: 50,
      opacity: 0,
      duration: 2,
    })
    gsap.from('.socialtrigger', {
      opacity: 0.5,
      duration: 2,
      stagger: {
        from: 'start',
        each: 2,
      },
      scrollTrigger: {
        trigger: '.socialtrigger',
        start: 'top 30%',
        end: 'top 10%',
        scrub: 2,
      }
    })
  
  })
  
  return (
    <>

    <div className="maindivofsocial min-h-screen bg-[#333] dark:bg-[#111] py-12 pt-36">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <h1 className="iamavailablehead text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">I am available on {socialData.social.length} Social Networking Sites.</h1>  
        <div className="wholesocialcontain flex flex-wrap justify-center">
            {socialData.social.map((social, index) => (
                <PinContainer
                key={index}
                title={social.link}
                href={`social/${social.link}`}
              >
                <Link className="socialtrigger" key={social.name} href={`social${social.link}`}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {social.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      {social.description}
                    </span>
                  </div>
                  <Image
                      src={social.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full z-30 object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={social.name}
                    />
                </div>
                </Link>
              </PinContainer>
            ))}
        </div>  
    </div>
    <Footer/>
    </>
  )
}

export default Page