'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper,SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';
//components
import ProjectCard from '@/components/ProjectCard';

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
];

const Work = () => {
  return (
    <section className='relative mb-16 xl:mb-48 mt-16'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start py-6'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-4 mr-auto'>Projects that I have completed and worked on using different technologies.</p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[950px] xl:absolute right-0 top-0 p-4'>
          <Swiper className='h-[530px]'
          slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            }
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable:true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} >
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work
