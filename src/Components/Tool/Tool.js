import React from 'react';
import './Tool.css'

const Tool = (props) => {
    const {title, detail, image, age, time} = props.tool;
    return (
        // each tool part 
            <div className='col'>
                <div className='card border border-0 shadow h-100'>
                <img src={image} className='card-img-top' alt=""/>
                <div className='card-body'>
                    <h5 className="card-title">{title? title.slice(0, 15) : 'no data found'}</h5>
                    <p className="card-text text-muted">{detail}</p>
                    <p className='fw-semibold'>For Age: {age}</p>
                    <p className='fw-semibold'>Time Required: {time}s</p>
                    <button onClick={() => props.handleAddToExercise(props.tool)} className='w-100 bg-info border border-0 p-2 rounded-1 text-white fw-bolder'>Add to list</button>
                </div>
                </div>
            </div>
    );
};

export default Tool;