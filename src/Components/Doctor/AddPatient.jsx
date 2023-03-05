import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddPatient = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [dob, setdob] = useState("");
  const [age, setAge] = useState("");
  const [Phone, setPhone] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    let patientsData = { FirstName, LastName, dob, age, Phone }
    fetch("http://localhost:4000/patients", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patientsData)
    })
    toast.success(`${patientsData.FirstName} has been added successfully to database`);
    navigate('/dashboard/admin/list/patients');
  }

  const handleReset = () => {
    setFirstName("")
    setLastName("")
    setdob("")
    setAge("")
    setPhone("")

  }

  return (
    <>
    <Helmet>
        <title>Add Patients | Admin - Hospital Management System</title>
        <meta name="description" content="Add the patients to the database of management system and this can only be accessible by the administrators restricted for other users" />
        <link rel="canonical" href="/dashboard/admin/add/patients" />
      </Helmet>
    
    <div className="block-content">
      <div>
        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 lg:w-10" style={{margin:'0 auto'}}>
          <div className="text-900 font-medium text-900 text-2xl mb-3 text-center text-indigo-500">Add Patient
          </div>
          <form className="surface-card p-4 shadow-2 border-round p-fluid" onSubmit={handleSubmit}>
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
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-inputtext p-component"
                  placeholder='Enter the last name'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label
                  for="dob"
                  classNameName="font-medium text-900"
                >
                  Date of Birth
                </label>
                <input
                  required
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  className="p-inputtext p-component"
                  placeholder='Enter date of birth'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label
                  for="age"
                  className="font-medium text-900"
                >
                  Age
                </label>
                <input
                  required
                  id="age"
                  type="text"
                  minLength='2' maxLength='3'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-inputtext p-component"
                  placeholder='Enter the age'
                />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <label
                  for="mobile"
                  className="font-medium text-900"
                >
                  Mobile Number
                </label>
                <InputMask
                  required
                  id="mobile"
                  mask="999-999-9999"
                  value={Phone}
                  placeholder="999-999-9990"
                  className="w-full mb-3"
                  onChange={(e) => setPhone(e.target.value)}>
                </InputMask>
              </div>
              <div
                className="surface-border border-top-1 opacity-50 mb-4 col-12">
              </div>
            </div>
            <div className='field col-12 md:col-6'>
              <Button aria-label="Add Patient" className="p-button p-component w-auto" >
                <span className="p-button-icon p-c p-button-icon-left pi pi-plus">
                </span>
                <span className="p-button-label p-c">Add Patient</span>
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

          </form>
        </div>
      </div>
    </div>
    </>

  )
}

export default AddPatient;