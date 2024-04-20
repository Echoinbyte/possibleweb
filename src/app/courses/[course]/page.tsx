"use client"
import React from 'react'
import '@/app/style.css'
import Footer from '@/components/Footer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Page() {
  useGSAP(() => {
    gsap.from('.box, .coursesindev', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 2
      }
    })
  })


  return (
    <>
    <div className='allcontainer h-[100vh] w-[99vw] text-center flex flex-col justify-center align-middle'>
      <div id="container" >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <h1 className='coursesindev text-white text-3xl text-center font-extrabold'>Course in Development phase.</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Page
