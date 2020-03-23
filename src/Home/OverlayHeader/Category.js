import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeOverlayHeaderState } from '../../Store/Action/OverlayHeaderAction';
import { MdClose } from 'react-icons/md';
import './Category.css';

class CategoryOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      women: true,
      men: false
    };
  }

  classNameInit = condition =>
    `cate-overlay__child-nav ${condition ? 'cate-overlay__child-nav--active' : 'cate-overlay__child-nav--unactive'}`;

  stylesCategory = () => {
    const navParent = document.querySelector('.cate-overlay__parent-nav'),
      navChild = Array.from(document.querySelectorAll('.cate-overlay__child-nav')),
      myHeader = document.querySelector('.home');
    //style span for parent nav
    const baseLeft = navParent.childNodes[0].getBoundingClientRect().left - myHeader.getBoundingClientRect().left;
    navParent.lastChild.style.width = navParent.childNodes[0].clientWidth + 'px';
    navParent.lastChild.style.left = baseLeft + 'px';
    // On hover parent nav
    navParent.childNodes[0].onmouseenter = () => {
      if (this.state.women === false) {
        navParent.lastChild.style.left = baseLeft + 'px';
        navParent.lastChild.style.width = navParent.childNodes[0].clientWidth + 'px';
      }
      this.setState({ women: true, men: false });
    };
    navParent.childNodes[1].onmouseenter = () => {
      if (this.state.men === false) {
        navParent.lastChild.style.left = baseLeft + navParent.childNodes[0].clientWidth + 'px';
        navParent.lastChild.style.width = navParent.childNodes[1].clientWidth + 'px';
      }
      this.setState({ men: true, women: false });
    };
    // Style for child nav
    navChild.forEach(item => {
      const child = Array.from(item.childNodes),
        baseLeftChild = item.childNodes[0].getBoundingClientRect().left - myHeader.getBoundingClientRect().left;
      // Base styles
      const span = child.pop();
      span.style.width = '0px';
      span.style.left = baseLeftChild + 'px';
      // Loop through child array
      child.reduce((totalWidth, itemChild) => {
        itemChild.onmouseenter = () => {
          span.style.width = itemChild.clientWidth + 'px';
          span.style.left = baseLeftChild + totalWidth + 'px';
        };
        return totalWidth + itemChild.clientWidth;
      }, 0);
    });
  };

  styleAfterResize = () => {
    this.setState({ women: true, men: false }, () => this.stylesCategory());
  };

  componentDidMount() {
    this.stylesCategory();
    window.addEventListener('resize', this.styleAfterResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.styleAfterResize);
  }

  render() {
    const { isOpen, onClose } = this.props;
    const classWrapper = `cate-overlay__wrapper ${
      isOpen ? 'cate-overlay__wrapper--active' : 'cate-overlay__wrapper--unactive'
    }`;

    return (
      <div className={classWrapper}>
        <MdClose onClick={onClose} className='cate-overlay__close-icon' />
        <div className='cate-overlay__parent-nav'>
          <a href='./'>WOMEN</a>
          <a href='./'>MEN</a>
          <span></span>
        </div>
        <div>
          <div className={this.classNameInit(this.state.women)}>
            <a href='./'>Clothing</a>
            <a href='./'>Accessories</a>
            <a href='./'>Life</a>
            <a href='./'>Sale</a>
            <a href='./'>Gifts</a>
            <span></span>
          </div>
          <div className={this.classNameInit(this.state.men)}>
            <a href='./'>Clothing</a>
            <a href='./'>Accessories</a>
            <a href='./'>Life</a>
            <a href='./'>Sale</a>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.overlayHeader.categories_overlay
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(ChangeOverlayHeaderState('categories_overlay', false))
});

const Category = connect(mapStateToProps, mapDispatchToProps)(CategoryOverlay);
export default Category;
