import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import { MdClose } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './CategorySidebar.css';

class CategorySidebarClass extends Component {
  collapse = () => {
    const collapseMenu = document.querySelectorAll('.category-sidebar__dropdown');
    for (let index = 0; index < collapseMenu.length; index++)
      collapseMenu[index].childNodes[0].lastChild.onclick = () => {
        collapseMenu[index].classList.toggle('category-sidebar__dropdown--active');
      };
  };

  componentDidMount() {
    this.collapse();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }

  render() {
    const { isOpen, ChangeStateSidebar } = this.props;
    return (
      <div className='category-sidebar__wrapper'>
        <div className={`category-sidebar ${isOpen ? 'category-sidebar--active' : 'category-sidebar--inactive'}`}>
          <div className='category-sidebar__title'>
            <p>Categories</p>
            <MdClose title='Close Categories Filter' onClick={() => ChangeStateSidebar('categories', false)} />
          </div>
          <div className='category-sidebar__dropdown'>
            <div>
              <a href='./'>Women</a>
              <MdKeyboardArrowDown />
            </div>
            <div>
              <div className='category-sidebar__dropdown'>
                <div>
                  <a href='./'>Clothing</a>
                  <MdKeyboardArrowDown />
                </div>
                <div>
                  <a href='./'>Activewear</a>
                  <a href='./'>Biker jackets</a>
                  <a href='./'>Blouses & shirts</a>
                  <a href='./'>Coats and jackets</a>
                  <a href='./'>Denim</a>
                  <a href='./'>Dresses</a>
                  <a href='./'>Dungarees & Jumpsuits</a>
                </div>
              </div>
              <a href='./'>Accessories</a>
              <a href='./'>Life</a>
              <a href='./'>Sale</a>
              <a href='./'>Gifts</a>
            </div>
          </div>
          <div className='category-sidebar__dropdown'>
            <div>
              <a href='./'>Men</a>
              <MdKeyboardArrowDown />
            </div>
            <div>
              <div className='category-sidebar__dropdown'>
                <div>
                  <a href='./'>Clothing</a>
                  <MdKeyboardArrowDown />
                </div>
                <div>
                  <a href='./'>Activewear</a>
                  <a href='./'>Biker jackets</a>
                  <a href='./'>Blouses & shirts</a>
                  <a href='./'>Coats and jackets</a>
                  <a href='./'>Denim</a>
                  <a href='./'>Dresses</a>
                  <a href='./'>Dungarees & Jumpsuits</a>
                </div>
              </div>
              <a href='./'>Accessories</a>
              <a href='./'>Life</a>
              <a href='./'>Sale</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.categories
});

const mapDispatchToProps = {
  ChangeStateSidebar
};

const CategorySidebar = connect(mapStateToProps, mapDispatchToProps)(CategorySidebarClass);
export default CategorySidebar;
