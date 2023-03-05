import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome';
import UserNavbar from './UserNavbar';

const UserDashboard = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path='/' element={<UserHome />} />
      </Routes>

    </>
  )
}

export default UserDashboard;