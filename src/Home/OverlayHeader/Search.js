import React, { Component } from 'react';
import { MdClose } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { connect } from 'react-redux';
import { ChangeOverlayHeaderState } from '../../Store/Action/OverlayHeaderAction';
import './Search.css';

class SearchOverlay extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }

  render() {
    const { isOpen, onClose } = this.props;
    const classWrapper = `search__wrapper ${isOpen ? 'search__wrapper--active' : 'search__wrapper--inactive'}`;
    return (
      <div className={classWrapper}>
        <GoSearch className='search__icon' />
        <input type='text' placeholder="I'm shopping for ... " autoFocus={true} />
        <MdClose onClick={onClose} className='search__close-icon' title='Close search' />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isOpen: store.overlayHeader.search_overlay
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(ChangeOverlayHeaderState('search_overlay', false))
});

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchOverlay);
export default Search;
