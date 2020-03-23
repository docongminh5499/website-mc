import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Chart from 'react-apexcharts';
import {
  FaShoppingCart,
  FaDollarSign,
  FaEye,
  FaLeaf,
  FaStar,
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLongArrowAltUp
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlineToTop } from 'react-icons/ai';
import TotalItem from './TotalItem';
import Rating from 'react-rating';
import createMap from '../Map/Map';
import './Main.css';

const ChartInTable = props => (
  <Chart
    width={70}
    type='bar'
    series={[
      {
        name: '',
        data: [1010, 1245, 1574, 1340, 1631, 1839, 1459, 1275, 1594, 1270, 1012, 1335]
      }
    ]}
    options={{
      grid: { show: false, padding: { left: 0, right: 0 } },
      legend: { show: false },
      colors: [props.color],
      fill: { colors: [props.color] },
      stroke: { width: 0 },
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        sparkline: { enabled: false }
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      xaxis: {
        floating: true,
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: { show: false },
        tooltip: { enabled: false }
      },
      yaxis: {
        floating: true,
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: { show: false },
        tooltip: { enabled: false }
      },
      states: { hover: { filter: { type: 'none' } } },
      dataLabels: { enabled: false },
      plotOptions: { bar: { columnWidth: '40%' } }
    }}
  />
);

export default class Main extends Component {
  componentDidMount() {
    document.querySelectorAll('.device__storage .storage__bar > div').forEach(item => {
      item.style.width = item.getAttribute('data-value', '50%');
      item.style.backgroundColor = item.getAttribute('data-color', 'red');
    });
    document.querySelectorAll('.main__nav').forEach(item => {
      item.childNodes[1].onclick = function() {
        document.querySelectorAll('div.active').forEach(e => e.parentNode !== item && e.classList.remove('active'));
        item.lastChild.classList.toggle('active');
      };
    });
    this.button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('scroll', this.displayButton);
    setTimeout(createMap, 1500);
  }

  displayButton = () => {
    if (window.pageYOffset > 300) this.button.classList.add('main__button-top--acitve');
    else this.button.classList.remove('main__button-top--acitve');
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.displayButton);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='main__container'>
        <div className='main__button-top' title='Scroll to top' ref={item => (this.button = item)}>
          <AiOutlineToTop />
        </div>
        <div className='main__total'>
          <TotalItem
            data={95436}
            icon={<FaShoppingCart />}
            title='Total Orders'
            percentage='+4.2%'
            backgroundColor='#3F4EE9'
          />
          <TotalItem
            data={1234}
            icon={<FaDollarSign />}
            title='Total Revenue'
            percentage='+1.2%'
            backgroundColor='#FA6F22'
          />
          <TotalItem data={6200} icon={<FaEye />} title='Visitors' percentage='+5.2%' backgroundColor='#4CBD6C' />
          <TotalItem data={5324} icon={<FaLeaf />} title='Messages' percentage='+2.2%' backgroundColor='#F63640' />
        </div>

