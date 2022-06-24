import React from 'react'

export default function MainSection({ children, className }) {
  return (
    <section className={`min-h-screen px-5 md:px-20 relative ${className}`}>
      {children}
    </section>
  )
}
