"use client"
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/moving-border';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import socialData from '@/data/socials.json'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



function Page({params}) {

    const urlslug = params.social;
    const sSocial = socialData.social.filter((social => social.slug === urlslug));
    const social = sSocial[0];
    const { qrCodePng, url, slug, name } = social;  
    
    
    useGSAP(() => {
        gsap.from('.qrCodePngBackground, .namecontaindiv', {
          y: 50,
          opacity: 0,
          duration: 2,
          stagger: {
            from: 'start',
            amount: 1,
          }
        })
    });

    const hovereffectref = useRef();
    const [bgcolor, setBgcolor] = useState("rgb(17,24,39)");

    function hovereffect() {
      setBgcolor("#111");
    }
    function unhovereffect() {
      setBgcolor("rgb(17,24,39)");
    }

  return (
    <>
        <div ref={hovereffectref} className='thesupremediv h-[100vh] w-[99vw] text-center flex flex-col justify-center align-middle' style={{alignItems: 'center', transition: "all ease 1s", backgroundColor: bgcolor}}>
            
                <Image src={qrCodePng} alt={slug} width={250} height={250} className='qrCodePngBackground rounded-3xl' />
                <div className="namecontaindiv mt-4 btn" onMouseEnter={hovereffect} onMouseLeave={unhovereffect}>
                    <Link href={url}>
                            <Button 
                                borderRadius="1.75rem"
                                className=" bg-white dark:bg-black text-black dark:text-[#ccc] border-neutral-200 dark:border-slate-800"
                                
                            >
                                {name}
                            </Button>
                    </Link>

        
                </div>
        </div>
        <Footer/>
    </>
  )
}

export default Page
