'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form method='POST' action="https://getform.io/f/Pe9q0xeL" className="flex flex-col gap-y-4">
        {/* input */}
        <div className="relative flex items-center">
            <Input name='name' id='name' placeholder='Name' />
            <User className="absolute right-6" size={20} />
        </div>
        {/* input */}
        <div className="relative flex items-center">
            <Input name='email' id='email' placeholder='Email' />
            <MailIcon className="absolute right-6" size={20} />
        </div>
        {/* textarea */}
        <div className="relative flex items-center">
            <Textarea name='message' placeholder='Drop your message...' />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button className='flex items-center gap-x-2 max-w-[166px]'>
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
    </form>
  )
}

export default Form
