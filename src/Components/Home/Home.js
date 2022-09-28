import React from 'react';
import Tools from '../Gym-tools/Tools';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='row'>
            <div className='col-md-8 col-sm-12'>
                <Header></Header>
                <Tools></Tools>
            </div>
            <div className='col-md-4 col-sm-12'>
                <h1>this is right side</h1>
            </div>
        </div>
    );
};

export default Home;