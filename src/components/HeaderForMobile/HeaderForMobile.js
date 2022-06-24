import React from 'react';
import routes from '../../App/routes';
import CustomLink from '../CustomLink/CustomLink';
import styles from './HeaderForMobile.module.scss';

export default function HeaderForMobile({ handleToggleNav, showNav }) {
  return (
    <div className='p-6 px-10 text-white flex justify-between items-center bg-black border-b-2'>
      <div className={`text-7xl rounded-full p-5 flex items-center justify-center cursor-pointer overflow-hidden ${styles.mobileLogo}`}>
        <span className='mr-2 hover:text-mainColor'>A</span>
      </div>
      <div className="relative">
        <div
          className={`${showNav ? 'navMenuOpened' : ''} flex flex-col w-10 cursor-pointer h-8`}
          onClick={handleToggleNav}
        >
          <span className='block w-full border-t-2 h-1/3 transition-all'></span>
          <span className='block w-full border-t-2 h-1/3 transition-all'></span>
          <span className='block w-full border-t-2 h-1/3 transition-all'></span>
        </div>
        <section className={`${showNav ? `block absolute rounded-xl top-10 right-0 bg-white w-72 text-lightGray ${styles.navMenu}` : 'hidden'}`}>
          {routes.filter((r, i) => i !== 0).map(({ label, path, renderInSideBar }, i) => (
            <CustomLink
              key={i}
              render={renderInSideBar}
              to={path}
              label={label}
              handleToggleNav={handleToggleNav}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
