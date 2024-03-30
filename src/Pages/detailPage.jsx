import React from 'react';
import Details from '../Components/details/details';
import Reviews from '../Components/details/Reviews';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/footer';

const DetailPage = () => {
    return (
        <div>
            <Navbar />
            <Details />
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
}

export default DetailPage;
