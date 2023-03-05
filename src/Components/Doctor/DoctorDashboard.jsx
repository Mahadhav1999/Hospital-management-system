import React from 'react';
import { Routes,Route } from 'react-router-dom';
import DoctorHome from './DoctorHome';
import AddDoctors from './AddDoctors';
import AddUsers from '../Doctor/AddUsers';
import AddPatient from '../Doctor/AddPatient';
import DoctorsList from './DoctorsList'
import UsersList from '../Doctor/UsersList';
import PatientsList from '../Doctor/PatientsList';
import DoctorNavbar from './DoctorNavbar';
import { Helmet } from 'react-helmet';


const DoctorDashboard = () => {
  return (
    <>
    <Helmet>
      <title> Dashboard | Administrator - Hospital Management System</title>
      <meta name="description" content="Dashboard of the admin which has the access to list of all the doctors,users and patients" />
        <link rel="canonical" href="/dashboard/admin" />
    </Helmet>
    <DoctorNavbar/>
    <Routes>
      <Route exact path='/' element={<DoctorHome/>}/>
      <Route exact path='/add/users' element={<AddUsers/>}/>
      <Route exact path='/add/doctors' element={<AddDoctors/>}/>
      <Route exact path='/add/patients' element={<AddPatient/>}/>
      <Route exact path='/list/doctors' element={<DoctorsList/>}/>
      <Route exact path='/list/users' element={<UsersList/>}/>
      <Route exact path='/list/patients' element={<PatientsList/>}/>
    </Routes>
    </>
  )
}

export default DoctorDashboard;