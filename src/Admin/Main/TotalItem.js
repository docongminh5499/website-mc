import React, { Component } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaLongArrowAltUp } from 'react-icons/fa';

export default class TotalItem extends Component {
  static defaultProps = {
    data: 10000,
    icon: <IoIosCloseCircle />,
    percentBar: '70%',
    title: 'My title',
    percentage: '+1%',
    backgroundColor: '#4CBD6C'
  };

  componentDidMount() {
    this.bar.style.width = this.bar.getAttribute('data-value', '0%');
  }

  render() {
    const { data, icon, percentBar, title, percentage, backgroundColor } = this.props;
    return (
      <div className='main__total-item' style={{ backgroundColor: backgroundColor }}>
        <div className='main__total-item-data'>
          <h5>{data}</h5>
          {icon}
        </div>
        <div className='main__total-item-bar'>
          <div data-value={percentBar} ref={item => (this.bar = item)}></div>
        </div>
        <div className='main__total-item-inscrease'>
          <p>{title}</p>
          <div>
            <p>{percentage}</p>
            <FaLongArrowAltUp />
          </div>
        </div>
      </div>
    );
  }
}
