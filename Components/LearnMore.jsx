import React from "react";
import { Fragment } from 'react';
import "./LearnMore.css"

const LearnMore = () => {
    return   <Fragment>
            <div >
                <div className="l-m-1"><a href="" >LEARN MORE </a></div>
                <div style={{position:"relative"}}>
                    <video autoPlay controls loop muted style={{width:"100%"}}>
                        <source src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" type="video/mp4"/>
                    </video>
                    <div className="l-m-2">
                        <h4 className="tw">A new era for safety</h4><br />
                        <h1 className="tw">Does how you feel affect how you drive?</h1><br />
                        <a href="" className="l-m-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </Fragment>
        
    ;
}

export default LearnMore;
