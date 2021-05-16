import React, { useState, useEffect } from 'react';
import HeaderButton from './HeaderButton';
import './Header.scss';
import logo from '../../../docs/BFKlogo.jpg';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import {logout} from '../../../actions/loginActions'

function Header({ user, logout }) {
  const [whichButtonActive, changeActiveButton] = useState('');

  const path = useLocation();

  useEffect(() => {
    detectActiveButton();
  }, [path]);

  function detectActiveButton() {
    if (path.pathname === '/riport') {
      changeActiveButton('Riport');
    } else {
      changeActiveButton('Projektek');
    }
  }

  const headersData = [
    {
      label: 'Projektek',
      href: '/projektek',
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
      href: '/',
      onClick: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('rights');
        //localStorage.removeItem('persist:root');
        logout()
        changeActiveButton('Kilépés');
      },
    },
  ];

  return (
    <header className="app-header">

      <div className="companyData">
        <img className="logo" src={logo} alt={"BFKlogo"} />
        <div className="companyName">
          <p className="nametext">BUDAPEST</p>
          <p className="nametext">FEJLESZTÉSI</p>
          <p className="nametext">KÖZPONT</p>
        </div>
      </div>

      <div className="headerButtons">
        {headersData.map((buttonData, i) => (
          <HeaderButton
            key={`header-item-${i}`}
            {...buttonData}
            isActive={whichButtonActive === buttonData.label}
          />
        ))}
      </div>

      <div className="userName">
        {`felhasználó: ${user}`}
      </div>
    </header>
  );
}

export default connect(null, {logout})(Header);