        <div className='main__visit-sale'>
          {/* SITE TRAFFIC */}
          <div className='chart__traffic'>
            <div className='main__nav'>
              <p>Site Traffic</p>
              <IoMdSettings />
              <div>
                <p>Actions</p>
                <p>Another actions</p>
                <p>Something else there</p>
                <p>Seperate link</p>
              </div>
            </div>
            <div>
              <Chart
                series={[
                  { name: 'New visitors', data: [3, 7, 6, 9, 12, 7, 8, 4, 10, 6, 5, 7] },
                  { name: 'Old visitors', data: [12, 10, 14, 10, 6, 5, 4, 10, 7, 14, 8, 3] }
                ]}
                options={{
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  chart: {
                    toolbar: { show: false },
                    zoom: { enabled: false }
                  },
                  stroke: { curve: 'smooth', width: 2 },
                  legend: { position: 'top' }
                }}
              />
            </div>
            <div>
              <div>
                <h4>45.87M</h4>
                <p>
                  Overall Visitors <FaArrowUp /> 2.43%
                </p>
              </div>
              <div>
                <h4>15:48</h4>
                <p>
                  Visitor Duration <FaArrowUp /> 12.65%
                </p>
              </div>
              <div>
                <h4>245.65</h4>
                <p>
                  Pages/Visit <FaArrowUp /> 5.62%
                </p>
              </div>
            </div>
          </div>
          {/* WEEKLY SALES */}
          <div className='chart__sales'>
            <div className='main__nav'>
              <p>Weekly Sales</p>
              <IoMdSettings />
              <div>
                <p>Actions</p>
                <p>Another actions</p>
                <p>Something else there</p>
                <p>Seperate link</p>
              </div>
            </div>
            <div>
              <Chart
                type='donut'
                series={[5856, 2602, 1802, 1105]}
                options={{
                  labels: ['Direct', 'Affiliate', 'E-mail', 'Other'],
                  dataLabels: { enabled: false },
                  legend: { show: false },
                  plotOptions: { pie: { expandOnClick: false } },
                  tooltip: { fillSeriesColor: false }
                }}
              />
            </div>
            <div>
              <p>Direct</p>
              <p>$5856</p>
              <p>+55%</p>
            </div>
            <div>
              <p>Affiliate</p>
              <p>$2602</p>
              <p>+25%</p>
            </div>
            <div>
              <p>E-mail</p>
              <p>$1802</p>
              <p>+15%</p>
            </div>
            <div>
              <p>Other</p>
              <p>$1105 </p>
              <p>+5%</p>
            </div>
          </div>
        </div>
        {/*SOCIAL NETWORK*/}
        <div className='main__social'>
          {/*Facebook */}
          <div className='main__social-facebook'>
            <div className='social--radial'>
              <Chart
                type='radialBar'
                series={[60]}
                options={{
                  fill: { colors: ['#3B5998'] },
                  states: { hover: { filter: { type: 'none' } } },
                  chart: { sparkline: { enabled: false } },
                  plotOptions: {
                    radialBar: {
                      hollow: { size: '55%' },
                      track: { background: '#EBEBEB' },
                      dataLabels: { name: { show: false }, value: { offsetY: 5, fontSize: '14px' } }
                    }
                  }
                }}
              />
            </div>
            <div>
              <h4>Facebook Followers</h4>
              <p>
                22.14% <FaArrowUp />
                Since Last Week
              </p>
            </div>
            <FaFacebookF />
          </div>
          {/* Twitter */}
          <div className='main__social-twitter'>
            <div className='social--radial'>
              <Chart
                type='radialBar'
                series={[65]}
                options={{
                  fill: { colors: ['#55ACEE'] },
                  states: { hover: { filter: { type: 'none' } } },
                  chart: { sparkline: { enabled: false } },
                  plotOptions: {
                    radialBar: {
                      hollow: { size: '55%' },
                      track: { background: '#EBEBEB' },
                      dataLabels: { name: { show: false }, value: { offsetY: 5, fontSize: '14px' } }
                    }
                  }
                }}
              />
            </div>
            <div>
              <h4>Twitter Tweets</h4>
              <p>
                32.15% <FaArrowUp />
                Since Last Week
              </p>
            </div>
            <FaTwitter />
          </div>
          {/* Youtube */}
          <div className='main__social-youtube'>
            <div className='social--radial'>
              <Chart
                type='radialBar'
                series={[75]}
                options={{
                  fill: { colors: ['#E52D27'] },
                  states: { hover: { filter: { type: 'none' } } },
                  chart: { sparkline: { enabled: false } },
                  plotOptions: {
                    radialBar: {
                      hollow: { size: '55%' },
                      track: { background: '#EBEBEB' },
                      dataLabels: { name: { show: false }, value: { offsetY: 5, fontSize: '14px' } }
                    }
                  }
                }}
              />
            </div>
            <div>
              <h4>Youtube Subscribers</h4>
              <p>
                58.24% <FaArrowUp />
                Since Last Week
              </p>
            </div>
            <FaYoutube />
          </div>
        </div>
        {/* REGION */}
        <div className='main__region'>
          <div className='main__region-world-map'>
            <div className='main__nav'>
              <h4>World Selling Region</h4>
              <IoMdSettings />
              <div>
                <p>Actions</p>
                <p>Another actions</p>
                <p>Something else there</p>
                <p>Seperate link</p>
              </div>
            </div>
            <div id='chart-world-map'></div>
            <div className='world__table'>
              <table>
                <thead>
                  <tr>
                    <th>COUNTRY</th>
                    <th>INCOME</th>
                    <th>TREND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ReactCountryFlag countryCode='US' svg />
                      USA
                    </td>
                    <td>4,586$</td>
                    <td>
                      <ChartInTable color='#EB5076' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ReactCountryFlag countryCode='Ca' svg />
                      Canada
                    </td>
                    <td>2,089$</td>
                    <td>
                      <ChartInTable color='#14ABEF' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ReactCountryFlag countryCode='In' svg />
                      India
                    </td>
                    <td>3,039$</td>
                    <td>
                      <ChartInTable color='#02BA5A' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ReactCountryFlag countryCode='GB' svg />
                      UK
                    </td>
                    <td>2,309$</td>
                    <td>
                      <ChartInTable color='#D13ADF' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ReactCountryFlag countryCode='De' svg />
                      Germany
                    </td>
                    <td>7,209$</td>
                    <td>
                      <ChartInTable color='#000000' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* ----- */}
          <div className='main__interact'>
            {/*Page view */}
            <div>
              <div>
                <p>Page Views</p>
                <h4>
                  8,293 <span>5.2%</span>
                  <FaLongArrowAltUp />
                </h4>
              </div>
              <div>
                <Chart
                  series={[
                    {
                      name: 'Page views',
                      type: 'area',
                      data: [100, 120, 151, 134, 163, 184, 145, 120, 159, 127, 100, 132]
                    }
                  ]}
                  options={{
                    fill: {
                      type: 'gradient',
                      gradient: {
                        type: 'vertical',
                        gradientColor: '#008FFB',
                        inverseColors: false,
                        opacityFrom: 0.7,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                      }
                    },
                    stroke: { curve: 'smooth', width: 3 },
                    chart: {
                      toolbar: { show: false },
                      zoom: { enabled: false }
                    },
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    xaxis: {
                      floating: true,
                      axisTicks: { show: false },
                      axisBorder: { show: false },
                      labels: { show: false },
                      tooltip: { enabled: false }
                    },
                    yaxis: {
                      floating: true,
                      axisTicks: { show: false },
                      axisBorder: { show: false },
                      labels: { show: false },
                      tooltip: { enabled: false }
                    },
                    markers: { size: 0 }
                  }}
                />
              </div>
            </div>
            {/*Total click*/}
            <div>
              <div>
                <p>Total Clicks</p>
                <h4>
                  7,493 <span>1.4%</span>
                  <FaLongArrowAltUp />
                </h4>
              </div>
              <div>
                <Chart
                  type='bar'
                  series={[
                    {
                      name: 'Total clicks',
                      data: [1010, 1245, 1574, 1340, 1631, 1839, 1459, 1275, 1594, 1270, 1012, 1335]
                    }
                  ]}
                  options={{
                    colors: ['#FF6A00'],
                    fill: { colors: ['#FF6A00'] },
                    stroke: { width: 0 },
                    chart: {
                      toolbar: { show: false },
                      zoom: { enabled: false }
                    },
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    xaxis: {
                      floating: true,
                      axisTicks: { show: false },
                      axisBorder: { show: false },
                      labels: { show: false },
                      tooltip: { enabled: false }
                    },
                    yaxis: {
                      floating: true,
                      axisTicks: { show: false },
                      axisBorder: { show: false },
                      labels: { show: false },
                      tooltip: { enabled: false }
                    },
                    states: { hover: { filter: { type: 'none' } } },
                    dataLabels: { enabled: false },
                    plotOptions: { bar: { columnWidth: '40%' } }
                  }}
                />
              </div>
            </div>
            {/*Total downloads */}
            <div>
              <p>Total Downloads</p>
              {/* CIRCLE BAR HERE */}
              <div className='radial-bar'>
                <Chart
                  type='radialBar'
                  series={[68]}
                  options={{
                    fill: { colors: ['#843CF7'] },
                    states: { hover: { filter: { type: 'none' } } },
                    plotOptions: {
                      radialBar: {
                        hollow: { size: '70%' },
                        track: { background: '#EBEBEB' },
                        dataLabels: {
                          name: { show: false },
                          value: {
                            offsetY: 10,
                            formatter: val => val * 122,
                            fontSize: '24px',
                            fontWeight: 600,
                            color: '#843CF7'
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
              <p style={{ width: '100%', textAlign: 'center' }}>
                3.4% <FaLongArrowAltUp />
                since yesterday
              </p>
            </div>
            {/* Device storage */}
            <div className='device__storage'>
              <div>
                <p>Device Storage</p>
                <h4>42620/50000</h4>
              </div>
              <div>
                <div>
                  <p>Documents</p>
                  <p>12GB</p>
                </div>
                <div className='storage__bar'>
                  <div data-value='70%' data-color='#04B962'></div>
                </div>
              </div>
              <div>
                <div>
                  <p>Images</p>
                  <p>10GB</p>
                </div>
                <div className='storage__bar'>
                  <div data-value='40%' data-color='#EB5076'></div>
                </div>
              </div>
              <div>
                <div>
                  <p>Mails</p>
                  <p>5GB</p>
                </div>
                <div className='storage__bar'>
                  <div data-value='80%' data-color='#7934F3'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*EARNING AND REVIEW */}
        <div className='main__earn-review'>
          {/* Earning */}
          <div className='main__earn'>
            <div>
              <p>Total Earning</p>
              <h4>287,493$</h4>
              <p>
                1.4% <FaArrowUp />
                Since Last Month
              </p>
            </div>
            <hr />
            <div>
              <p>Total Sales</p>
              <h4>87,493</h4>
              <p>
                5.43% <FaArrowUp />
                Since Last Month
              </p>
            </div>
            <div>
              <Chart
                type='bar'
                series={[
                  {
                    name: 'Total earning',
                    data: [1010, 1245, 1574, 1340, 1631, 1839, 1459, 1275, 1594, 1270, 1012, 1335]
                  },
                  {
                    name: 'Total sales',
                    data: [2010, 2245, 2574, 2340, 2631, 2839, 2459, 2275, 2594, 2270, 2012, 2335]
                  }
                ]}
                options={{
                  fill: { colors: ['#04B35A', '#A7E4C5'] },
                  colors: ['#04B35A', '#A7E4C5'],
                  stroke: { width: 0 },
                  chart: {
                    toolbar: { show: false },
                    zoom: { enabled: false },
                    stacked: true
                  },
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  xaxis: {
                    floating: true,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                    tooltip: { enabled: false }
                  },
                  yaxis: {
                    floating: true,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                    tooltip: { enabled: false }
                  },
                  legend: { show: false },
                  states: { hover: { filter: { type: 'none' } } },
                  dataLabels: { enabled: false },
                  plotOptions: { bar: { columnWidth: '40%' } }
                }}
              />
            </div>
          </div>
          <div className='custome__review'>
            <div className='main__nav'>
              <h4>Customer Review</h4>
              <IoMdSettings />
              <div>
                <p>Actions</p>
                <p>Another actions</p>
                <p>Something else there</p>
                <p>Seperate link</p>
              </div>
            </div>
            <div className='custome__review-item'>
              <div className='custome__review-avatar'>
                <img src='./img/avatar.jpg' alt='' />
              </div>
              <div className='custome__review-text'>
                <p>
                  iPhone X<span>08:34 AM</span>
                </p>
                <p>Sara Jhon : This i svery Nice phone in low budget.</p>
              </div>
              <Rating
                className='custome__review-rating'
                initialRating={4}
                readonly={true}
                fractions={0.5}
                fullSymbol={<FaStar className='custome__review-star custome__review-star--full' />}
                emptySymbol={<FaStar className='custome__review-star' />}
              />
            </div>
            <div className='custome__review-item'>
              <div className='custome__review-avatar'>
                <img src='./img/avatar.jpg' alt='' />
              </div>
              <div className='custome__review-text'>
                <p>
                  Air Pod<span>05:26 PM</span>
                </p>
                <p>Danish Josh : The brand apple is original !</p>
              </div>
              <Rating
                className='custome__review-rating'
                initialRating={3}
                readonly={true}
                fractions={0.5}
                fullSymbol={<FaStar className='custome__review-star custome__review-star--full' />}
                emptySymbol={<FaStar className='custome__review-star' />}
              />
            </div>
            <div className='custome__review-item'>
              <div className='custome__review-avatar'>
                <img src='./img/avatar.jpg' alt='' />
              </div>
              <div className='custome__review-text'>
                <p>
                  Mackbook Pro<span>06:30 PM</span>
                </p>
                <p>Jhon Doe : Excllent product and awsome quality.</p>
              </div>
              <Rating
                className='custome__review-rating'
                initialRating={4.5}
                readonly={true}
                fractions={0.5}
                fullSymbol={<FaStar className='custome__review-star custome__review-star--full' />}
                emptySymbol={<FaStar className='custome__review-star' />}
              />
            </div>
            <div className='custome__review-item'>
              <div className='custome__review-avatar'>
                <img src='./img/avatar.jpg' alt='' />
              </div>
              <div className='custome__review-text'>
                <p>
                  Air Pod<span>08:34 AM</span>
                </p>
                <p>Christine : The brand apple is original !</p>
              </div>
              <Rating
                className='custome__review-rating'
                initialRating={5}
                readonly={true}
                fractions={0.5}
                fullSymbol={<FaStar className='custome__review-star custome__review-star--full' />}
                emptySymbol={<FaStar className='custome__review-star' />}
              />
            </div>
            <div className='custome__review-item'>
              <div className='custome__review-avatar'>
                <img src='./img/avatar.jpg' alt='' />
              </div>
              <div className='custome__review-text'>
                <p>
                  Macbook<span>08:34 AM</span>
                </p>
                <p>Michle : The brand apple is original !</p>
              </div>
              <Rating
                className='custome__review-rating'
                initialRating={4}
                readonly={true}
                fractions={0.5}
                fullSymbol={<FaStar className='custome__review-star custome__review-star--full' />}
                emptySymbol={<FaStar className='custome__review-star' />}
              />
            </div>
          </div>
        </div>
        {/* ORDER TABLE */}
        <div className='main__order-table'>
          <div className='main__nav'>
            <h4>Recent Order Tables</h4>
            <IoMdSettings />
            <div>
              <p>Actions</p>
              <p>Another actions</p>
              <p>Something else there</p>
              <p>Seperate link</p>
            </div>
          </div>
          <div className='order-table'>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>PHOTO</th>
                    <th>PRODUCT</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th>COMPLETION</th>
                    <th>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src='./img/01.png' alt='' />
                    </td>
                    <td>Headphone GL</td>
                    <td>$1,840 USD</td>
                    <td>
                      <p className='order-point order-point--pending'>Pending</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--pending'></div>
                    </td>
                    <td>10 July 2018</td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./img/02.png' alt='' />
                    </td>
                    <td>Clasic Shoes</td>
                    <td>$1,520 USD</td>
                    <td>
                      <p className='order-point order-point--completed'>Completed</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--completed'></div>
                    </td>
                    <td>12 July 2018</td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./img/03.png' alt='' />
                    </td>
                    <td>Hand Watch</td>
                    <td>$1,620 USD</td>
                    <td>
                      <p className='order-point order-point--delayed'>Delayed</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--delayed'></div>
                    </td>
                    <td>14 July 2018</td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./img/04.png' alt='' />
                    </td>
                    <td>Hand Camera</td>
                    <td>$2,220 USD</td>
                    <td>
                      <p className='order-point order-point--schedule'> On schedule</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--schedule'></div>
                    </td>
                    <td>16 July 2018</td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./img/05.png' alt='' />
                    </td>
                    <td>Iphone-X Pro</td>
                    <td>$9,890 USD</td>
                    <td>
                      <p className='order-point order-point--completed'>Completed</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--completed'></div>
                    </td>
                    <td>17 July 2018</td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./img/06.png' alt='' />
                    </td>
                    <td>Ladies Purse</td>
                    <td>$3,420 USD</td>
                    <td>
                      <p className='order-point order-point--pending'>Pending</p>
                    </td>
                    <td>
                      <div className='order-bar order-bar--pending'></div>
                    </td>
                    <td>18 July 2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
