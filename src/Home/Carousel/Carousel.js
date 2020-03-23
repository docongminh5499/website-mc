import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper: null,
      data: [
        {
          src: './img/slider01.jpg',
          text1: 'ELESSI STORE',
          text2: 'Autumn & Winter 2019',
          btn: 'SHOP NOW'
        },
        {
          src: './img/slider02.jpg',
          text1: 'NEW FASHION',
          text2: 'Spring Summner Collection',
          btn: 'SHOP NOW'
        },
        {
          src: './img/slider03.jpg',
          text1: 'ELESSI STORE',
          text2: 'Looking for the best price',
          btn: 'SHOP NOW'
        }
      ]
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const params = {
      speed: 1000,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination.carousel__pagination',
        clickable: true
      }
    };
    return (
      <div className='carousel__container'>
        <Swiper containerClass='carousel__main' {...params} getSwiper={swiper => this.setState({ swiper })}>
          {this.state.data.map(item => (
            <div key={item.src}>
              <img src={item.src} alt='' />
              <div>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
                <input type='button' value={item.btn} />
              </div>
            </div>
          ))}
        </Swiper>
        <FiChevronLeft
          className='carousel__control carousel__control--left'
          onClick={() => this.state.swiper && this.state.swiper.slidePrev()}
        />
        <FiChevronRight
          className='carousel__control carousel__control--right'
          onClick={() => this.state.swiper && this.state.swiper.slideNext()}
        />
      </div>
    );
  }
}
