import React from 'react'
import routes from '../../App/routes';
import CustomLink from '../CustomLink/CustomLink';
import Socials from '../Socials/Socials';
import HeaderForMobile from '../HeaderForMobile/HeaderForMobile';

import styles from './SideBar.module.scss';

export default function SideBar({ handleToggleNav, showNav }) {
  return (
    <div className='relative z-50'>
      <div className='block md:hidden fixed w-full text-lightGray'>
        <HeaderForMobile handleToggleNav={handleToggleNav} showNav={showNav} />
      </div>
      <div className={`${styles.sideBar} hidden md:block top-0 left-0 w-64 h-screen`}>
        <section>
          {routes.map(({ label, path, renderInSideBar }, i) => (
            <CustomLink
              key={i}
              to={path}
              label={label}
              render={renderInSideBar}
            />
          ))}
        </section>
        <Socials />
      </div>
    </div>
  )
}
