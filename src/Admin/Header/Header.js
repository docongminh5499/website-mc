import React from 'react';
import { Route } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { FaUserFriends, FaCoffee, FaBell } from 'react-icons/fa';
import {
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineBell,
  AiOutlineFolder,
  AiOutlineSetting,
  AiOutlinePoweroff
} from 'react-icons/ai';
import { TiArrowBack, TiFlag } from 'react-icons/ti';
import './Header.css';

export default class Header extends React.Component {
  componentDidMount() {
    document.querySelectorAll('.admin-header__info > div').forEach(item => {
      item.onclick = () => {
        document.querySelectorAll('div.active').forEach(e => e.parentNode !== item && e.classList.remove('active'));
        item.lastChild.classList.toggle('active');
      };
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='admin-header__container'>
        <div className='admin-header__title'>
          <a href='/admin-site'>ELESSI ADMIN</a>
        </div>
        <div className='admin-header__search'>
          <div>
            <input type='text' placeholder='Enter keywords' />
            <AiOutlineSearch title='Search' />
          </div>
        </div>
        <div title='Back to Homepage' className='admin-header__back'>
          <Route path='/' children={({ history }) => <TiArrowBack onClick={() => history.push('/')} />} />
        </div>
        <div className='admin-header__info'>
          <div>
            <AiOutlineMail title='Messages' />
            <span className='span--message' title='Messages'>
              14
            </span>
            <div className='nav__message'>
              <div className='nav__message-title'>
                <p>You have 14 new messages</p>
                <p>14</p>
              </div>
              <div className='nav__message-item'>
                <img src='./img/avatar.jpg' alt='' />
                <div>
                  <p>Jhon Deo</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                  <p>Today, 4:10 PM</p>
                </div>
              </div>
              <div className='nav__message-item'>
                <img src='./img/avatar.jpg' alt='' />
                <div>
                  <p>Sara Jen</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                  <p>Yesterday, 8:30 AM</p>
                </div>
              </div>
              <div className='nav__message-item'>
                <img src='./img/avatar.jpg' alt='' />
                <div>
                  <p>Dannish Josh</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                  <p>21 Mar 2020, 2:50 PM</p>
                </div>
              </div>
              <div className='nav__message-item'>
                <img src='./img/avatar.jpg' alt='' />
                <div>
                  <p>Katrina Mccoy</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                  <p>19 Mar 2020, 4:10 PM</p>
                </div>
              </div>
              <div className='nav__message-see-all'>
                <p> See All Messages</p>
              </div>
            </div>
          </div>
          <div>
            <AiOutlineBell title='Notifications' />
            <span className='span--notification' title='Notifications'>
              8
            </span>
            <div className='nav__notification'>
              <div className='nav__notification-title'>
                <p>You have 8 notifications</p>
                <p>8</p>
              </div>
              <div className='nav__notification-item'>
                <div>
                  <FaUserFriends style={{ color: '#14B6FF', fontSize: '2.3rem' }} />
                </div>
                <div>
                  <p>New Registered Users</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                </div>
              </div>
              <div className='nav__notification-item'>
                <div>
                  <FaCoffee style={{ color: '#FF8800', fontSize: '2.3rem' }} />
                </div>
                <div>
                  <p>New Received Orders</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                </div>
              </div>
              <div className='nav__notification-item'>
                <div>
                  <FaBell style={{ color: '#F43643', fontSize: '2.3rem' }} />
                </div>
                <div>
                  <p>New Updates</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus dui, vel venenatis libero.
                    Pellentesque rhoncus velit vitae tempus vulputate.
                  </p>
                </div>
              </div>
              <div className='nav__notification-see-all'>
                <p> See All Notifications</p>
              </div>
            </div>
          </div>
          <div>
            <TiFlag title='Languages' />
            <div className='nav__language'>
              <div>
                <ReactCountryFlag countryCode='GB' svg />
                <p>English</p>
              </div>
              <div>
                <ReactCountryFlag countryCode='FR' svg />
                <p>French</p>
              </div>
              <div>
                <ReactCountryFlag countryCode='CN' svg />
                <p>Chinese</p>
              </div>
              <div>
                <ReactCountryFlag countryCode='DE' svg />
                <p>German</p>
              </div>
            </div>
          </div>
          <div>
            <img src='./img/avatar.jpg' alt='' title='Settings' />
            <div className='nav__avatar'>
              <div>
                <div>
                  <img src='./img/avatar.jpg' alt='' />
                </div>
                <div>
                  <h4>Sarajhom Mccoy</h4>
                  <p>example@example.com</p>
                </div>
              </div>
              <div>
                <AiOutlineMail />
                <p>Inbox</p>
              </div>
              <div>
                <AiOutlineFolder />
                <p>Account</p>
              </div>
              <div>
                <AiOutlineSetting />
                <p>Setting</p>
              </div>
              <div>
                <AiOutlinePoweroff />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
