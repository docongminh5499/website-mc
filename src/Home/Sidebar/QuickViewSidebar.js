import React, { Component } from 'react';
import './QuickViewSidebar.css';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import Swiper from 'react-id-swiper';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdClose, MdMailOutline } from 'react-icons/md';
import { FaTwitter, FaFacebookF, FaPinterestP, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

class CheckButton extends Component {
  static defaultProps = {
    label: '',
    icon: false,
    isCheck: false,
    color: '#eaeaea',
    onClick: () => {}
  };

  getClassName = () => {
    let baseClass = 'quickview__button ';
    if (this.props.isCheck) baseClass += 'quickview__button--active ';
    if (this.props.color === '#eaeaea') baseClass += 'quickview__button-has-label';
    return baseClass;
  };

  render() {
    const { label, icon, isCheck, color, onClick } = this.props;
    return (
      <div className='quickview__button-wrapper' onClick={onClick}>
        <div className={this.getClassName()} style={{ backgroundColor: color }}>
          {icon && isCheck && <FiCheck />}
        </div>
        {label !== '' && <p>{label}</p>}
      </div>
    );
  }
}

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper: null,
      size: '',
      color: '',
      quantity: 1,
      images: [
        './img/man-product1-color1.jpg',
        './img/man-product2-color1.jpg',
        './img/man-product3-color1.jpg',
        './img/man-product4-color1.jpg'
      ]
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const propCond = nextProps.isOpen !== this.props.isOpen;
    const stateCond =
      nextState.size !== this.state.size ||
      nextState.color !== this.state.color ||
      nextState.quantity !== this.state.quantity;
    return propCond || stateCond;
  }

  static defaultProps = {
    isOpen: false,
    ChangeStateSidebar: () => {},
    data: {
      name: 'Product name',
      rating: 3.5,
      price: '$100',
      isDiscount: true,
      priceOnSale: '$80',
      descriptions:
        'Lorem ipsum dolor sit amet, harum nihil et pri, diam cetero adversarium sed ad. Affert animal pri at, vel cu movet accusam. Ut movet ornatus legimus sed, pri in suas clita epicuri. Stet mollis sea ea. Quo tollit laoreet at, lucilius tractatos temporibus est no. In sit solet senserit, no dicit vivendum mandamus eos.',
      size: ['S', 'M', 'L'],
      color: ['#f76b6a', 'gray']
    }
  };

  onClickOption = (option, label) => {
    if (option === 'size') this.setState({ size: label });
    else if (option === 'color') this.setState({ color: label });
  };

  onClickNavSwiper = direction => {
    direction === 'left' && this.state.swiper && this.state.swiper.slidePrev();
    direction === 'right' && this.state.swiper && this.state.swiper.slideNext();
  };

  updateSwiper = swiper => this.setState({ swiper });
  descreaseQuantity = () => this.state.quantity > 1 && this.setState({ quantity: this.state.quantity - 1 });
  inscreaseQuantity = () => this.setState({ quantity: this.state.quantity + 1 });

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen === false) return { size: '', color: '', quantity: 1 };
    else return null;
  }

  render() {
    const { isOpen, ChangeStateSidebar, data } = this.props;
    const swiperImage = this.state.images.map(src => <img src={src} alt='' key={src} />);

    return (
      <div className='quickview__container'>
        <div className={`quickview ${isOpen ? 'quickview--active' : 'quickview--inactive'}`}>
          <MdClose title='Close' onClick={() => ChangeStateSidebar('quickviews', false)} />
          {/* SWIPER CONTAINER */}
          <div className='quickview__swiper-container'>
            <Swiper slidesPerView={2} containerClass='quickview__swiper' getSwiper={this.updateSwiper}>
              {swiperImage}
            </Swiper>
            <FiChevronLeft onClick={() => this.onClickNavSwiper('left')} className='button button-left' />
            <FiChevronRight onClick={() => this.onClickNavSwiper('right')} className='button button-right' />
          </div>
          {/* BASIC INFO - NAME, RATING, PRICE */}
          <div className='quickview__basic-info'>
            <a href='./'>{data.name}</a>
            <Rating
              initialRating={data.rating}
              readonly={true}
              fractions={0.5}
              fullSymbol={<FaStar className='quickview_rating quickview_rating--full' />}
              emptySymbol={<FaStar className='quickview_rating' />}
            />
            <div>
              <p className={data.isDiscount ? 'discount' : ''}>{data.price}</p>
              {data.isDiscount && <p>{data.priceOnSale}</p>}
            </div>
          </div>
          {/* DESCRIPTIONS */}
          <div className='quickview__description'>
            <p>{data.descriptions}</p>
          </div>
          {/* OPTION - SIZE, COLOR, QUANTITY */}
          <div className='quickview__option'>
            <div className='quickview__option--color'>
              <p> COLOR: </p>
              <div>
                {data.color.map(item => (
                  <CheckButton
                    key={item}
                    color={item}
                    onClick={() => this.onClickOption('color', item)}
                    isCheck={this.state.color === item}
                  />
                ))}
              </div>
            </div>
            <div className='quickview__option--size'>
              <p> SIZE: </p>
              <div>
                {data.size.map(item => (
                  <CheckButton
                    key={item}
                    label={item}
                    icon={true}
                    onClick={() => this.onClickOption('size', item)}
                    isCheck={this.state.size === item}
                  />
                ))}
              </div>
            </div>

            <div className='quickview__clear-button'>
              <p onClick={() => this.setState({ size: '', color: '' })}>CLEAR</p>
            </div>

            <div className={'quickview__button ' + (this.state.color && this.state.size ? '' : 'disabled')}>
              <div>
                <input type='number' value={this.state.quantity} readOnly={true} />
                <div>
                  <input type='button' value='+' onClick={this.inscreaseQuantity} />
                  <input type='button' value='-' onClick={this.descreaseQuantity} />
                </div>
                <input type='button' value='ADD TO CART' className='quickview__add-cart' />
              </div>
              <input type='button' value='BUY NOW' className='quickview__buy-now' />
            </div>
          </div>
          {/* TAG CONTAINER*/}
          <div className='quickview__tag'>
            <p>
              <strong>SKU: </strong>
              <span> N/A</span>
            </p>
            <p>
              <strong>Categories: </strong>
              <span> Fleece, </span>
              <span>Denim</span>
            </p>
            <p>
              <strong>Tags: </strong>
              <span> Handsome, </span>
              <span>Menly</span>
            </p>
          </div>
          {/* ICON CONTAINER */}
          <div className='quickview__icon'>
            <FaTwitter title='Share on Twitter' />
            <FaFacebookF title='Share on Facebook' />
            <FaPinterestP title='Pin on Printest' />
            <FaLinkedinIn title='Share on LinkedIn' />
            <FaTelegram title='Share on Telegram' />
            <MdMailOutline title='Email to your friends' />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.quickviews
});

const mapDispatchToProps = {
  ChangeStateSidebar
};

const QuickViewSidebar = connect(mapStateToProps, mapDispatchToProps)(QuickView);
export default QuickViewSidebar;
