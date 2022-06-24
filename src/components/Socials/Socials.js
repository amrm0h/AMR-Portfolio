import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import SocialLink from '../Link/Link';

export default function Socials() {
  return (
    <section className='flex items-center justify-center'>
      <SocialLink
        path="https://www.linkedin.com/in/amrmo/"
        className="hover:text-mainColor"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </SocialLink>
      <SocialLink
        path="https://github.com/amrm0h/"
        className="hover:text-mainColor"
      >
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
    </section>
  )
}
