import React, { useState, useEffect } from 'react';
import HeaderButton from './HeaderButton';
import './Header.scss';
import logo from '../../docs/BFKlogo.jpg';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [whichButtonActive, changeActiveButton] = useState('');
  let isLoggedIn;
  let userName;

  //if (localStorage.getItem('token') !== null) {
  isLoggedIn = true;
  //later get from token
  userName = "User"
  /*} else {
    isLoggedIn = false;
  }*/

  const path = useLocation();

  useEffect(() => {
    detectActiveButton();
  }, [path]);

  function detectActiveButton() {
    if (isLoggedIn) {
      if (path.pathname === '/riport') {
        changeActiveButton('Riport');
      } else {
        changeActiveButton('Projektek');
      }
    } else {
      if (path.pathname === '/login') {
        changeActiveButton('Login');
      } else {
        changeActiveButton('Register');
      }
    }
  }

  const headersDataIfLoggedIn = [
    {
      label: 'Projektek',
      href: '/Projektek',
      onClick: () => {
        changeActiveButton('Projektek');
      },
    },
    {
      label: 'Riport',
      href: '/riport',
      onClick: () => {
        changeActiveButton('Riport');
      },
    },
    {
      label: 'Kilépés',
      href: '/login',
      onClick: () => {
        localStorage.removeItem('token');
        changeActiveButton('Logout');
      },
    },
  ];

  const headersDataIfNotLoggedIn = [
    {
      label: 'Login',
      href: '/login',
      onClick: () => {
        changeActiveButton('Login');
      },
    },
    {
      label: 'Register',
      href: '/register',
      onClick: () => {
        changeActiveButton('Register');
      },
    },
  ];

  const currentHeadersData = isLoggedIn
    ? headersDataIfLoggedIn
    : headersDataIfNotLoggedIn;

  return (
    <header className="app-header">

      <div className="companyData">
        <img className="logo" src={logo} alt={"BFKlogo"} />
        <div className="companyName">
          <p>
            BUDAPEST FEJLESZTÉSI KÖZPONT
        </p>
        </div>
      </div>

      <div className="headerButtons">
        {currentHeadersData.map((buttonData, i) => (
          <HeaderButton
            key={`header-item-${i}`}
            {...buttonData}
            isActive={whichButtonActive === buttonData.label}
          />
        ))}
      </div>

      <div className="userName">
        {isLoggedIn ? `felhasználó: ${userName}` : 'notLoggedIn'}
      </div>
    </header>
  );
}

