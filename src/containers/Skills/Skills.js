import React from 'react'
import MainSection from '../../components/MainSection/MainSection'
import PageHeaderWithPsudo from '../../components/PageHeaderWithPsudo/PageHeaderWithPsudo'
import ParagraphWithPsudo from '../../components/ParagraphWithPsudo/ParagraphWithPsudo'
import PagePsudoBottom from '../../components/Psudos/PagePsudoBottom'
import PagePsudoTop from '../../components/Psudos/PagePsudoTop';

import HyperLink from '../../components/Link/Link';
import { Link } from 'react-router-dom'
import SkillsProgress from './SkillsProgress'

const experts = [
  'Front-End development', 'HTML', 'CSS', 'JS', 'REACT',
];

export default function Skills() {
  return (
    <MainSection className="">
      <PagePsudoTop />

      <div className='py-48 px-24 grid grid-cols-2 gap-x-10'>

        <section>
          <PageHeaderWithPsudo>
            <span className="text-8xl text-mainColor tracking-tighter">Skills & Experience</span>
          </PageHeaderWithPsudo>

          <ParagraphWithPsudo textClassName="mt-20 mt-24 px-3 text-2xl flex flex-col gap-y-10 leading-relaxed text-gray-300 text-justify">

            <span>
              <span className="text-secondColor">
                Nearly 4 years ago
              </span>
              , I decided to Shift my carrer and begin my journey as a front-end web developer. Since then, I’ve learnt a lot of amazing and usefull things, done and collaborated with talented colleagues to create successful responsive-websites for both business and consumer use built with best practices .
            </span>

            <span>
              The main area of my expertise is
              {experts.map(exp => (
                <span
                  key={exp}
                  className="text-secondColor"
                >
                  {` ${exp}, `}
                </span>
              ))}
              building features, reusable components and coding interactive layouts .
            </span>

            <span>
              Visit my
              {' '}
              <HyperLink
                path="https://www.linkedin.com/in/amrmo/"
                className="text-mainColor"
              >
                LinkedIn
              </HyperLink>
              {' '}
              profile for more details or just
              {' '}
              <Link
                to="/contact-me"
                target="_self"
                className="text-mainColor"
              >Contact</Link> me .
            </span>


          </ParagraphWithPsudo>



        </section>

        <section>
          <SkillsProgress />
        </section>

      </div>

      <PagePsudoBottom />
    </MainSection>
  )
}
