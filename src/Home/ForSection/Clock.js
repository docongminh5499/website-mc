import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  componentDidMount() {
    const format = time => (time.toString().length < 2 ? '0' + time : time);
    let totalSeconds = 25920000;
    this.interval = setInterval(() => {
      const days = Math.floor(totalSeconds / 86400),
        hours = Math.floor((totalSeconds % 86400) / 3600),
        mins = Math.floor((totalSeconds % 3600) / 60),
        secs = Math.floor(totalSeconds % 60);
      this.days.innerHTML = format(days);
      this.hours.innerHTML = format(hours);
      this.mins.innerHTML = format(mins);
      this.secs.innerHTML = format(secs);
      if (totalSeconds-- < 0) {
        clearInterval(this.interval);
        this.clock.classList.add('clock--expired');
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='clock__container' ref={item => (this.clock = item)}>
        <div className='clock'>
          <div>
            <span ref={item => (this.days = item)}>00</span>
            <span>DAYS</span>
          </div>
          <div>
            <span ref={item => (this.hours = item)}>00</span>
            <span>HOURS</span>
          </div>
          <div>
            <span ref={item => (this.mins = item)}>00</span>
            <span>MINS</span>
          </div>
          <div>
            <span ref={item => (this.secs = item)}>00</span>
            <span>SECS</span>
          </div>
        </div>
      </div>
    );
  }
}
