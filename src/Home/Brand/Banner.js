import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './Banner.css';

export default class Banner extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <Swiper slidesPerView={1} loop={true} containerClass='banner__container'>
      <div className='banner'>
        <p>UP TO 70% OFF THE ENTRIRE STORE! – MADE WITH LOVE by Nasa Studio</p>
      </div>
      <div className='banner'>
        <p>UP TO 70% OFF THE ENTRIRE STORE! – MADE WITH LOVE by Nasa Studio</p>
      </div>
    </Swiper>
  );
}
