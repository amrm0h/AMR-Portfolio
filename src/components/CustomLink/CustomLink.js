import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CustomLink({ label, to, render, handleToggleNav = () => null }) {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => `${isActive ? 'text-mainColor' : ''} hover:text-mainColor`} onClick={handleToggleNav}>
        {render ? render() : label}
      </NavLink>
    </div>
  )
}
