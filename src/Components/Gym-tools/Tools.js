import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css'

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect( () => {
        fetch('gymtools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2'>
            {
                tools.map(tool => <Tool 
                key = {tool.id}
                tool = {tool}
                ></Tool> )
            }
        </div>
    );
};

export default Tools;