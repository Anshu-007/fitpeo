import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Bargraph = () => {
    const [filter, setFilter] = useState(3);
    let years = [
        { month : 'Jan', value : 20, targetMet : false},
        { month : 'Feb', value : 30, targetMet : false},
        { month : 'Mar', value : 60, targetMet : false},
        { month : 'Apr', value : 15, targetMet : false},
        { month : 'Jun', value : 40, targetMet : false},
        { month : 'Jul', value : 20, targetMet : false},
        { month : 'Aug', value : 80, targetMet : true},
        { month : 'Sep', value : 50, targetMet : false},
        { month : 'Oct', value : 40, targetMet : false},
        { month : 'Nov', value : 70, targetMet : false},
        { month : 'Dec', value : 30, targetMet : false},
    ];

    const handleChange = (e)=>{
        setFilter(e.target.value)
    }
  return (
    <div className='bar-graph-wrapper'>
        <div className='bar-chart-header'>
            <div className='bar-chart-heading'>
                <div className='pie-heading'>Overview</div>
                <div className='pie-heading-text'>Monthly Earning</div>
            </div>
            <div className='bar-filter'>
                <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    // id="demo-select-small"
                    value={filter}
                    onChange={handleChange}
                    // label="Age"
                >
                    <MenuItem value={1}>Monthly</MenuItem>
                    <MenuItem value={3}>Quaterly</MenuItem>
                    <MenuItem value={12}>Yearly</MenuItem>
                </Select>
            </div>
            
        </div>
        <div className='bar-container'>
            {years.map((data)=>{
                return(
                    <div className='bar'>
                        <div className='bar-candle-wrapper'>
                        <div className={data.targetMet ? 'target-met' :'bar-candle '} style={{height:`${data.value}%`}}></div>
                        </div>
                        
                        <div className='month-name'>{data.month}</div>
                        
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default 
Bargraph