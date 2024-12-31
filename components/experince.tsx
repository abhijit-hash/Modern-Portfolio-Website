/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { experiencesData } from '@/lib/data';
import { useHooks } from '@/lib/hook';
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useTheme } from '@/context/theme-context';

export default function Experince() {
  const { ref } = useHooks("Experience", 0.75);
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.section
      id='experience'
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h1 className='text-4xl font-medium capitalize mb-8 text-center' variants={itemVariants}>My Experience</motion.h1>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                }}
              contentArrowStyle={{
                borderRight:
                 theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
              date={item.date}
              icon={item.icon}
                iconStyle={{
                 background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                 fontSize: "1.5rem",
              }}
              >
                <h3 className="font-bold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
            </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </motion.section>
  )
}