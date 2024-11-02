'use client';

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

const projectData =[
  {
      image: '/work/spotifyBanner.png',
      category: 'Next JS',
      name: 'Spotify Clone',
      description: "A dynamic music streaming platform using Next.js, Supabase, PostgreSQL and Stripe for payment processing.",
      link: 'https://spotify-clone-prav.vercel.app/',
      github: 'https://github.com/pravn1921/Spotify-Clone',
  },
  {
      image: '/work/fac 1.png',
      category: 'React JS',
      name: 'Faculty Subject Management System',
      description: "Web application to computerizes the storage and retrieval of faculty personal and academic records.",
      link: '/',
      github: 'https://github.com/pravn1921/Faculty-Subject-Expert-Management-System',
  },
  {
      image: '/work/movue hub.png',
      category: 'React JS',
      name: 'MovieHub',
      description: "A static website to search all hollywood movies using an external API. This projectt was developed using Reactjs.",
      link: '/',
      github: 'https://github.com/pravn1921/MovieHub',
  },
  {
      image: '/work/crime.png',
      category: 'php',
      name: 'Crime Report Management System',
      description: "Web-based application for reporting online crimes, storing records, and assigning cases to authorities.",
      link: '/',
      github: 'https://github.com/pravn1921/Crime-Report-Management-System',
  },
  {
      image: '/work/careerhook.png',
      category: 'React JS',
      name: 'CareerHook - Job Portal',
      description: "CareerHook features a comprehensive range of job listings, allowing employers to post vacancies and job seekers to apply easily, fostering a dynamic job market environment",
      link: 'https://careerhook.vercel.app/',
      github: 'https://github.com/pravn1921/CareerHook',
  },
];

const uniqueCategories = [
  'all projects'
  ,...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project => {
    return category === 'all projects'
    ? project
    : project.category === category;
  }));

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return ( 
              <TabsTrigger 
              onClick={() => setCategory(category)}
              value={category}
              key={index}
              className='capitalize w-[162px] md:w-auto'
              >
                {category}
              </TabsTrigger>
              );
            })}
          </TabsList>

          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3
          gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects