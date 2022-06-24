import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ children, path }) => (
  <a href={path} target="_blank" rel="noreferrer" className="hover:text-mainColor">
    {children}
  </a>
)

export default function Socials() {
  return (
    <section className='flex items-center justify-center'>
      <SocialLink path="https://www.linkedin.com/in/amrmo/">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </SocialLink>
      <SocialLink path="https://github.com/amrm0h/">
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
    </section>
  )
}
