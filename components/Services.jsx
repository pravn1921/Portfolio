import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData =[
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} 
        className='hover:-translate-y-5 hover:scale-125 duration-200' 
        />,
        title: 'Web Development',
        description: 'Practical experience in Web Development by building websites and applications using technologies like HTML, Tailwind CSS, JavaScript, ReactJS, NextJS, NodeJS, and MongoDB.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} 
        className='hover:-translate-y-5 hover:scale-125 duration-200'
        />,
        title: 'Java',
        description: 'Experienced in Java programming, with strong understanding of core concepts such as Collections, OOPs, etc. Additionally, knowledgeable in Advanced Java topics including Servlets and JDBC.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} 
        className='hover:-translate-y-5 hover:scale-125 duration-200'
        />,
        title: 'UI/UX',
        description: 'Hands-on experience and basic understanding in UI/UX design using figma tool. Portfolio showcases my UI/UX design skills.',
    },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mt-16 mb-16 xl:mb-24 text-center mx-auto'>
                My Services
            </h2>
            {/* grid */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-16 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return(
                        <Card className='w-full max-w-[400px] h-[290px] flex flex-col pt-16 pb-8 justify-center items-center relative hover:shadow-md 
                        dark:border-primary dark:hover:shadow-primary'
                        key={index}
                        >
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
  );
}

export default Services
