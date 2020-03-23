import React, { Component } from 'react';
import './WishlistSidebar.css';
import ListItem from '../List/ListItem';
import { TiEyeOutline } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { connect } from 'react-redux';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';

const EmptySidebar = props => {
  return (
    <React.Fragment>
      <div className='wishlist__content--empty'>
        <TiEyeOutline />
        <p>No products were viewed.</p>
        <input
          type='button'
          value='RETURN TO SHOP'
          onClick={() => props.ChangeStateSidebar('recent_view_sidebar', false)}
        />
      </div>
    </React.Fragment>
  );
};

class RecentViewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5]
    };
  }

  static defaultProps = {
    isOpen: false,
    // data: [1, 2, 3, 4, 5],
    ChangeStateSidebar: () => {}
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }

  render() {
    const { isOpen, ChangeStateSidebar } = this.props;
    const { data } = this.state;
    const body = data.length === 0 ? <EmptySidebar {...this.props} /> : null;
    const items = data.map(i => <ListItem key={i} />);
    return (
      <div className='wishlist__container'>
        <div className={`wishlist ${isOpen ? 'wishlist--active' : 'wishlist--inactive'}`}>
          <MdClose title='Close' onClick={() => ChangeStateSidebar('recent_view_sidebar', false)} />
          <div className='wishlist__title'>
            <h3>Recently Viewed</h3>
          </div>
          {body}
          {items}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.recent_view_sidebar
});
const mapDispatchToProps = {
  ChangeStateSidebar
};
const RecentView = connect(mapStateToProps, mapDispatchToProps)(RecentViewClass);
export default RecentView;
