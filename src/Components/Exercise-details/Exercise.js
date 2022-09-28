import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div>
            <h4>Exercise Details</h4>
            <section className='container'>
            <div class="d-flex justify-content-between exercise-time">
                <div><h5>Exercise time</h5></div>
                <div><h5>000</h5></div>
            </div>
            <div class="d-flex justify-content-between exercise-time mt-4">
                <div><h5>Break time</h5></div>
                <div><h5>000</h5></div>
            </div>
            </section>
            <section className='mt-5'>
                <button className='border border-0 bg-info p-2 w-100 text-white fw-bolder fs-5 rounded'>Activity Completed</button>
            </section>
        </div>
    );
};

export default Exercise;