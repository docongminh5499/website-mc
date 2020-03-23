import React, { Component } from 'react';
import Rating from 'react-rating';
import { FiSearch } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import './ListItem.css';

class ListItemClass extends Component {
  onClickHandle = () => {
    this.props.ChangeStateSidebar('recent_view_sidebar', false, false);
    this.props.ChangeStateSidebar('quickviews', true);
  };

  shouldComponentUpdate() {
    return false; // If there is ID product later, should compare it
  }

  render() {
    return (
      <div className='list-item__container'>
        <div className='list-item__image' title='Product name'>
          <img src='./img/man-product1-color2.jpg' alt='product review' />
          <div></div>
          <div title='Quick View' onClick={this.onClickHandle}>
            <FiSearch />
          </div>
        </div>
        <div className='list-item__info'>
          <a href='/' title='Product name'>
            Product name
          </a>
          <Rating
            initialRating={4}
            readonly={true}
            fractions={0.5}
            fullSymbol={<FaStar className='list-item__rating list-item__rating--full' />}
            emptySymbol={<FaStar className='list-item__rating' />}
          />
          <div>
            <p className='list-item__price list-item__price--discount'>$100</p>
            <p className='list-item__price'>$98</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  ChangeStateSidebar
};

const ListItem = connect(null, mapDispatchToProps)(ListItemClass);
export default ListItem;
