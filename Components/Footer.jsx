import React from 'react';
import "./Footer.css"
import { IoIosArrowUp } from "react-icons/io";
import {FaFacebook, FaInstagram, FaLocationDot, FaThreads, FaYoutube} from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='footer'>
            <p><a href="">Back to Top</a><IoIosArrowUp style={{fontSize:"15px",marginLeft:"5px"}}/></p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className='grid'>
                <dl>
                    <dt>HELP & SUPPORT</dt>
                    <dd><a href="">Book a Service</a></dd>
                    <dd><a href="">support & Manuals</a></dd>
                </dl>
                </div>
            <div className='grid'>
                <dl>
                    <dt>CONTACT US</dt>
                    <dd><a href="">Contact Volvo</a></dd>
                    <dd><a href="">Find a Dealer</a></dd>
                    <dd><a href="">Book a Test Drive</a></dd>
                </dl>
            </div>
            <div className='grid'>
                <dl>
                    <dt>VOLVO CARS APP</dt>
                    <dd><a href="">App Store</a></dd>
                    <dd><a href="">Google Pay</a></dd>
                </dl>
            </div>
            </div>
            <p><FaLocationDot style={{fontSize:"15px",marginRight:"5px"}}/> <a href="">INDIA</a></p>
            <div style={{textAlign:"center"}}>
                <FaFacebook className='icons'/>
                <FaYoutube className='icons' />
                <FaInstagram className='icons'/>
                <FaThreads className='icons'/>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <p className='p'>Cookies</p>
                <p className='p'>Legal</p>
                <p className='p'>Privacy</p>
            </div>
            <p className='p'>Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors)</p>
        </div>
    );
}

export default Footer;
