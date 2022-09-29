import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
            <section className='container mt-4 shadow rounded'>
                <h3 className='text-muted'>How does react work?</h3>
                <p className='fw-semibold'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </section>
            <section className='container mt-4 shadow rounded'>
            <h3 className='text-muted'>What is the difference between props and state?</h3>
                <p className='fw-semibold'>*Props: Props are used to pass data from one component to another.Props are read-only.Props allow you to pass data from one component to other components as an argument.Props are immutable. <br /> * State: The state is a local data storage that is local to the component only and cannot be passed to other components.State changes can be asynchronous.State is mutable. </p>
            </section>
            <section className='container mt-4 shadow rounded'>
                <h3 className='text-muted'>What is the another use of useEffect?</h3>
                <p className='fw-semibold'>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you're used to calling these operations “side effects” (or just “effects”), you've likely performed them in your components before.Sometimes, we want to run some additional code after React has updated the DOM.</p>
            </section>
        </div>
    );
};

export default Answer;