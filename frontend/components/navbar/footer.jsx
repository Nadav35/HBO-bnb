import React from 'react';
import { Link } from 'react-router-dom';

 const Footer = () => {
   return (
     <div className="footer">
       <div className="footer-info">
         <h1>LinkedIn:</h1>
         <a href="https://www.linkedin.com/in/nadav-noy">
           <i className="fab fa-linkedin"></i>
         </a>
        </div>

        <div className="footer-info">
          <h1>GitHub:</h1>
          <a href="https://github.com/Nadav35">
            <i className="fab fa-github"></i>
          </a>
        </div>
     </div>
   );
 };

 export default Footer;
