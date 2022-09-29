import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import '../Tool/Tool.css'
import './Home.css'
import Tool from '../Tool/Tool';
import Activity from '../Activity/Activity';

const Home = () => {
    const [tools, setTools] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    useEffect( () => {
        fetch('gymtools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[]);

    const handleAddToExercise = (tool) => {
        const newExerciseTime = [...exerciseTime, tool];
        setExerciseTime(newExerciseTime);
    }
    return (
        <div className='row g-5'>
            <div className='col-md-8 col-sm-12'>
                <Header></Header>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2'>
            {
                tools.map(tool => <Tool
                    key = {tool.id}
                    tool = {tool}
                    handleAddToExercise = {handleAddToExercise}></Tool>)
            }
        </div>
            </div>
            <div className='col-md-4 col-sm-12 bg-light shadow activity-section'>
              <Activity exerciseTime = {exerciseTime}></Activity> 
            </div>
        </div>
    );
};

export default Home;