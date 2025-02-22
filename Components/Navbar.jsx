import React from "react";
import { Fragment } from 'react';
import "./NavBar.css"
import { IoIosPerson } from "react-icons/io";

const NavBar = () => {
    return <Fragment>
        <div className="navbar">
            <div ><img src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="" width={200} height={10} /></div>
            <div>
                <ul>
                    <li><a href="" className="n-b-btn">Our Cars</a></li>
                    <li><a href="" className="n-b-btn">Shop</a></li>
                    <li><a href="" className="n-b-btn">Owners</a></li>
                    <li><a href="" className="n-b-btn">About us</a></li>
                </ul>
            </div>
            <div>
                <a style={{display:"flex"}} className="n-b-btn"><IoIosPerson size={30} />
                <span style={{padding:"5px"}}>Sign in</span>
                </a>
            </div>
        </div>
        </Fragment>
    ;
}

export default NavBar;
