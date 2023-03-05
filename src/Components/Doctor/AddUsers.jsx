import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { InputMask } from 'primereact/inputmask';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { Button } from 'primereact/button';



const AddUsers = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setphone_number] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let usersData = {first_name,last_name,username,email,city,phone_number};
    fetch("http://localhost:4000/users",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usersData)
    })
    toast.success(`${first_name} has been added successfully to database`);
    console.log(usersData);
    navigate('/dashboard/admin/list/users')
  }

  const handleReset = () => {
    setfirst_name("");
    setlast_name("");
    setusername("");
    setEmail("");
    setCity("");
    setphone_number("");
  }

  return (
    <>
      <Helmet>
      <title>Add Users | Admin - Hospital Management System</title>
        <meta name="description" content="Add the users to the database of management system and this can only be accessible by the administrators restricted for other users" />
        <link rel="canonical" href="/dashboard/admin/add/doctors" />
      </Helmet>
    <div className="block-content">
      <div>
        <div 
        className="surface-ground px-4 py-8 md:px-6 lg:px-8 lg:w-10" style={{margin:'0 auto'}}>
          <div 
          className="text-900 font-medium text-900 text-2xl mb-3 text-center text-indigo-500"
          >
            Add User
          </div>
          <form 
          className="surface-card p-4 shadow-2 border-round p-fluid" 
          onSubmit={handleSubmit}>
            <div className="grid formgrid p-fluid">
              <div className="field mb-4 col-12 md:col-6">
                <label 
                for="fname" 
                className="font-medium text-900"
                >
                  First Name
                  </label>
                <input
                required
                id="fname"
                type="text" 
                value={first_name}
                onChange={(e) =>setfirst_name(e.target.value)}
                className="p-inputtext p-component" 
                placeholder='Enter the first name'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label 
                for="lname" 
                className="font-medium text-900"
                >
                  Last Name
                  </label>
                <input
                required
                id="lname"
                type="text" 
                value={last_name}
                onChange={(e) =>setlast_name(e.target.value)}
                className="p-inputtext p-component" 
                placeholder='Enter the last name'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label 
                for="username" 
                className="font-medium text-900"
                >
                  Username
                  </label>
                <input
                required
                id="username"
                type="text" 
                value={username}
                onChange={(e) =>setusername(e.target.value)}
                className="p-inputtext p-component" 
                placeholder='Enter the username'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label 
                for="email" 
                className="font-medium text-900"
                >
                  Email
                  </label>
                <input
                required
                id="email"
                type="email" 
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                className="p-inputtext p-component" 
                placeholder='Enter the email'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label 
                for="address" 
                className="font-medium text-900"
                >
                  Address or City
                  </label>
                <input
                required
                id="city"
                type="text" 
                value={city}
                onChange={(e) =>setCity(e.target.value)}
                className="p-inputtext p-component" 
                placeholder='Enter the city'
                />
              </div>

              <div class="field mb-4 col-12 md:col-6">
                <label 
                for="mobile" 
                class="font-medium text-900"
                >
                  Mobile Number
                  </label>
                  <InputMask
                  required
                   id="mobile"
                   mask="999-999-9999"
                   value={phone_number}
                   placeholder="999-999-9990"
                   className="w-full mb-3"
                   onChange={(e) => setphone_number(e.target.value)}>
                 </InputMask>
              </div>
              <div 
              class="surface-border border-top-1 opacity-50 mb-4 col-12">
              </div>
            </div>
            <div className='field col-12 md:col-6'>
              <Button aria-label="Add User" className="p-button p-component w-auto" >
                <span className="p-button-icon p-c p-button-icon-left pi pi-plus">
                </span>
                <span className="p-button-label p-c">Add User</span>
                <span role="presentation" className="p-ink"></span>
              </Button>
              <Button
                type='reset'
                aria-label="Reset"
                onClick={handleReset}
                className="p-button-outlined 
              p-button-danger 
              p-component 
              w-auto 
              mx-4"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-times">
                </span>
                <span className="p-button-label p-c">Reset</span>
              </Button>
            </div>
            {/* <button aria-label="Add User" class="p-button p-component w-auto" >
              <span class="p-button-icon p-c p-button-icon-left pi pi-plus">
              </span>
              <span class="p-button-label p-c">Add User</span>
              <span role="presentation" class="p-ink"></span>
            </button> */}
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddUsers;