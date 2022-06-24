import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';
import CustomtypeWriter from '../CustomtypeWriter/CustomtypeWriter';

import styles from './IntroHeading.module.scss';
import PsudoElements from '../PsudoElements/PsudoElements';
import MainBtn from '../MainBtn/MainBtn';

export default function IntroHeading() {
  const navigate = useNavigate();
  return (
    <section className={`min-h-screen px-5 md:px-20 flex flex-col justify-center ${styles.headingContainer} relative`}
    >
      <PsudoElements elem="<html>" classNames="top-48 md:top-5" />
      <PsudoElements elem="<body>" classNames="top-60 pl-8 md:top-16" />
      <div className={styles.overlay} />
      <div className='z-10'>
        <section className="px-6 md:px-20 flex justify-center flex-wrap md:justify-start">
          <h1 className={`text-7xl sm:text-8xl md:text-9xl font-bold transition-all w-full mb-14 md:mb-5 relative ${styles.headingMainTitle} text-center md:text-left`}>
            <PsudoElements elem="<h1>" classNames="-top-12 md:-left-4" />
            <PsudoElements elem="</h1>" classNames="-bottom-14 md:-left-4" />
            <div>
              <CustomtypeWriter str="Hi," pause={0} delay={100} />
            </div>
            <div>
              <CustomtypeWriter str="I'm <span>A</span>mr," pause={500} delay={90} />
            </div>
            <div>
              <CustomtypeWriter str="Web Developer" pause={1500} delay={80} />
            </div>
          </h1>
          <div className='text-lightGray text-2xl md:text-3xl tracking-wider md:mt-20 relative w-full text-center md:text-left'>
            <PsudoElements elem="<p>" classNames="hidden md:block -top-10 -left-4" />
            <span className="md:mt-5 block">Front End Developer</span>
            <PsudoElements elem="</p>" classNames="hidden md:block -bottom-15 -left-4" />
          </div>
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

    </section>
  )
}
