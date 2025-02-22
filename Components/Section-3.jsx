import React from 'react';
import "./Section.css"
import { IoIosArrowForward } from "react-icons/io";

const Section3 = () => {
    return (
        <div className='section3'>
            <p>Quick Links</p>
            <div className='div'>
            <a href="" className='grid'><div>Test Drive</div><IoIosArrowForward /></a>
            <a href="" className='grid'><div>Buy Online</div><IoIosArrowForward /></a>
            </div>
            <div className='div'>
            <a href="" className='grid'><div>Retailers</div><IoIosArrowForward /></a>
            <a href="" className='grid'><div>Support</div><IoIosArrowForward /></a>
            </div>
            <p className='p'>*Above mentioned prices are Ex-Showroom Prices. Subject to change</p>
        </div>
    );
}

export default Section3;
