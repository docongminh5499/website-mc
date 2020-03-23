import React, { Component } from 'react';
import ValidationMessage from '../Validation/ValidationMessage';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { ValidatorData } from '../Validation/Validator';
import './Footer.css';

class SubscribeEmail extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', error: {} };
    this.rules = { email: { required: true, email: true } };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.email !== nextState.email;
  }

  onChange = e => this.setState({ email: e.target.value });
  onSubmit = () => {
    const errors = ValidatorData(this.state, this.rules);
    this.setState({ error: errors }, () => this.forceUpdate());
    if (!Object.keys(errors).length) {
      // Do submit
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className='footer__subcribe'>
        <div>
          <input
            placeholder='Enter your email here'
            type='text'
            id='inputSubcribe'
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type='button'
            className='subcribeButton'
            value='SUBCRIBE'
            onClick={this.onSubmit}
          />
        </div>
        <ValidationMessage fieldName='email' error={error} />
      </div>
    );
  }
}

export default class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <div className='footer__container'>
      <div>
        <div className='footer__col-address'>
          <h1>Elessi</h1>
          <div>
            <p>Calista Wise 7292 Dictum Av.</p>
            <p>Antonio, Italy. </p>
            <p>(+01)-800-3456-88 </p>
            <a href='./'>nasathemes@gmail.com </a>
            <a href='./'>elessi.nasatheme.com </a>
          </div>
        </div>
        <div className='footer__col-info'>
          <div>
            <FaTwitter title='Follow us on Twitter' />
            <FaFacebookF title='Follow us on Facebook' />
            <AiOutlineMail title='Send us an email' />
            <FaInstagram title='Follow us on Instagram' />
          </div>
          <a href='./'>Delivery Information</a>
          <a href='./'>Privacy Policy</a>
          <a href='./'>Terms & Condition</a>
          <a href='./'>Search Terms</a>
          <a href='./'>Order & Return</a>
        </div>
        <div className='footer__col-newsletter'>
          <div>
            <h2>Newsletter</h2>
            <SubscribeEmail />
          </div>
          <div>
            <div>
              <a href='./'>Customer Service</a>
              <a href='./'>Privacy Policy</a>
              <a href='./'>Terms & Condition</a>
              <a href='./'>Best Seller</a>
              <a href='./'>Manufactures</a>
            </div>
            <div className='footer__time'>
              <div>
                <p>Monday - Friday</p>
                <p>08:00 - 20:00</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>09:00 - 21:00</p>
              </div>
              <div>
                <p>Sunday</p>
                <p>13:00 - 22:00</p>
              </div>
              <div>
                <img src='./img/payment-icons.png' alt='payment icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>
          &copy; 2019 <strong>Nasatheme</strong> - All Right reserved!
        </p>
        <div>
          <a href='./'>Privacy & Cookies</a>
          <a href='./'>Terms & Conditions</a>
          <a href='./'>Accessibility</a>
          <a href='./'>Store Directory</a>
          <a href='./'>About Us</a>
        </div>
      </div>
    </div>
  );
}
