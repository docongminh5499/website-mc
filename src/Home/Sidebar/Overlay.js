import React from 'react';
import './Overlay.css';
import { connect } from 'react-redux';
import { ResetAllSidebar } from '../../Store/Action/SidebarAction';

const mapStateToProps = store => ({
  isOpen: store.sidebar.overlay
});

const mapDispatchToProp = {
  ResetAllSidebar
};

const Overlay = connect(
  mapStateToProps,
  mapDispatchToProp
)(props => (
  <div
    onClick={() => props.ResetAllSidebar()}
    className={`overlay-sidebar ${props.isOpen ? 'overlay-sidebar--active' : 'overlay-sidebar--inactive'}`}></div>
));

export default Overlay;
