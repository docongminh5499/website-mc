import React, { Component } from 'react';
import './SearchSidebar.css';
import { connect } from 'react-redux';

class Search extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }
  render() {
    const { isOpen } = this.props;
    return (
      <div className='search-sidebar__container'>
        <div className={`search-sidebar ${isOpen ? 'search-sidebar--active' : 'search-sidebar--inactive'}`}>
          <input placeholder="I'm shopping for ..." type='text' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.sidebar.search
});

const SearchSidebar = connect(mapStateToProps)(Search);
export default SearchSidebar;
