'use client';
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"; 

import { Swiper,SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Naresh Kumar',
        job: 'Student (Web Developer)',
        review:
        'Hard working and passionate towards technologies, highly supportive individual and attentive to details.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Santhosh Sivan',
        job: 'Student (UI/UX)',
        review:
        'Strong dedication to learning and excels in his technical skills. ',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Mohana Prawin',
        job: 'Student (Web Developer)',
        review:
        'Always eager to take on new challenges and work well in a team with good communication skills',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Prakash Gopal',
        job: 'Student (Web Developer)',
        review:
        'Quick learner and has a good understanding of programming languages and software development.',
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Srinivasan',
        job: 'Student (Web Developer)',
        review:
        'Strong analytical mindset and problem-solving abilities.',
    },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32 py-8 xl:py-10">
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto '>
                Reviews
            </h2>
            {/* swiper */}
            <Swiper
            slidesPerView={1}
            breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable:true,
            }}
            className='h-[350px]'
            >
                {reviewsData.map((person, index) =>{
                    return <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className="flex items-center gap-x-4">
                                    {/* image */}
                                    <Image 
                                    src={person.avatar}
                                    width={70}
                                    height={70}
                                    alt=''
                                    priority
                                    />
                                    {/* names */}
                                    <div className='flex flex-col'>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>
                                {person.review}
                            </CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews
