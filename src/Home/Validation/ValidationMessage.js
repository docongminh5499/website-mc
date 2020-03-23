import React, { Component } from 'react';
import { MdError } from 'react-icons/md';
import styles from './ValidationMessage.module.css';

export default class ValidationMessage extends Component {
  render() {
    const { error, fieldName } = this.props;
    if (!error) return null;
    if (!error[fieldName]) return null;
    return (
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <MdError />
          <span>{error[fieldName][0]}</span>
        </div>
      </div>
    );
  }
}

// field-name --- error
