"use client";
import Link from "next/link";
import courseData from "../data/courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeatureCourses() {
  const feature = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  useGSAP(() => {
    gsap.from('.featuredcourses', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.h2pcontain',
        start: 'top 72%',
        end: 'center center',
        scrub: 2,
      }
    })
    gsap.from('.learnwithbest', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.h2pcontain',
        start: 'top 70%',
        end: 'center center',
        scrub: 2,
      }
    })
    gsap.from('.coursecontent', {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: {
        from: 'start',
        amount: 3
      },
      scrollTrigger: {
        trigger: '.allcoursecontent',
        start: 'top 70%',
        end: 'center center',
        scrub: 2,
      }
    })
    gsap.from('.btn2nd', {
      y: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.btn2nd',
        start: 'top 70%',
        end: 'center center',
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
    <div ref={hovereffectref} className="py-12" style={{alignItems: 'center', transition: "all ease 1.5s", background: bgcolor}}>
      <div>
        <div className="h2pcontain text-center">
          <h2 className="featuredcourses text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="learnwithbest mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="allcoursecontent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {feature.map((course: Course) => (

              <div key={course.id} className="coursecontent flex justify-center">
                <Link href={`/courses/${course.slug}`} className="pt-5">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>

                    
                </div>
              </BackgroundGradient>
                  </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="btn2nd mt-20 text-center">
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
  );
}

export default FeatureCourses;
