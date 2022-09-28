import React from 'react';
import './Activity.css';
import logo from '../../body-builder.png';
import Exercise from '../Exercise-details/Exercise';

const Activity = () => {
    return (
        <div className='mt-3'>
           <section>
           <div className='d-flex px-2'>
           <img className='activity-img' src={logo} alt="" />
           <div>
           <h5>Caeleb Dressel</h5>
           <p>California, USA</p>
           </div>
           </div>
           </section>
           <section className='mt-4 man-detail'>
           <div class="d-flex justify-content-evenly">
            <div>
                <h4>75 <span className='title'>kg</span></h4>
                <p>Weight</p>
            </div>
            <div>
                <h3>6.5 <span className='title'>Feet</span></h3>
                <p>Height</p>
            </div>
            <div>
                <h3>25 <span className='title'>years</span></h3>
                <p>Age</p>
            </div>
           </div>
           </section>
           <section className='mt-4'>
            <h4>Add a Break</h4>
           <div class="d-flex justify-content-evenly p-2 man-detail">
            <div><button className='border border-0 rounded-circle break-time'>10s</button></div>
            <div><button className='border border-0 rounded-circle break-time'>20s</button></div>
            <div><button className='border border-0 rounded-circle break-time'>30s</button></div>
            <div><button className='border border-0 rounded-circle break-time'>40s</button></div>
            <div><button className='border border-0 rounded-circle break-time'>50s</button></div>
           </div>
           </section>
           <br /><br />
           <section className='mt-4'>
            <Exercise></Exercise>
           </section>
        </div>
    );
};

export default Activity;