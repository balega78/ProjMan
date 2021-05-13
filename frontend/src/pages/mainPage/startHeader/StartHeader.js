import React, { useState, useEffect } from 'react';
import HeaderButton from '../header/HeaderButton';
import './StartHeader.scss';
import logo from '../../../docs/BFKlogo.jpg';
import { useLocation } from 'react-router-dom';

export default function StartHeader() {
  const [whichButtonActive, changeActiveButton] = useState('');

  const path = useLocation();

  useEffect(() => {
    detectActiveButton();
  }, [path]);

  function detectActiveButton() {
    if (path.pathname === '/registration') {
      changeActiveButton('Regisztrálok');
    } else {
      changeActiveButton('Bejelentkezek');
    }
  }

  const logOrRegisterButtons = [
    {
      label: 'Bejelentkezek',
      href: '/login',
      onClick: () => {
        changeActiveButton('Bejelentkezek');
      },
    },
    {
      label: 'Regisztrálok',
      href: '/registration',
      onClick: () => {
        changeActiveButton('Regisztrálok');
      },
    },
  ];


  return (
    <div>
      <header className="app-header-sh-1st"></header>
      <header className="app-header-sh">
        <div className="mainlogobox">
          <img className="logo-sh" src={logo} alt={"BFKlogo"} />
          <div className="companyName-sh">
            <p className="nametext">BUDAPEST</p>
            <p className="nametext">FEJLESZTÉSI</p>
            <p className="nametext">KÖZPONT</p>
          </div>
        </div>
        <div className="headerButtons-sh">
          {logOrRegisterButtons.map((buttonData, i) => (
            <HeaderButton
              key={`header-item-${i}`}
              {...buttonData}
              isActive={whichButtonActive === buttonData.label}
            />
          ))}
        </div>

      </header>
    </div>
  );
}
