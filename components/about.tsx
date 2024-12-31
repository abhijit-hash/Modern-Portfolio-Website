/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from 'react'
import { motion } from "framer-motion";
import { useHooks } from '@/lib/hook';

export default function About() {
  const { ref } = useHooks("About",0.75);

  return (
      <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      >
        <h1 className='text-3xl font-medium capitalize mb-8 text-center'>About Me</h1>
        <p className="mb-3">
            I am a aspiring software engineer from India. I am currently pursuing
        Production Engineering from Jadavpur University, Kolkata. I am a
        self-taught developer and I love to build things for the web using
        latest Technologies. I am passionate about building products that are
        accessible to everyone and make a difference in people's lives. <span className='text-blue-500'>I have
        solved more than 400 question on varoius platform like-Leetcode,Gfg and Code Studio with a contest rating of 1491 on Leetcode. </span> I love solving complex problems using Data Structure and
        Algorithm and Computer Technologies. I currently looking an opportunity
        to work as a Software Developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Football and Cricket, watching movies, listening music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.I find joy in
        collaborating with people and learn something valuable and make good
        memories with them. I am currently studying about{" "}
        <span className="font-medium">
          Ancient History and Modern Psychology 🧠
        </span>
        .
        </p>
    </motion.section>
  )
}