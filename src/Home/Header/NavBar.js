import React, { Component } from 'react';

function styleNavBar() {
  const menu = Array.from(document.querySelectorAll('.header__menu--manycol'));
  menu.forEach(item => (item.style.left = -item.parentNode.offsetLeft + 'px'));
}

export default class NavBar extends Component {
  componentDidMount() {
    styleNavBar();
    window.addEventListener('resize', styleNavBar);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', styleNavBar);
  }

  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <React.Fragment>
      <div className='active'>
        <a href='/'>HOME</a>
        <span></span>
      </div>
      <div>
        <a href='/'>SHOP</a>
        <span></span>
        <div className='header__menu header__menu--manycol'>
          <div>
            <p>Shop Layout</p>
            <a href='./'>
              Infinite Scroll<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Ajax Load More</a>
            <a href='./'>Pagination</a>
            <a href='./'>RTL</a>
            <a href='./'>
              Top Sidebar<div className='header__badge header__badge--hot'>hot</div>
            </a>
            <a href='./'>Top Sidebar Type 2</a>
            <a href='./'>Masonry</a>
            <a href='./'>Off – Canvas Sidebar</a>
            <a href='./'>Left Sidebar</a>
            <a href='./'>Right Sidebar</a>
            <a href='./'>Shop Catalog Mode</a>
          </div>
          <div>
            <p>Single Product</p>
            <a href='./'>Thumbnails Left</a>
            <a href='./'>Thumbnails Bottom</a>
            <a href='./'>Video Thumbnail</a>
            <a href='./'>
              Sticky Info<div className='header__badge header__badge--hot'>hot</div>
            </a>
            <a href='./'>Gallery Scroll</a>
            <a href='./'>Gallery Carousel</a>
            <a href='./'>
              Slider Full Width<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>
              Back In Stock Notifier<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Left Sidebar</a>
            <a href='./'>Right Sidebar</a>
            <a href='./'>
              Off – Canvas Sidebar<div className='header__badge header__badge--new'>new</div>
            </a>
          </div>
          <div>
            <p>Single Product</p>
            <a href='./'>Simple Product</a>
            <a href='./'>Variable Product</a>
            <a href='./'>External/Affiliate Product</a>
            <a href='./'>
              Bundle Product<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Pre Order Product</a>
            <a href='./'>
              Bought Together<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Tabs Layout</a>
            <a href='./'>Accordion Layout</a>
            <a href='./'>Tabs Slider</a>
            <a href='./'>
              Sticky Add To Cart<div className='header__badge header__badge--hot'>hot</div>
            </a>
            <a href='./'>Catalog Mode</a>
          </div>
          <div>
            <p>Product Layout</p>
            <a href='./'>
              Metro<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Ajax Load More</a>
            <a href='./'>Slider</a>
            <a href='./'>Columns</a>
            <a href='./'>Grid</a>
            <a href='./'>List</a>
            <a href='./'>Off – Canvas Quickview</a>
            <a href='./'>
              Quickview<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Hover Fade</a>
            <a href='./'>Hover Flip</a>
            <a href='./'>Hover Bottom To Top</a>
          </div>
          <div>
            <p>Features</p>
            <a href='./'>Deals Schedule</a>
            <a href='./'>Recent</a>
            <a href='./'>Featured</a>
            <a href='./'>Best Selling</a>
            <a href='./'>On Sale</a>
            <a href='./'>Top Rate</a>
            <a href='./'>Recent Review</a>
            <a href='./'>Show By Ids</a>
            <a href='./'>Deal Time Input</a>
            <a href='./'>
              Pin Banner<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Product Categories</a>
          </div>
        </div>
      </div>
      <div>
        <a href='/'>ELEMENTS</a>
        <span></span>
        <div className='header__menu header__menu--manycol'>
          <div>
            <p>Blogs</p>
            <a href='./'>Standard</a>
            <a href='./'>Mansory</a>
            <a href='./'>Grid</a>
            <a href='./'>List</a>
            <a href='./'>Left Sidebar</a>
            <a href='./'>Right Sidebar</a>
            <a href='./'>No Sidebar</a>
            <a href='./'>Single Blog</a>
            <a href='./'>Shortcodes</a>
          </div>
          <div>
            <p>Theme Elements</p>
            <a href='./'>Title</a>
            <a href='./'>Accordions</a>
            <a href='./'>Tabs Contents</a>
            <a href='./'>Column – Heading</a>
            <a href='./'>Follow – Share Icon</a>
            <a href='./'>Banners</a>
            <a href='./'>No Sidebar</a>
            <a href='./'>
              Compare Skins<div className='header__badge header__badge--new'>new</div>
            </a>
            <a href='./'>Services Block</a>
          </div>
          <div>
            <p>Theme Elements</p>
            <a href='./'>
              Vertical Menu<div className='header__badge header__badge--hot'>hot</div>
            </a>
            <a href='./'>Instagram Feed</a>
            <a href='./'>Team Members</a>
            <a href='./'>Testimonials</a>
            <a href='./'>Brands</a>
            <a href='./'>Google Maps</a>
          </div>
          <div>
            <p>Header Type</p>
            <a href='./'>Header Type 1</a>
            <a href='./'>Header Type 2</a>
            <a href='./'>Header Type 3</a>
            <a href='./'>Header Type 4</a>
            <a href='./'>Header Transparent</a>
          </div>
          <div>
            <p>Portfolio</p>
            <a href='./'>Single</a>
            <a href='./'>2 Columns</a>
            <a href='./'>3 Columns</a>
            <a href='./'>4 Columns</a>
            <a href='./'>5 Columns</a>
          </div>
        </div>
      </div>
      <div>
        <a href='/'>PAGES</a>
        <span></span>
        <div className='header__menu header__menu--onecol'>
          <a href='./'>My Account</a>
          <a href='./'>Contact Us</a>
          <a href='./'>About Us</a>
          <a href='./'>Order Tracking</a>
          <a href='./'>FAQ</a>
          <a href='./'>Site Boxed</a>
          <a href='./'>Cookies Law – GDPR</a>
          <a href='./'>Maintenance Mode</a>
          <a href='./'>Top Promotion</a>
          <a href='./'>404</a>
        </div>
      </div>
    </React.Fragment>
  );
}
