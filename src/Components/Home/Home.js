import React from 'react';
import Activity from '../Activity/Activity';
import Tools from '../Gym-tools/Tools';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className='row g-5'>
            <div className='col-md-8 col-sm-12'>
                <Header></Header>
                <Tools></Tools>
            </div>
            <div className='col-md-4 col-sm-12 bg-light shadow'>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Home;