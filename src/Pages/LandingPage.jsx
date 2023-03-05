import React from 'react';
import '../Assets/Styles/LandingPage.css'

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const LandingPage = () => {
    return (
        <>
        <Helmet>
            <title>Home - Hospital Management System</title>
            <meta name="description" content="Landing page of the hospital Management System or hospital" />
        <link rel="canonical" href="/" />
        </Helmet>
            <div className="grid grid-nogutter surface-0 text-800 hero"
            >
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Hospital</span>
                        <div className="text-6xl text-primary font-bold mb-3">Management System</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Hospital Management System brings together all the information and processes of a hospital, in a single platform. It presents you with a unified 360-degree view for managing patients, doctors, medicine inventory, appointments, billing information, finances and much more.</p>

                        <Link to='/auth/admin/login' className="no-underline">
                            <Button label="Admin Login" type="button" className="mr-3 p-button-raised"
                                style={{ fontFamily: 'Poppins,sans serif', fontWeight: 'lighter' }}
                            />
                        </Link>

                        <Link to='/auth/user/login' className="no-underline">
                            <Button label="User Login" type="button" className="p-button-outlined"
                                style={{ fontFamily: 'Poppins,sans serif' }}
                            />
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}

export default LandingPage;