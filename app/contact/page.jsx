import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text and illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-4xl mb-4 font-extrabold'>
              Hey!!
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together</h1>
            <p className='subtitle max-w-[400px]'>
              We'll have good time working with each other. Shoot me a mail...
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>

          </div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-12 mb-12 xl:mb-24 text-base
          xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className='text-primary' />
              <div>praveenrajesh2001@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className='text-primary' />
              <div>Madurai, Tamil Nadu</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className='text-primary' />
              <div>+91 6363984674</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;