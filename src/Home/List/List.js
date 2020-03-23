import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ListItem from './ListItem';
import './List.css';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { swiper: null };
  }

  static defaultProps = {
    title: 'My title'
  };

  // Swiper function
  updateSwiper = swiper => this.setState({ swiper: swiper });
  goNext = () => this.state.swiper && this.state.swiper.slideNext();
  goPrev = () => this.state.swiper && this.state.swiper.slidePrev();

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='list__container'>
        <div className='list__title'>
          <p>{this.props.title}</p>
          <div>
            <MdKeyboardArrowLeft onClick={this.goPrev} />
            <MdKeyboardArrowRight onClick={this.goNext} />
          </div>
        </div>
        <Swiper getSwiper={this.updateSwiper} spaceBetween={10}>
          <div>
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <div>
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <div>
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </Swiper>
      </div>
    );
  }
}
