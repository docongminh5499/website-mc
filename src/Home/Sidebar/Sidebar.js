import React from 'react';
import Overlay from './Overlay';
import CategorySidebar from './CategorySidebar';
import NavigationSidebar from './NavigationSidebar';
import WishlistSidebar from './WishlistSidebar';
import CartSidebar from './CartSidebar';
import RecentView from './RecentViewSidebar';
import SearchSidebar from './SearchSidebar';
import QuickViewSidebar from './QuickViewSidebar';
import CompareSidebar from './CompareSidebar';
import Button from '../Button/ButtonWrapper';

const Sidebar = props => {
  return (
    <React.Fragment>
      <CategorySidebar />
      <NavigationSidebar />
      <WishlistSidebar />
      <CartSidebar />
      <RecentView />
      <CompareSidebar />
      <SearchSidebar />
      <QuickViewSidebar />
      <Overlay />
      <Button />
    </React.Fragment>
  );
};

export default Sidebar;
