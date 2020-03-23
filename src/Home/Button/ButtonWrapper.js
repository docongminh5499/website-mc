import React, { Component } from 'react';
import { ChangeStateSidebar } from '../../Store/Action/SidebarAction';
import { connect } from 'react-redux';
import RecentViewButton from './RecentView';
import ScrollButton from './Scroll';

const mapDispatchToProps = dispatch => ({
  onClick: (name, value, overlay) => dispatch(ChangeStateSidebar(name, value, overlay))
});

const Button = connect(
  null,
  mapDispatchToProps
)(
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }

    render = () => (
      <div>
        <RecentViewButton onClick={() => this.props.onClick('recent_view_sidebar', true)} />
        <ScrollButton />
      </div>
    );
  }
);

export default Button;
