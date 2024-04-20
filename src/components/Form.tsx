"use client"
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "./ui/moving-border";
gsap.registerPlugin(ScrollTrigger);
import "./styles/forms.css";

function FormContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btntext, setBtntext] = useState("Send Message");
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  useGSAP(() => {
    gsap.from(".contactus, .helppara, .inputsec, .textareasec, .submitbtn", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        from: "start",
        amount: 0.5,
      },
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim() === "" || message.trim() === "") {
      return;
    }
    setBtntext(<IoMdCheckmarkCircle color="white" size={24} />);
    console.log("Submitted:", { email, message });
  };

  const hovereffectref = useRef();
  const [bgcolor, setBgcolor] = useState("rgb(17,24,39)");

  function hovereffect() {
    setBgcolor("linear-gradient(to bottom, #000000, #222222)");
  }
  function unhovereffect() {
    setBgcolor("rgb(17,24,39)");
  }

  return (
    <>
      <div className="min-h-screen py-12 pt-36 relative">
        {" "}
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          {" "}
          <h1 className="contactus text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="helppara text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your programming and lifelong journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              ref={emailInputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@gmail.com"
              className="inputsec rounded-lg border border-neutral-800 focus:ring-2 focus:ring-white w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              required
              title="Your email will be sent to me! that's cool, isn't it?"
            />
            <div className="custom-tooltip">In Echo...</div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello Bro!"
              className="textareasec resize-none rounded-lg border border-neutral-800 focus:ring-2 focus:ring-white w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              ref={hovereffectref}
              rows={7}
              required
              title="Your message will be sent to me! that's cool, isn't it?"
            ></textarea>
            
            <div className="btn3rd mt-20 text-center">
              <Button
                borderRadius="1rem"
                className="text-black submitbtn dark:text-white bg-transparent"
                type="submit"
                onMouseEnter={hovereffect}
                onMouseLeave={unhovereffect}
              >
                {btntext}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContact;
