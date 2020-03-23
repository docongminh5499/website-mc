import React, { Component } from 'react';
import './WishlistSidebar.css';
import { MdClose } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import Loading from '../Loading/Loading';

const EmptySidebar = props => {
  return (
    <React.Fragment>
      <div className='wishlist__content--empty'>
        <IoMdHeartEmpty />
        <p>No products were added to the wishlist.</p>
        <input
          type='button'
          value='RETURN TO SHOP'
          onClick={() => props.ChangeStateSidebar('wishlists_sidebar', false)}
        />
      </div>
    </React.Fragment>
  );
};

class WishlistItem extends Component {
  constructor(props) {
    super(props);
    this.state = { onDelete: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.onDelete !== nextState.onDelete;
  }

  static defaultProps = {
    imageUrl: './img/man-product1-color1.jpg',
    data: { name: 'Product name', price: '$100', status: 'In stock' },
    onDeleteItem: () => {},
    onClickButton: () => {}
  };

  onDeleteHandle = () => {
    this.setState({ onDelete: true });
    setTimeout(this.props.onDeleteItem, 1000);
  };

  render() {
    const { imageUrl, data, onClickButton } = this.props;
    return (
      <div className='wishlist__item-wrapper'>
        <div className={`loading ${this.state.onDelete ? 'loading--active' : 'loading--inactive'}`}>
          <Loading />
        </div>
        <div className='wishlist__item-image'>
          <img src={imageUrl} alt='' />
        </div>
        <div className='wishlist__item-info'>
          <div>
            <a href='./'>{data.name}</a>
            <MdClose onClick={this.onDeleteHandle} title='Remove this product' />
          </div>
          <p>
            {data.price}
            <span className={data.status === 'In stock' ? 'status__text-success' : 'status__text-danger'}>
              {' - ' + data.status}
            </span>
          </p>
          <input title='Select options' type='button' value='Select options' onClick={onClickButton} />
        </div>
      </div>
    );
  }
}

class WishlistSidebarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5]
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen || this.state.data.length !== nextState.data.length;
  }

  static defaultProps = {
    isOpen: false,
    //data: [1, 2, 3, 4, 5],
    ChangeStateSidebar: () => {}
  };

  onClickButton = id => {
    this.props.ChangeStateSidebar('wishlists_sidebar', false, false);
    this.props.ChangeStateSidebar('quickviews', true, false);
  };

  onDeleteItem = id => {
    //this.props.onDelete(id);
    // if (this.props.data.length === 0) this.props.changeStateSidebar('wishlists_sidebar', false);
    this.setState({ data: this.state.data.filter(i => i !== id) }, () => {
      if (this.state.data.length === 0) this.props.ChangeStateSidebar('wishlists_sidebar', false);
    });
  };

  render() {
    const { isOpen, ChangeStateSidebar } = this.props;
    const { data } = this.state;
    const body = data.length === 0 ? <EmptySidebar {...this.props} /> : null;
    return (
      <div className='wishlist__container'>
        <div className={`wishlist ${isOpen ? 'wishlist--active' : 'wishlist--inactive'}`}>
          <MdClose title='Close' onClick={() => ChangeStateSidebar('wishlists_sidebar', false)} />
          <div className='wishlist__title'>
            <h3>Wishlist</h3>
          </div>
          {body}
          {data.map(item => (
            <WishlistItem
              key={item}
              onClickButton={() => this.onClickButton(item)}
              onDeleteItem={() => this.onDeleteItem(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.wishlists_sidebar
});
const mapDispatchToProps = {
  ChangeStateSidebar
};
const WishlistSidebar = connect(mapStateToProps, mapDispatchToProps)(WishlistSidebarClass);
export default WishlistSidebar;
