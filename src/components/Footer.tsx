"use client"
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Footer() {

  useGSAP(() => {
    gsap.from('.head', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 8
      },
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      }
    })
    gsap.from('.para', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 10
      },
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: 'top 45%',
        scrub: 1,
      }
    })
    

  });



  return (
    <footer className="footer bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="head text-lg font-semibold mb-4">Thanks</h2>
          <p className="para mb-4">
          Thanks for visiting the Possibleweb! Its just an experimental website for showcasing my skills on Frontend. Yup! This website doesnot include any complex backend intrigations. 

          </p>
        </div>

        <div>
          <h2 className="head text-lg font-semibold mb-4">About Me</h2>
          <p className="para mb-4">
            As mentioned in the Landing page, I am Possible ( Sambhav Aryal ) an 15 year Tech Savvy who is interested in creating Various Frontend designs as well as Numerous Web Technologies. 

          </p>
        </div>
        <div>
          <h2 className="head text-lg font-semibold mb-4">More Detail</h2>
          <p className="para mb-4">
            Education: 10th Grade <br />
            Expertise: MERN, FramerMotion

            </p>
        </div>

        <div>
          <h2 className="head text-lg font-semibold mb-4">Contact Us</h2>
          <p className="para mb-4">
            Rupandehi, Nepal<br/>
            Siyari - 7<br/>
            Email: hashzennn@gmail.com<br/>
            Phone: Private -&gt; Dont Mind
            </p>
        </div>
        </div>
        <p className="para text-center text-xs pt-8">© 2024 Possible. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
