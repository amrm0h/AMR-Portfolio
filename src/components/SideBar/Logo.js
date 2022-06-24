import React from 'react';
import NameSymbol from '../NameSymbol/NameSymbol';
import styles from './SideBar.module.scss';

export default function Logo() {
  return (
    <div className={`${styles.logo} bg-black flex flex-col items-center justify-center`}>
      <NameSymbol />
      <p className={`${styles.name} text-white m-0 font-black`}>Amr</p>
      <span>Web Developer</span>
    </div>
  )
}
