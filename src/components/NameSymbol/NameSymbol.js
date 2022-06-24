import React from 'react';
import styles from './NameSymbol.module.scss';

export default function NameSymbol() {
  return (
    <span className={`${styles.symbol} font-bold transform scale-x-100 scale-y-125`}>
      <span className="text-mainColor">A</span>
      <span className="text-secondColor">A</span>
    </span>
  );
};
