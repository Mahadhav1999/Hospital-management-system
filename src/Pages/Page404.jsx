import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <>
        <Helmet>
            <title>Oops Page Not Found Error 404 - Hospital Management System</title>
            <meta name="description" content="Landing page of the hospital Management System or hospital" />
        <link rel="canonical" href="/" />
        </Helmet>
            <div class="block-content">
                <div>
                    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7"><div class="text-center lg:text-right">
                            <div class="mt-6 mb-3 font-bold text-6xl text-900">Are you lost?</div>
                            <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
                            <div class="text-center">
                                <Link to='/' className='no-underline'>
                                    <button
                                        aria-label="Go Back"
                                        class="p-button p-component
                                    p-button-text mr-2">
                                        <span class="p-button-icon p-c p-button-icon-left pi pi-arrow-left">
                                        </span>
                                        <span class="p-button-label p-c">Go Back</span>
                                        <span role="presentation" class="p-ink" style={{ height: '126px', width: '126px', top: '7.66666px', left: '43.8854px' }}></span>
                                    </button>
                                </Link>

                                <Link to='/' className='no-underline'>
                                    <button aria-label="Go to Dashboard" class="p-button p-component">
                                        <span class="p-button-icon p-c p-button-icon-left pi pi-home">
                                        </span>
                                        <span class="p-button-label p-c">Go to Home Page</span>
                                        <span role="presentation" class="p-ink"></span>
                                    </button>
                                </Link>
                            </div>
                            {/* <button aria-label="Back to home page" type="button" class="p-button p-component">
                                <span class="p-button-icon p-c p-button-icon-left pi pi-home"></span>
                                    <span class="p-button-label p-c">Back to home page</span>
                                    <span role="presentation" class="p-ink"></span>
                                </button> */}

                        </div>
                            <div>
                                <img src="https://blocks.primereact.org/assets/images/blocks/feedback/404-rocket.png" alt="Error imag" class="w-full md:w-28rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404