
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const DoctorNavbar = () => {
    const navigate = useNavigate()


    const handleLogout = () => {
        toast.success("Successfully logged out as administrator!");
        navigate('/')
    }

    const items = [
        {
            label: 'Add Doctor',
            icon: 'pi pi-fw pi-briefcase',
            command: () => { navigate('add/doctors') }
        },
        {
            label: 'Add Patient',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { navigate('add/patients') }
        },

        {
            label: 'Add User',
            icon: 'pi pi-fw pi-users',
            command: () => { navigate('add/users') }
        },
        {
            label: 'Lists',
            icon: 'pi pi-fw pi-user-edit',
            items: [
                {
                    label: 'Doctor List',
                    icon: 'pi pi-fw pi-briefcase',
                    command: () => { navigate('list/doctors') }
                },
                {
                    label: 'Patients List',
                    icon: 'pi pi-fw pi-users',
                    command: () => { navigate('list/patients') }

                },
                {
                    label: 'Users List',
                    icon: 'pi pi-fw pi-user',
                    command: () => { navigate('list/users') }
                },

            ]
        },
    ];

    const start =
        <Link to='/dashboard/admin'>
            <img alt="logo"
            src='https://sev.severance.healthcare/_res/yuhs/sev-en/img/common/logo@2x.png'
                // src="https://surfsearch.org/wp-content/uploads/2020/03/University-Health-System.png"
                height="45"
                className="mr-2
            mt-0
            bg-bg-transparent
            cursor-pointer">

            </img>
        </Link>
    const end =
        <>
            <Button
                style={{fontFamily:'Poppins,sans serif'}}
                icon='pi pi-fw pi-power-off'
                label="Logout"
                type="button"
                onClick={handleLogout}
                className='p-button-raised'
            />
        </>


    return (
        <div className='grid mt-1'>
            <div className="card-container lg:w-full border">
                <div className="mx-6 ">
                    <Menubar
                    model={items}
                    start={start}
                    end={end}
                    style={{ border: 'none', borderRadius: 'none',fontFamily:'Poppins,sans serif' }}
                    />
                </div>
            </div>
        </div>
    );
}
export default DoctorNavbar;