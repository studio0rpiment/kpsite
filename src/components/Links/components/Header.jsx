import React from 'react';

const Logo = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.5 40.14" width="75" height="20"   style={{ 
      verticalAlign: 'middle',
      transform: 'translateY(5px)' 
    }}
    >


    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <path fill="#231f20" stroke="#231f20" strokeMiterlimit="10" d="M89.58,39.64H87.89L78.17,33,115,18.88V.76L64.37,22.48,35,2.44V20.2L68.33,39.64"/>
            <line fill="#231f20" stroke="#231f20" strokeMiterlimit="10" y1="39.64" x2="150.5" y2="39.64"/>
        </g>
    </g>
</svg>
);


const Header = () => (
  <header className="header">
    <div className="header-title-container">
     
      <h1 className="header-title">Kevin Patton PHD</h1>
      <Logo classname="logo" />
    </div>
    <p className="header-subtitle">Kevin Patton is a designer, musician, and creative technologist who works at the intersection of computational systems and creative expression. </p>
  </header>
);

export default Header;