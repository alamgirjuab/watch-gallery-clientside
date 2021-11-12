import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ProductsHome from '../ProductsHome/ProductsHome';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <ProductsHome />
            <Footer />
        </div>
    );
};

export default Home;