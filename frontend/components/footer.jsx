import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiAngellist } from 'react-icons/si'

const Footer = (props) => {
    return (
        <div id='footer'>
            <div>Project by Joey Fernandez</div>
            <a target='_blank' href='https://github.com/josephafern'><BsGithub className='footer-icon'/></a>
            <a target='_blank' href='https://www.linkedin.com/in/joseph-fernandez-5936716a/'><BsLinkedin className='footer-icon'/></a>
            <a target='_blank' href='https://angel.co/u/joseph-fernandez-14'><SiAngellist className='footer-icon' /></a>
        </div>
    );
}

export default Footer;