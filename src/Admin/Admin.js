import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

export default class Admin extends Component {
  componentDidMount() {
    document.title = 'Admin Site';
    window.addEventListener('click', this.clickHandler);
  }

  clickHandler = e => {
    const active = document.querySelector('div.active');
    if (active === null) return;
    if (
      active.parentNode.classList.contains('main__nav') &&
      e.target !== active &&
      !active.contains(e.target) &&
      !active.previousSibling.contains(e.target)
    )
      active.classList.remove('active');
    else if (!active.parentNode.contains(e.target)) active.classList.remove('active');
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.clickHandler);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
