"use client";

import { projectsData } from '@/lib/data'
import React from 'react'
import Project from './project'
import { useHooks } from '@/lib/hook';

export default function Projects() {
  const { ref } = useHooks("Projects",0.25);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
          <h1 className='text-3xl font-medium capitalize mb-8 text-center'>My Latest Projects</h1>
          <div>
        {
          projectsData.map((project,index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
            }
          </div>
    </section>
  )
}