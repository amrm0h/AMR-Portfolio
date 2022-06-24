import React from 'react';

const btnClasses = {
  primary: 'border-2 border-mainColor hoverEffect px-5 md:px-32 py-5 text-xl md:text-2xl tracking-widest font-bold rounded-md group w-11/12 max-w-sm md:max-w-none md:w-auto',
  default: '',
};

export default function MainBtn({ children, onClick, btnType, appendedClassNames }) {
  return (
    <button onClick={onClick} className={`${appendedClassNames} ${btnClasses[btnType] || btnClasses.default} outline-none`}>
      {children}
    </button>
  )
}
