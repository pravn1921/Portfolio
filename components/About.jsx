import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Praveen R',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91 6363984674',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'praveenrajesh2001@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 19 Feb, 2001',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master of Computer Applications (2024)',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Madurai, Tamil Nadu',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Thiagarajar College',
                qualification: 'Bachelor of Commerce (Computer Applications)',
                years: '2019 - 2022',
            },
            {
                university: 'Kongu Engineering College',
                qualification: 'Master of Computer Applications',
                years: '2022 - 2024',
            },
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Java, C programming',
            },
            {
                name: 'SQL',
            },
            {
                name: 'HTML, CSS',
            },
            {
                name: 'ReactJS',
            },
            {
                name: 'Front-end Development',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/pvs.svg',
            },
            {
                imgPath: '/about/pfig.svg',
            },
            {
                imgPath: '/about/pec.svg',
            },
            {
                imgPath: '/about/pof.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
     <section className='xl:h-[860px] pb-12 xl:py-24'>
         <div className="container mx-auto">
             <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                 About me
             </h2>
             <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg 
                    containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                    w-[505px] h-[505px] bg-no-repeat relative' 
                    imgSrc='/about/developer.png'
                    /> 
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px]
                        xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualification</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8'>
                            {/* personal */}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>
                                        MCA Student with keen interest in Technology.
                                    </h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                    Extremely motivated MCA student that has a desire to succeed in the profession and has a strong passion for technology. 
                                    </p>
                                    {/* icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index) => {
                                            return(
                                                <div 
                                                className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                key={index}
                                                >
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* languages */}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>Language Skill</div>
                                        <div className='border-b border-border'></div>
                                        <div>English, Tamil, Hindi, Kannada</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualification'>quali</TabsContent>
                            <TabsContent value='skills'>skills</TabsContent>
                        </div>
                    </Tabs>
                </div>
             </div>
         </div>
     </section>
    );
};

export default About;
