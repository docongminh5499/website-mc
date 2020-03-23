import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import Item from './Item';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './ForSection.css';

export default class ForSection extends Component {
  constructor(props) {
    super(props);
    this.state = { swiper: null };
    this.params = {
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        850: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  static defaultProps = {
    imagePosition: 'left',
    title: 'Title',
    imageUrl: './img/forher.jpg'
  };

  static propTypes = {
    imagePosition: PropTypes.oneOf(['left', 'right']),
    title: PropTypes.string
  };

  updateSwiper = swiper => this.setState({ swiper: swiper });
  goNext = () => this.state.swiper && this.state.swiper.slideNext();
  goPrev = () => this.state.swiper && this.state.swiper.slidePrev();

  render() {
    const classContainer =
      this.props.imagePosition === 'left' ? 'for__container' : 'for__container for__container--reverse';

    return (
      <div className={classContainer}>
        <div className='for__image'>
          <img src={this.props.imageUrl} alt='Background' />
        </div>
        <div className='for__swiper'>
          <div className='for__swiper-title'>
            <p>{this.props.title}</p>
            <div>
              <MdKeyboardArrowLeft onClick={this.goPrev} />
              <MdKeyboardArrowRight onClick={this.goNext} />
            </div>
          </div>
          <Swiper getSwiper={this.updateSwiper} {...this.params}>
            <div>
              <Item />
              <Item />
            </div>
            <div>
              <Item />
              <Item />
            </div>
            <div>
              <Item />
              <Item />
            </div>
            <div>
              <Item />
              <Item />
            </div>
          </Swiper>
          <div className='swiper__shop-now'>
            <a href='/'>Shop now</a>
          </div>
        </div>
      </div>
    );
  }
}
