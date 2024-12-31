"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useHooks } from '@/lib/hook';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from './submit-btn';

export default function Contact() {
    const { ref } = useHooks("Contact");
  return (
    <motion.section
    id='contact'
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity: 0,
      }}
    whileInView={{
        opacity: 1,
      }}
    transition={{
        duration: 1,
      }}
    >
    <h1 className="text-4xl font-medium capitalize mb-8 text-center">
        Contact Me
    </h1>
    <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:subujpaul2003@gmail.com'>
          subujpaul2003@gmail.com
        </a>{" "}
        or through this form.
    </p>

    <form className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
    }}
      >
    <input
    className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
    name="senderEmail"
    type="email"
    placeholder='Your email'
    required
    maxLength={500}
    />
    <textarea
    className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
    name="message"
    placeholder='Your message'
    required
    maxLength={5000}
    />
    <SubmitBtn/>
    </form>
    </motion.section>
  )
}