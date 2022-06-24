import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';
import CustomtypeWriter from '../CustomtypeWriter/CustomtypeWriter';

import MainBtn from '../MainBtn/MainBtn';
import PagePsudoTop from '../Psudos/PagePsudoTop';
import PagePsudoBottom from '../Psudos/PagePsudoBottom';
import MainSection from '../MainSection/MainSection';
import PageHeaderWithPsudo from '../PageHeaderWithPsudo/PageHeaderWithPsudo';

import styles from './IntroHeading.module.scss';

export default function IntroHeading() {
  const navigate = useNavigate();
  return (
    <MainSection className={`flex flex-col justify-center ${styles.headingContainer}`}>
      <PagePsudoTop />
      <div className={styles.overlay} />
      <div className='z-10'>
        <section className="px-6 md:px-20 flex justify-center flex-wrap md:justify-start">
          <PageHeaderWithPsudo
            headerClassName={`text-7xl sm:text-8xl md:text-9xl w-full mb-14 md:mb-5 ${styles.headingMainTitle} text-center md:text-left`}
          >
            <div>
              <CustomtypeWriter str="Hi," pause={0} delay={100} />
            </div>
            <div>
              <CustomtypeWriter str="I'm <span>A</span>mr," pause={500} delay={90} />
            </div>
            <div>
              <CustomtypeWriter str="Front End Web Developer" pause={1500} delay={80} />
            </div>
          </PageHeaderWithPsudo>
          <div className="mt-24 w-full flex justify-center items-center md:justify-start">
            <MainBtn onClick={() => navigate('/contact-me')} btnType="primary">
              <span className="z-10 relative group-hover:text-black transition-colors delay-50 text-mainColor">Contact Me</span>
            </MainBtn>
          </div>
        </section>
        <div className='absolute bottom-0 left-0 w-full text-center pb-5'>
          <div className='flex flex-col w-7/12 mx-auto'>
            <span className='text-2xl mb-4'>Scroll Down</span>
            <span className='text-4xl bounceY'>
              <FontAwesomeIcon icon={faHandPointDown} />
            </span>
          </div>
        </div>
      </div>
      <PagePsudoBottom />
    </MainSection>
  )
}
