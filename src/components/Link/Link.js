import React from 'react'

export default function Link({ children, path, className, target = '_blank' }) {
  return (
    <a href={path} target={target} rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
