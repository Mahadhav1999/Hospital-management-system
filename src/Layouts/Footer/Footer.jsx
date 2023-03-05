import React from 'react';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/Footer.css'


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="block-content">
                <div>
                    <Divider />
                    <div className="surface-section px-3 md:px-3 lg:px-7">
                        <div className="py-3 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                            <div>
                                <Link>
                                <img src="https://sev.severance.healthcare/_res/yuhs/sev-en/img/common/logo@2x.png" alt="footer logo" height="50" />
                                </Link>

                                <div className="mt-2 line-height-3">© 2022-23 Hospital Management System, Inc. All rights are reserved. Made with 
                                <span className="text-red-500 mx-1">&#10084;</span>
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-0">
                                <a href="https://www.twitter.com/"
                                target="_blank" rel="noreferrer noopener"
                                className="cursor-pointer text-500 transition-colors 
                                transition-duration-150 
                                hover:text-700"
                                >
                                <i className="pi pi-twitter text-xl"
                                style={{color:'#1DA1F2'}}>
                                </i>
                                </a>
                                <a href="https://www.facebook.com/"
                                target="_blank" rel="noreferrer noopener"
                                className="cursor-pointer 
                                text-500 ml-3 
                                transition-colors 
                                transition-duration-150 
                                hover:text-700">
                                <i className="pi pi-facebook text-xl"
                                    style={{color:'#1877F2'}}>
                                </i>
                                </a>
                                <a href="https://github.com/"
                                target="_blank" rel="noreferrer noopener"
                                className="cursor-pointer 
                                text-500 ml-3
                                transition-colors
                                transition-duration-150
                                hover:text-700">
                                <i className="pi pi-github text-xl"
                                style={{color:'#000000'}}
                                >
                                </i>
                                </a>
                                <a href="https://www.google.com/"
                                target="_blank" rel="noreferrer noopener" 
                                className="cursor-pointer
                                text-500 ml-3
                                transition-colors
                                transition-duration-150
                                hover:text-700">
                                <i className="pi pi-google text-xl"
                                style={{color:' #DB4437'}}
                                >
                                </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;