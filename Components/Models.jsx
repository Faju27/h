import React, { Fragment } from 'react';
import "./Models.css"

const Models = () => {
    return (
        <Fragment>
        <div className='models-1' id='models'>
            <h1>All Models</h1>
            <ul>
                <li><a href="#models">All(2)</a></li>
                <li><a href="#models">SUV(2)</a></li>
            </ul>
        </div>
        <div className='models-2'>
            <div style={{width:"300px"}}>
                <a href="">
                    <h5>SUV</h5>
                    <h3>C40 Recharge pure electric</h3>
                    <p>Purchase from ₹62,95,000</p>
                    <div style={{position:"relative"}}>
                        <img src="https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blt2c86d0477e9bb1a3/65719a324b2dba000d59e33e/c40-bev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=300&iar=0" alt="" />
                        <button>AVAILABLE ONLINE</button>
                    </div>
                </a> 
                <a href="" className='link'>Learn</a>
                <a href="" className='link'>Order Online</a>   
            </div>
            <div style={{width:"300px"}}>
                <a href="">
                    <h5>SUV</h5>
                    <h3>XC40 Recharge fully electric</h3>
                    <p>Purchase from ₹54,95,000</p>
                    <div style={{position:"relative"}}>
                        <img src="https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blt0cdbd04705eae8db/6583d7457a0c66000d86cc8f/xc40-bev-my24.jpg?branch=prod_alias&auto=webp&h=300&iar=0" alt="" />
                        <button>AVAILABLE ONLINE</button>
                    </div>
                </a> 
                <a href="" className='link'>Learn</a>
                <a href="" className='link'>Order Online</a>   
            </div>
        </div>
        <div className='models-3'>
            <a href="https://www.volvocars.com/in/cars/compare-cars/">Compare Models</a>
        </div>
        </Fragment>
    );
}

export default Models;
