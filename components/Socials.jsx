'use client';

import { RiLinkedinFill, RiGithubFill, RiInstagramFill,
RiTwitterFill, RiTelegramLine } from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/pravn/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/pravn1921',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/_pravn.__/',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://web.telegram.org/a/',
    name: <RiTelegramLine />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  )
}

export default Socials
