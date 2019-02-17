import React, { PureComponent } from 'react';
import './Header.css';
import { Button } from '..';
import Logo from './Logo/Logo';

class Header extends PureComponent {
  render() {
    return (
      <div className="Header">
        <Logo />
        <Button text="Resume" />
      </div>


    );
  }
}

export default Header;
