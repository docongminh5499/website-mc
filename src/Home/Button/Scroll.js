import React, { Component } from 'react';
import styles from './styles.module.css';
import { IoIosArrowUp } from 'react-icons/io';

export default class ScrollButton extends Component {
  onScroll = () => {
    if (window.pageYOffset > 200) this.button.classList.remove(styles.wrapperScroll_hidden);
    else this.button.classList.add(styles.wrapperScroll_hidden);
  };

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <div
      ref={item => (this.button = item)}
      title='Scroll to top'
      className={styles.wrapperScroll}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <IoIosArrowUp />
    </div>
  );
}
