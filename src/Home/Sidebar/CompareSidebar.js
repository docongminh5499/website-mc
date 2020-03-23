import React, { Component } from 'react';
import './CompareSidebar.css';
import { MdClose } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';

class CompareItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: './img/man-product1-color1.jpg',
      isHover: false,
      onDelete: false
    };
  }

  componentDidMount() {
    this.info.style.left = (15 + this.wrapper.clientWidth - this.info.clientWidth) / 2 + 'px';
  }

  onDeleteHandle = () => {
    this.setState({ onDelete: true });
    setTimeout(this.props.onDelete, 700);
  };

  render() {
    return (
      <div
        title={this.props.item.name}
        className='compare__item-wrapper'
        ref={item => (this.wrapper = item)}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}>
        <div className={`loading ${this.state.onDelete ? 'loading--active' : 'loading--unactive'}`}>
          <Loading />
        </div>
        <div
          className={`compare__close-item ${
            this.state.isHover ? 'compare__close-item--active' : 'compare__close-item--hidden'
          }`}>
          <MdClose onClick={this.onDeleteHandle} title='Remove this product' />
        </div>
        <img src={this.state.src} alt='' />
        <div
          title={this.props.item.name}
          className={`compare__item-info ${
            this.state.isHover ? 'compare__item-info--active' : 'compare__item-info--hidden'
          }`}
          ref={item => (this.info = item)}>
          <img src={this.state.src} alt='' />
          <a href='./'>{this.props.item.name}</a>
        </div>
      </div>
    );
  }
}

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 321, name: 'Product 1' }, { id: 42, name: 'Product 2' }, { id: 13, name: 'Product 3' }, null]
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const data = this.state.data.filter(i => i);
    const nextData = nextState.data.filter(i => i);
    return this.props.isOpen !== nextProps.isOpen || data.length !== nextData.length;
  }

  onDeleteItem = id => {
    const data = this.state.data
      .map(item => {
        if (item && item.id === id) return null;
        return item;
      })
      .sort();

    this.setState({ data: data }, () => {
      if (this.state.data.filter(i => i).length === 0) this.props.ChangeStateSidebar('compares_sidebar', false);
    });

    // this.props.onDelete(id);
    // if (this.props.data.filter(item => item).length === 0) this.props.onClose('compares_sidebar', false);
  };

  onClearAll = () => {
    this.setState({ data: [] }, () => this.props.ChangeStateSidebar('compares_sidebar', false));
    // this.props.clearAll();
    // this.props.onClose('compares_sidebar', false);
  };

  getItem = (item, index) => {
    if (item) return <CompareItem item={item} key={item.id} onDelete={() => this.onDeleteItem(item.id)} />;
    return <img src='./img/placeholder.png' alt='' key={index} />;
  };

  render() {
    const { isOpen, ChangeStateSidebar } = this.props;
    const { data } = this.state;
    return (
      <div className='compare__container'>
        <div className={`compare ${isOpen ? 'compare--active' : 'compare--inactive'}`}>
          <MdKeyboardArrowDown title='Close' onClick={() => ChangeStateSidebar('compares_sidebar', false)} />
          <div className='compare__title'>
            <p>Compare products</p>
            <p>( {data.filter(item => item).length} products )</p>
          </div>
          <div className='compare__image'>{data.map(this.getItem)}</div>
          <div>
            {data.filter(item => item).length > 0 && (
              <div className='compare__button-wrapper'>
                <p onClick={this.onClearAll} title='Clear all'>
                  Clear all
                </p>
                <input type='button' value="LET'S COMPARE !" title="Let's compare" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.compares_sidebar
});
const mapDispatchToProps = {
  ChangeStateSidebar
};
const CompareSidebar = connect(mapStateToProps, mapDispatchToProps)(Compare);
export default CompareSidebar;
