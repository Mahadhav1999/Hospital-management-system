import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';


const DoctorNavbar = () => {
    const [doctors, setDoctors] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const navigate = useNavigate();

    const getDoctors = async () => {
        let res = await fetch('http://localhost:4000/doctors')
        let data = await res.json();
        setDoctors(data)
    }

    useEffect(() => {
        getDoctors();
    }, [doctors]);


    const handleLogout = () => {
        toast.success("Logged out successfully as user!");
        navigate('/')
    }

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };


    const items = [
        {
            label: 'View Doctors',
            icon: 'pi pi-fw pi-briefcase',
            command: () => { setDialogVisible(true) }
        },
        {
            label: 'View Patient',
            icon: 'pi pi-fw pi-user-plus',
            // command: () => { setDialogVisible(true) }
        },

        {
            label: 'View Users',
            icon: 'pi pi-fw pi-users',
            // command: () => { setDialogVisible(true) }
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
            <Dialog 
            header="Doctors List Data" 
            visible={dialogVisible} 
            style={{ width: '75vw' }} 
            maximizable
            modal 
            contentStyle={{ height: '300px' }} 
            onHide={() => setDialogVisible(false)} 
            footer={dialogFooterTemplate}
            >
                <DataTable 
                value={doctors} 
                scrollable 
                scrollHeight="flex" 
                tableStyle={{ minWidth: '50rem' }}
                >
                    <Column field="id" header="Id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="gender.name" header="Gender"></Column>
                    <Column field="phone" header="Phone"></Column>
                    <Column field="address" header="Address"></Column>
                </DataTable>
            </Dialog>



            
        </>
    );
}
export default DoctorNavbar;