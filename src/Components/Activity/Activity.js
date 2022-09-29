import React, { useState } from 'react';
import './Activity.css';
import logo from '../../body-builder.png';

const timeArry = [10, 20, 30, 40, 50];

const Activity = (props) => {
    const {exerciseTime} = props;
    let totalTime = 0;
    for(const tool of exerciseTime){
        totalTime = totalTime + tool.time;
    }

    const [breakTime, setBreakTime] = useState('0');
    const handleClick = (time) => {
        setBreakTime(time);
    }
    
    return (
        <div className='mt-3 activity-section'>
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
            {/* profile man details  */}
           <div className="d-flex justify-content-evenly">
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
            {/* added break time  */}
            <h4>Add a Break</h4>
           <div className="d-flex justify-content-evenly p-2 man-detail">

            <div>
                {
                    timeArry.map(time => <button key={time} onClick={() => handleClick(time)} className='border border-0 rounded-circle break-time'>{time}</button>)
                }
                
            </div>
           </div>
           </section>
           <br /><br />
           {/* exercise time part  */}
           <section className='mt-4'>
           <div>
            <h4>Exercise Details</h4>
            <section className='container'>
            <div className="d-flex justify-content-between exercise-time">
                <div><h5>Exercise time</h5></div>
                <div><h5>{totalTime} sec</h5></div>
            </div>
            <div className="d-flex justify-content-between exercise-time mt-4">
                <div><h5>Break time</h5></div>
                <div><h5>{breakTime} sec</h5></div>
            </div>
            </section>
            <section className='mt-5'>
                <button className='border border-0 bg-info p-2 w-100 text-white fw-bolder fs-5 rounded'>Activity Completed</button>
            </section>
        </div>
           </section>
        </div>
    );
};

export default Activity;