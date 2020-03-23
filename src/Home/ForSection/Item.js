import React, { Component } from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegEye } from 'react-icons/fa';
import { FiHeart, FiPlus, FiRefreshCw } from 'react-icons/fi';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import Clock from './Clock';
import './Item.css';

class ItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ['#f76b6a', 'gray'],
      selectedColor: '#f76b6a'
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedColor !== this.state.selectedColor;
  }

  render() {
    const color = this.state.color.map(color => (
      <div
        key={color}
        style={{ backgroundColor: color }}
        className={this.state.selectedColor === color ? 'item__color--active' : ''}
        onClick={() => this.setState({ selectedColor: color })}></div>
    ));

    return (
      <div className='item__container'>
        <div className='item__image'>
          <img src='./img/man-product1-color1.jpg' alt='product quickview' title='Product name' />
          <img src='./img/man-product2-color1.jpg' alt='product quickview' title='Product name' />
          <div className='item__badge-wrapper'>
            <span className='item__badge item__badge--hot'>HOT</span>
            <span className='item__badge item__badge--sale'>SALE</span>
            <span className='item__badge item__badge--limit'>LIMITED</span>
          </div>
          <FiHeart title='Wishlist' />
          <div className='item__icon-wrapper'>
            <div title='Quick View' onClick={() => this.props.ChangeStateSidebar('quickviews', true)}>
              <FaRegEye />
            </div>
            <div title='Compare'>
              <FiRefreshCw />
            </div>
          </div>
          <Clock />
          <div className='item__add-cart' title='Add to cart'>
            <div>
              <p>ADD TO CART</p>
            </div>
            <div>
              <FiPlus />
            </div>
          </div>
          <div className='item__size-wrapper'>
            <p>M</p>
            <p className='item__size--active'>L</p>
          </div>
        </div>
        <div className='item__info'>
          <a href='/' title='Product name'>
            Product name
          </a>
          <div>
            <Rating
              initialRating={3.5}
              readonly={true}
              fractions={0.5}
              fullSymbol={<FaStar className='item__rating item__rating--full' />}
              emptySymbol={<FaStar className='item__rating' />}
            />
            <div>{color}</div>
          </div>
          <div>
            <p className='item__price item__price--discount'>$100</p>
            <p className='item__price'>$96</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  ChangeStateSidebar
};

const Item = connect(null, mapDispatchToProps)(ItemClass);
export default Item;
