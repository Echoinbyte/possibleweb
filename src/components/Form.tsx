"use client"
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/moving-border";
gsap.registerPlugin(ScrollTrigger);

function FormContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btntext, setBtntext] = useState("Send Message");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState("");
  const [border, setBorder] = useState("");

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
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

  const handleChange = (event: any) => {
    setBorder("");
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setBtntext("Sending...");
  
    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setStatus("success");
        setBorder("success");
        setBtntext("Sent Successfully!");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setBorder("error");
      setBtntext("Error in Sending!");
    }
  
    console.log("Here's what you've sent to me:", formData);
  };
  return (
    <>
      <div className="min-h-screen bg-black text-white py-12 pt-36 relative">
        {" "}
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          {" "}
          <h1 className="contactus text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="helppara text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any queries regarding anything. Reach out and let us know how we can assist you
            in your problem and query.

          </p>
          <form method="POST" onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="text"
              ref={nameInputRef}
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              style={{borderColor: border === "success" ? "green" : border === "error" ? "orange" : "white"}}
              placeholder="myname"
              className={`inputsec rounded-lg border focus:ring-2 focus:ring-white w-full p-4 bg-neutral-950 placeholder:text-neutral-400 text-white`}
              required
              title="Your name will be also sent to me! that's cool, isn't it?"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              style={{borderColor: border === "success" ? "green" : border === "error" ? "orange" : "white"}}
              placeholder="hello@gmail.com"
              className={`inputsec rounded-lg border focus:ring-2 focus:ring-white w-full p-4 bg-neutral-950 placeholder:text-neutral-400 text-white`}
              required
              title="Your email will be sent to me! that's cool, isn't it?"
              autoComplete="off"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              style={{borderColor: border === "success" ? "green" : border === "error" ? "orange" : "white"}}
              placeholder="Hello Bro!"
              className={`textareasec resize-none rounded-lg border focus:ring-2 focus:ring-white w-full p-4 bg-neutral-950 placeholder:text-neutral-400 text-white`}
              rows={7}
              required
              title="Your message will be sent to me! that's cool, isn't it?"
              autoComplete="off"
            ></textarea>

            <div className="btn3rd mt-20 text-center">
              <Button
                borderRadius="1rem"
                className="text-black submitbtn dark:text-white bg-transparent"
                type="submit"
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
