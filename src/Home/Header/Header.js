import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHeart, FiRefreshCw } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { IoIosKeypad } from 'react-icons/io';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import { ChangeOverlayHeaderState } from '../../Store/Action/OverlayHeaderAction';
import './Header.css';
import Search from '../OverlayHeader/Search';
import Category from '../OverlayHeader/Category';
import NavBar from './NavBar';

class HeaderClass extends Component {
  scrollToFixHeader = () => {
    const header = document.querySelector('.header__main');
    if (window.pageYOffset > header.offsetTop) header.classList.add('header--fixed');
    else header.classList.remove('header--fixed');
  };

  componentDidMount = () => window.addEventListener('scroll', this.scrollToFixHeader);
  componentWillUnmount = () => window.removeEventListener('scroll', this.scrollToFixHeader);

  render() {
    const { ChangeStateSidebar, ChangeOverlayHeaderState } = this.props;
    return (
      <div className='header'>
        <div className='header__top'>
          <div>
            <p>English</p>
            <div>
              <p>French</p>
              <p>Vietnamese</p>
            </div>
          </div>
          <div>
            <p>US Dollar</p>
            <div>
              <p>Euro (EUR)</p>
              <p>VND</p>
            </div>
          </div>
          <div>
            <p>Order Tracking</p>
          </div>
          <div>
            <FaRegUserCircle />
            <Link to='/admin-site'>Login / Register</Link>
          </div>
        </div>
        <div className='header__main'>
          <Search />
          <Category />
          <div className='header__icon header__icon--left'>
            <GoThreeBars onClick={() => ChangeStateSidebar('navigations', true)} />
            <FiSearch onClick={() => ChangeStateSidebar('search', true)} />
          </div>
          <a href='/' className='header__logo'>
            Elessi
          </a>
          <div className='header__navbar'>
            <NavBar />
          </div>
          <div className='header__icon'>
            <IoIosKeypad
              title='Product Categories'
              onClick={() =>
                window.outerWidth > 850
                  ? ChangeOverlayHeaderState('categories_overlay', true)
                  : ChangeStateSidebar('categories', true)
              }
            />
            <FiShoppingBag title='Cart' onClick={() => ChangeStateSidebar('carts', true)} />
            <FiHeart title='Wishlist' onClick={() => ChangeStateSidebar('wishlists_sidebar', true)} />
            <FiRefreshCw title='Compare' onClick={() => ChangeStateSidebar('compares_sidebar', true)} />
            <FiSearch title='Search' onClick={() => ChangeOverlayHeaderState('search_overlay', true)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  ChangeStateSidebar,
  ChangeOverlayHeaderState
};

const Header = connect(null, mapDispatchToProps)(HeaderClass);
export default Header;
