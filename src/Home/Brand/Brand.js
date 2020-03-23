import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './Brand.css';

export default class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        './img/brand-1.jpg',
        './img/brand-2.jpg',
        './img/brand-3.jpg',
        './img/brand-4.jpg',
        './img/brand-5.jpg',
        './img/brand-6.jpg'
      ]
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const param = {
      direction: 'horizontal',
      spaceBetween: 0,
      breakpoints: {
        1180: { slidesPerView: 6 },
        850: {
          slidesPerView: 4
        },
        0: {
          slidesPerView: 3
        }
      }
    };

    return (
      <Swiper {...param} containerClass='brand__container' loop={true}>
        {this.state.data.map(url => (
          <div className='brand__item' key={url}>
            <a href='./'>
              <img src={url} alt='Brand' />
            </a>
          </div>
        ))}
      </Swiper>
    );
  }
}
