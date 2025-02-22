import React from 'react';
import "./Section.css"
const Section1 = () => {
    return (
        <div className='section'>
            <div className='section1'>
                <div>
                <h2>Electric Charging</h2>
                <p>Charging your electric car at home and on the road can be easy, fast and cost-effective.</p>
                </div>
                <div className='btn'>
                <a href="https://www.volvocars.com/in/cars/electrification/charging-your-volvo/">Charging Your Car</a>
                </div>
            </div>
            <div style={{width:"50%"}}>
                <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blta1b7e2a9b2b4ec75/6578674705aefe000e4a9548/xc40_4-3.png?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="" />
            </div>
        </div>
        
    );
}

export default Section1;
