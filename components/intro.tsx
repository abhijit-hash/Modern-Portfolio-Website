"use client";
import Image from 'next/image'
import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
import { useHooks } from '@/lib/hook';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useHooks("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
        '<span class="text-blue-500 font-bold">Full Stack Developer</span>',
        '<span class="text-orange-500 font-bold">Competitive Coder</span>',
        '<span class="text-pink-500 font-bold">UI/UX Designer</span>'
        ],
        typeSpeed: 120,
        backSpeed: 120,
        backDelay: 800,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  },[])

  return (
    <section ref={ref} id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
          <div className='flex items-center justify-center'>
              <div className="relative">
                  <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                    type: "tween",
                    duration: 0.2,
                    }}
                  >
                  <Image
                      src="/portfolio bg.jpg"
                      alt='...'
                      width="192"
                      height="192"
                      quality="95"
                      priority={true}
                      className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  />
                  </motion.div>

                  <motion.span
                    className="absolute bottom-0 right-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                  >
                    👋
                  </motion.span>

            </div>
          </div>

          <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
          >
              <span className="font-bold">Hello, It's Me <span style={{ color: 'rgb(29,252,70)', fontWeight: 'bold' }}>Abhijit Pal</span>
              </span> <br /> And I'm a{" "}<span ref={typedRef}></span>
              <br /> I'm a{" "}
              <span className="font-bold">final-year B.E/B.Tech</span> student at{" "}
              <span className="font-bold"> Jadavpur University. </span>I'm a aspring{" "}
              <span className="font-bold">Software Developer</span> looking an
               opportunity to work. I'm addicted to get dopamine hit after solving
               complex algorithmic problem using DSA. I enjoy building{" "}
              <span className="italic">sites</span>. My focus is{" "}
              <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact"
        className="group bg-gray-900 dark:bg-black/30 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
        }}

        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>
        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href="https://www.linkedin.com/in/abhijit-pal-35813a243/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/abhijit-hash"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://leetcode.com/u/sobuj_2003/"
          target="_blank"
        >
          <SiLeetcode/>
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.geeksforgeeks.org/user/subujpaul2003/"
          target="_blank"
        >
          <SiGeeksforgeeks/>
        </a>
      </motion.div>
    </section>
  )
}