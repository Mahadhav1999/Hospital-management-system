import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { RadioButton } from 'primereact/radiobutton';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddDoctors = () => {
  const categories = [{ name: 'Male', key: 'M' }, { name: 'Female', key: 'F' }];
  const [name, setName] = useState("Dr.");
  const [gender, setGender] = useState(categories[0]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let DoctorsData = { name, gender, phone, address }
    fetch("http://localhost:4000/doctors", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(DoctorsData)
    })
    toast.success(`${DoctorsData.name} Added Successfully`)
    navigate('/dashboard/admin/list/doctors')
  };

  const handleReset = () => {
    setName("")
    setGender("")
    setPhone("");
    setAddress("");
  }


  return (
    <>
      <Helmet>
      <title>Add Doctors | Admin - Hospital Management System</title>
        <meta name="description" content="Add the doctors to the database of management system and this can only be accessible by the administrators restricted for other users" />
        <link rel="canonical" href="/dashboard/admin/add/doctors" />
      </Helmet>
      <div className="block-content">
        <div>
          <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 lg:w-10" style={{margin:'0 auto'}}>
            <div className="text-900 font-medium text-900 text-2xl mb-3 text-center text-indigo-500">Add Doctor
            </div>
            <form className="surface-card p-4 shadow-2 border-round p-fluid" onSubmit={handleSubmit}>
              <div className="grid formgrid p-fluid">
                <div className="field mb-4 col-12 md:col-6">
                  <label
                    htmlFor="name"
                    className="font-medium text-900"
                  >
                    Name
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-inputtext p-component"
                    placeholder='Enter the name'
                  />
                </div>
                <div
                  className="field col-12 md:col-6"
                  style={{ marginTop: '40px' }}
                >
                  <label
                    htmlFor="gender"
                    className="font-medium text-900"
                  >Gender
                  </label>
                  {
                    categories.map((category) => {
                      return (
                        <div key={category.key} className="field-radiobutton inline-block mx-3">
                          <RadioButton inputId={category.key} name="category"
                            required
                            value={category}
                            onChange={(e) => setGender(e.value)}
                            checked={gender.key === category.key}
                          />
                          <label htmlFor={category.key}>{category.name}</label>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="field mb-4 col-12 md:col-6">
                  <label
                    htmlFor="mobile"
                    className="font-medium text-900"
                  >
                    Mobile Number
                  </label>
                  <InputMask
                    required
                    id="mobile"
                    mask="999-999-9999"
                    value={phone}
                    placeholder="999-999-9990"
                    className="w-full mb-3"
                    onChange={(e) => setPhone(e.target.value)}>
                  </InputMask>
                </div>
                <div
                  className="field mb-4 col-12 md:col-6"
                >
                  <label
                    htmlFor="city"
                    className="font-medium text-900"
                  >
                    Address or City
                  </label>
                  <input
                    required
                    id="city"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="p-inputtext p-component"
                    placeholder='Enter the city'
                  />
                </div>
                <div
                  className="surface-border border-top-1 opacity-50 mb-4 col-12">
                </div>
              </div>
              <div className='field col-12 md:col-6'>
                <Button aria-label="Add Doctor" className="p-button p-component w-auto" >
                  <span className="p-button-icon p-c p-button-icon-left pi pi-plus">
                  </span>
                  <span className="p-button-label p-c">Add Doctor</span>
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
              {/* <Button aria-label="Add Doctor" className="p-button p-component w-auto" >
              <span className="p-button-icon p-c p-button-icon-left pi pi-plus">
              </span>
              <span className="p-button-label p-c">Add Doctor</span>
              <span role="presentation" className="p-ink"></span>
            </Button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddDoctors;