import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import DoctorLogin from './Components/auth/DoctorLogin';
import UserLogin from './Components/auth/UserLogin';
import DoctorDashboard from './Components/Doctor/DoctorDashboard';
import UserDashboard from './Components/User/UserDashboard';
import Footer from './Layouts/Footer/Footer';
import Page404 from './Pages/Page404';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';



const Routing = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />


            <Router>
                <Helmet>
                    <title>Hospital Management System</title>
                    <meta name="description" content="Hospital Doctor Hospital management system" />
                    <meta name="keyword" content="React js,javascript,front-end development,HTML,CSS" />
                </Helmet>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route path='/auth/admin/login' element={<DoctorLogin />} />
                    <Route path='/auth/user/login' element={<UserLogin />} />
                    <Route path='/dashboard/admin/*' element={<DoctorDashboard />} />
                    <Route path='/dashboard/user/*' element={<UserDashboard />} />
                    <Route path='/*' element={<Page404 />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Routing;