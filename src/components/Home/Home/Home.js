import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import GalleryHome from '../GalleryHome/GalleryHome';
import ProductsHome from '../ProductsHome/ProductsHome';
import SubscriptionHome from '../SubscriptionHome/SubscriptionHome';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <ProductsHome />
            <SubscriptionHome />
            <GalleryHome />
            <Footer />
        </div>
    );
};

export default Home;