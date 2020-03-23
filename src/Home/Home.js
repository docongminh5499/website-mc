import React from 'react';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import ForSection from './ForSection/ForSection';
import BrandForSection from './Brand/BrandForSection';
import Brand from './Brand/Brand';
import Banner from './Brand/Banner';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import List from './List/List';

import './Home.css';

export default class Home extends React.Component {
  componentDidMount() {
    document.title = 'Elessi - Home';
  }

  render() {
    return (
      <div className='home'>
        <Header />
        <Carousel />
        <ForSection title='For her' />
        <BrandForSection />
        <ForSection title='For him' imageUrl='./img/forhim.jpg' imagePosition='right' />
        <Banner />
        <div className='list__wrapper'>
          <List title='Top Rated' />
          <List title='Best Selling' />
          <List title='On Sale' />
        </div>
        <Brand />
        <Footer />
        <Sidebar />
      </div>
    );
  }
}
