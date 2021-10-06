import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = (props) => {
    return (
        <div className='footer'>
            <div>Project by Joey Fernandez</div>
            <a href='https://github.com/josephafern'><BsGithub className='footer-icon'/></a>
            <a href='https://www.linkedin.com/in/joseph-fernandez-5936716a/'><BsLinkedin className='footer-icon'/></a>
        </div>
    );
}

export default Footer;