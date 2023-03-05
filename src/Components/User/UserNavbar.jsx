
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const DoctorNavbar = () => {
    const navigate = useNavigate()


    const handleLogout = () => {
        toast.success("Logged out successfully as user!");
        navigate('/')
    }


    const items = [
        {
            label: 'View Doctors',
            icon: 'pi pi-fw pi-briefcase',
            command: () => { navigate('list/doctors') }
        },
        {
            label: 'View Patient',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { navigate('list/patients') }
        },

        {
            label: 'View Users',
            icon: 'pi pi-fw pi-users',
            command: () => { navigate('list/users') }
        },
    ];

    const start =
        <Link to='/dashboard/user'>
            <img alt="logo"
                src='https://sev.severance.healthcare/_res/yuhs/sev-en/img/common/logo@2x.png'
                // src="https://surfsearch.org/wp-content/uploads/2020/03/University-Health-System.png"
                height="40"
                className="mr-2
            mt-3
            bg-bg-transparent
            cursor-pointer">

            </img>
        </Link>
    const end =
        <>
            <Button
                icon='pi pi-fw pi-power-off'
                label="Logout"
                type="button"
                onClick={handleLogout}
                className='p-button-outlined'
            />

        </>


    return (
        <>
            <div className='grid'>
                <div className="col lg:w-full">
                    <div className="mx-5 border-noround">
                        <Menubar
                            model={items}
                            start={start}
                            end={end}
                            style={{ border: 'none', borderRadius: 'none', marginTop: '0px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default DoctorNavbar;