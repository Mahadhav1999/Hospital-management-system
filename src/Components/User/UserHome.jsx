import React from 'react'
import { Tooltip } from 'primereact/tooltip';
import { Divider } from 'primereact/divider';

const UserHome = () => {
  const [doctorsData, setDoctorsData] = React.useState();
  const [patientsData, setPatientsData] = React.useState();
  const [usersData, setUsersData] = React.useState();



  // * To get the doctors details
  const getDoctorsData = async () => {
    let res = await fetch('http://localhost:4000/doctors');
    let data = await res.json();
    setDoctorsData(data);
  }

  React.useEffect(() => {
    getDoctorsData();
  }, [doctorsData])



   // * To get the patients details
   const getPatientsData  = async () => {
    let res = await fetch('http://localhost:4000/patients');
    let data = await res.json();
    setPatientsData(data);
  }

  React.useEffect(() => {
    getPatientsData();
  }, [patientsData])


  //* To get the users data
  const getUsersData = async () => {
    let res = await fetch('http://localhost:4000/users');
    let data = await res.json();
    setUsersData(data);
  }

  React.useEffect(() =>{
    getUsersData();
  },[usersData])

  return (
    <>
      <div className="block-content mt-1">
        <div>
          <div>
            <div style={{ background: 'url(https://extmedia.tgh.org/sites/default/files/styles/header_image_-_basic_page_1920x785/public/physician-finder-banner-photo.png?itok=wxBLd-4-) 0% 0% / cover no-repeat', height: '250px' }}>
            </div>
            <div className="px-4 py-5 md:px-6 lg:px-8 surface-section">
              <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style={{ marginTop: '-2rem', top: '-70px', marginBottom: '-70px' }}>
                <div>
                  <div className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center" style={{ width: '140px', height: '140px', borderRadius: '10px' }}>
                    <img src="https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png" alt="Imae" width="70" height="70" />
                  </div>
                  <div className="text-900 text-3xl font-medium mb-3">Hospital Management System</div>
                  <p className="mt-0 mb-3 text-700 text-xl">User Dashboard Page.</p>
                  <div className="text-600 font-medium"><span>Website | India </span>
                  </div>
                </div>
                <div className="mt-3 lg:mt-0">
                  <a href='https://github.com/Mahadhav1999' target='_blank' rel='noreferrer'>
                    <button aria-label="Follow" className="p-button p-component p-button-outlined mr-2">
                      <span className="p-button-icon p-c p-button-icon-left pi pi-plus-circle"></span>
                      <span className="p-button-label p-c">Follow</span>
                      <span role="presentation" className="p-ink"></span>
                    </button>
                  </a>

                  <button aria-label="Website" className="p-button p-component mr-2">
                    <span className="p-button-icon p-c p-button-icon-left pi pi-link"></span>
                    <span className="p-button-label p-c">Website</span>
                    <span role="presentation" className="p-ink"></span>
                  </button>
                  <button className="p-button p-component p-button-outlined p-button-rounded p-button-icon-only">
                    <span className="p-button-icon p-c pi pi-ellipsis-v">
                    </span>
                    <span className="p-button-label p-c">&nbsp;</span>
                    <span role="presentation" className="p-ink"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='mx-8 text-blue-500 text-3xl'>User Dashboard</h2>
      <Divider className="lg:w-3 mx-8 text-blue-500">
        <i className="pi pi-users mr-2"></i>
      </Divider>

      <div className="grid mx-5">
        <div className="col-12 md:col-6 lg:col-4">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div className="p-disabled">
                <span className="block text-500 font-medium mb-3">Total Lists</span>
                <div className="text-900 font-medium text-xl">{doctorsData?.length + patientsData?.length + usersData?.length }</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-user-edit text-blue-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">15 new </span>
            <span className="text-500">since last entry</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div className="p-disabled">
                <span className="block text-500 font-medium mb-3">Doctors</span>
                <div className="text-500 font-medium mb-3">Verified
                  <span className="text-900 font-medium text-xl mx-2">{doctorsData?.length}</span>

                  <i className="custom-target-icon pi pi-verified text-blue-500 text-xl"
                    data-pr-tooltip="Verified by admin"
                    data-pr-position="right"
                    data-pr-at="right+1 top"
                    data-pr-my="left center+9"
                    style={{ fontSize: '2rem', cursor: 'pointer' }}></i>
                </div>
                <Tooltip target=".custom-target-icon" />

              </div>
              <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-briefcase text-orange-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">+2 </span>
            <span className="text-500">since last entry</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div className="p-disabled">
                <span className="block text-500 font-medium mb-3">Patients</span>
                <div className="text-900 font-medium text-xl">{patientsData?.length}</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-users text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">3  </span>
            <span className="text-500">newly registered</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div className="p-disabled">
                <span className="block text-500 font-medium mb-3">Users</span>
                <div className="text-900 font-medium text-xl">15 Added</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-user text-purple-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">5 </span>
            <span className="text-500">recently active</span>
          </div>
        </div>
      </div>
    </>

  )
}

export default UserHome;