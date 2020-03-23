import React, { Component } from 'react';
import './WishlistSidebar.css';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import Loading from '../Loading/Loading';
import { MdClose } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';

const EmptySidebar = props => {
  return (
    <React.Fragment>
      <div className='wishlist__content--empty'>
        <AiOutlineShopping />
        <p>No products in the cart.</p>
        <input type='button' value='RETURN TO SHOP' onClick={() => props.ChangeStateSidebar('carts', false)} />
      </div>
    </React.Fragment>
  );
};

const BottomCart = ({ totalPrice }) => {
  return (
    <div className='cart__bottom'>
      <div>
        <p>Subtotal</p>
        <p>{'$' + totalPrice}</p>
      </div>
      <input type='button' value='VIEW CART' className='button button--view' />
      <input type='button' value='CHECK OUT' className='button button--checkout' />
    </div>
  );
};

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { onDelete: false };
  }
  static defaultProps = {
    imageUrl: './img/man-product1-color1.jpg',
    data: { name: 'Product name', price: '$100', color: 'EKC Blue', quantity: 2, size: 'M' },
    onDeleteItem: () => {}
  };

  onDeleteHandle = () => {
    this.setState({ onDelete: true });
    setTimeout(this.props.onDeleteItem, 1000);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.onDelete !== nextState.onDelete; // And ID
  }

  render() {
    const { imageUrl, data } = this.props;
    return (
      <div className='cart__item-wrapper'>
        <div className={`loading ${this.state.onDelete ? 'loading--active' : 'loading--inactive'}`}>
          <Loading />
        </div>
        <div className='cart__item-image'>
          <img src={imageUrl} alt='' />
        </div>
        <div className='cart__item-info'>
          <div>
            <a href='./'>{data.name}</a>
            <MdClose onClick={this.onDeleteHandle} title='Remove' />
          </div>
          <p>Color: {data.color}</p>
          <p>Size: {data.size}</p>
          <p>{data.quantity + ' x $' + data.price}</p>
        </div>
      </div>
    );
  }
}

class CartSidebarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'Product name 1', price: 10, color: 'EKC Blue', quantity: 2, size: 'M' },
        { id: 2, name: 'Product name 2', price: 40, color: 'EKC Blue', quantity: 2, size: 'M' },
        { id: 3, name: 'Product name 3', price: 30, color: 'EKC Blue', quantity: 2, size: 'M' },
        { id: 4, name: 'Product name 4', price: 25, color: 'EKC Blue', quantity: 2, size: 'M' },
        { id: 5, name: 'Product name 5', price: 34, color: 'EKC Blue', quantity: 2, size: 'M' }
      ]
    };
  }

  static defaultProps = {
    isOpen: false,
    //data: [1, 2, 3, 4, 5],
    ChangeStateSidebar: () => {}
  };

  onDeleteItem = id => {
    this.setState({ data: this.state.data.filter(i => i.id !== id) }, () => {
      if (this.state.data.length === 0) this.props.ChangeStateSidebar('carts', false);
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen || this.state.data.length !== nextState.data.length;
  }

  render() {
    const { isOpen, ChangeStateSidebar } = this.props;
    const { data } = this.state;
    const body = data.length === 0 ? <EmptySidebar {...this.props} /> : null;
    const items = data.map(i => <CartItem key={i.id} data={i} onDeleteItem={() => this.onDeleteItem(i.id)} />);
    const totalPrice = data.reduce((total, cur) => (total += cur.price * cur.quantity), 0);
    return (
      <div className='wishlist__container'>
        <div className={`wishlist ${isOpen ? 'wishlist--active' : 'wishlist--inactive'}`}>
          <MdClose title='Close' onClick={() => ChangeStateSidebar('carts', false)} />
          <div className='wishlist__title'>
            <h3>My Cart</h3>
          </div>
          {body}
          {items}
          {data.length > 0 && <BottomCart totalPrice={totalPrice} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.carts
});
const mapDispatchToProps = {
  ChangeStateSidebar
};
const CartSidebar = connect(mapStateToProps, mapDispatchToProps)(CartSidebarClass);
export default CartSidebar;
