
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
import '../../Assets/Styles/DoctorsList.css';
import { Helmet } from 'react-helmet';

const DoctorsList = (props) => {


    const [doctors, setDoctors] = useState(null);
    const [selectedDoctors, setSelectedDoctors] = useState(null);


    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

        'gender': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

        'phone': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

        'address.city': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

    });


    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);



    // Defining the function to get the doctors list
    let getData = async (req, res) => {
        let response = await fetch("http://localhost:4000/doctors")
        let result = await response.json()
        setDoctors(result)
        setLoading(false)
    }


    //Invoking the function in the useEffect Hook to perform the side effects
    useEffect(() => {
        getData();
    }, [doctors]); // eslint-disable-line react-hooks/exhaustive-deps



    const handleDelete = (id, name) => {
        fetch(`http://localhost:4000/doctors/${id}`, {
            method: 'DELETE',
        })
        toast.success(`${name} has been deleted permanently with id-${id}`);
        // toast.current.show({severity:'success', summary: 'Success Message', detail:`${name} has been deleted permanently with id-${id}`, life: 3000});
    }


    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h4 className="m-0 text-blue-500" >Doctors List {doctors?.length} </h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const addressBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span
                    className="image-text">
                    {rowData.address}
                </span>
            </React.Fragment>
        );
    }

    const genderBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span
                    className="image-text">
                    {rowData.gender.name}
                </span>
            </React.Fragment>
        )
    }

    const textEditor = (rowData) => {
        return <InputText
            type="text"
            value={rowData.value}
            onChange={(e) => rowData.editorCallback(e.target.value)} />;
    };


    const actionBodyTemplate = (rowData) => {
        return <Button
            onClick={() => handleDelete(rowData.id, rowData.name)}
            type="button"
            icon="pi pi-trash"
            className="p-button-outlined
                       p-button-danger"
            tooltip="Remove" tooltipOptions={{ position: 'bottom' }}
        >
        </Button>;
    }

    const header = renderHeader();

    return (
        <>
            <Helmet>
                <title>Doctors List | Admin - Hospital Management System</title>
                <meta name="description" content="Doctors list of the admin dashboard which has the access to list of all the doctors" />
                <link rel="canonical" href="/dashboard/admin/list/doctors" />
            </Helmet>
            <div className="datatable-doc-demo">
                {/* <Toast ref={toast}/> */}
                <div className="card">
                    <DataTable
                        style={{ fontFamily: 'Poppins,sans serif' }}
                        value={doctors}
                        paginator
                        className="p-datatable-customers"
                        header={header}
                        rows={5}
                        paginatorTemplate="FirstPageLink
                PrevPageLink
                PageLinks
                NextPageLink
                LastPageLink
                CurrentPageReport
                RowsPerPageDropdown"
                        rowsPerPageOptions={[5, 10, 15]}
                        rowHover
                        selection={selectedDoctors}
                        onSelectionChange={e => setSelectedDoctors(e.value)}
                        filters={filters}
                        filterDisplay="menu"
                        loading={loading}
                        responsiveLayout="scroll"
                        globalFilterFields={['id', 'name', 'gender.name', 'address', 'phone']}
                        emptyMessage="Oop's No records to display... &#128533;"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">

                        <Column
                            selectionMode="multiple"
                            selectionAriaLabel="id"
                            headerStyle={{ width: '3em' }}
                        >
                        </Column>

                        <Column
                            field="id"
                            header="Id"
                            sortable
                            filter
                            filterPlaceholder="Search by id"
                            style={{ Width: '4rem' }}
                        />

                        <Column
                            field="name"
                            header="Name"
                            sortable
                            editor={(rowData) => textEditor(rowData)}
                            filter
                            filterPlaceholder="Search by name"
                            style={{ minWidth: '1rem' }}
                        />

                        <Column
                            field="gender"
                            header="Gender"
                            sortable
                            filter
                            filterPlaceholder="Search by gender"
                            style={{ minWidth: '14rem' }}
                            body={genderBodyTemplate}
                        />


                        <Column
                            field="phone"
                            header="Phone Number"
                            sortable
                            filter
                            filterPlaceholder="Search by Phone"
                            style={{ minWidth: '2rem' }}
                        />


                        <Column
                            field="address.city"
                            header="Address"
                            sortable
                            filterField="address.city"
                            style={{ minWidth: '5rem' }}
                            body={addressBodyTemplate}
                            filter
                            filterPlaceholder="Search by address" />


                        <Column
                            header='Action'
                            headerStyle={{ width: '4rem', textAlign: 'center' }}
                            bodyStyle={{ textAlign: 'center', overflow: 'visible', width: '8rem' }}
                            body={actionBodyTemplate}
                        />

                    </DataTable>
                </div>
            </div>
        </>
    );
}


export default DoctorsList;