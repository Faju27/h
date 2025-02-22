import React from 'react';
import "./Main.css"

const Main = () => {
    return (
        <div className='Main'>
            <h1>Why Volvo?</h1>
            <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="" />
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                    <h2>Making Your Life Easier</h2>
                    <p>Our new take on getting from A to B. Get access to a Volvo when you want it, how you want it.</p>
                </div>
                <div className='size'>
                    <h2>Our Future is Electric</h2>
                    <p>All our cars are available with electrified power. We help you reduce the environmental impact of daily life.</p>
                </div> 
                <div>
                    <h2>Protecting What’s Important</h2>
                    <p>We’re proud of our safety heritage. We’ll keep innovating new ways to help you protect what's important.</p>
                </div>   
            </div>
            <div className='btn'>
            <a href="https://www.volvocars.com/in/v/our-story">Learn More About Volvo</a>
            </div>
        </div>
    );
}

export default Main;
