import React, { Component } from 'react';
import styles from './styles.module.css';
import { WiTime3 } from 'react-icons/wi';

export default class RecentViewButton extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <div title='Products viewed' className={styles.wrapperRecent} onClick={this.props.onClick}>
      <WiTime3 />
    </div>
  );
}
