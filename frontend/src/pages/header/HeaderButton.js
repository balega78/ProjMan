import React from 'react';
import './HeaderButton.scss';
import { Link } from 'react-router-dom';

function HeaderButton({ label, href, onClick, isActive }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={isActive ? 'headerButton_active' : 'headerButton'}
    >
      {label}
    </Link>
  );
}

export default HeaderButton;
