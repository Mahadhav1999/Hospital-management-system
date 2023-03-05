
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
import '../../Assets/Styles/DoctorsList.css';
import { Helmet } from 'react-helmet';





const PatientsList = (rowData) => {
  const [patients, setPatients] = useState();
  const [selectedPatients, setSelectedPatients] = useState(null);


  const [filters, setFilters] = useState({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },

    'patient_id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

  });



  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [loading, setLoading] = useState(true);



  // Function to get all the patients data
  let getData = async () => {
    let response = await fetch("http://localhost:4000/patients")
    let data = await response.json();
    setPatients(data);
    setLoading(false);
  }


  // calling the function in useEffect Hook
  useEffect(() => {
    getData();
  }, [patients]);


  const handleDelete = (id, FirstName, LastName) => {
    fetch(`http://localhost:4000/patients/${id}`, {
      method: 'DELETE',
    })
    toast.success(`${FirstName} has been deleted permanently from database with id - ${id}`);
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
        <h4 className="m-0 text-blue-500">Patients List</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </span>
      </div>
    )
  }

  const addressBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span
          className="image-text">
          {rowData.FirstName}
        </span>
      </React.Fragment>
    );
  }

  const nameBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span
          className="image-text">
          {rowData.LastName}
        </span>
      </React.Fragment>
    );
  }


  const phoneBodyTemplate = (rowData) => {
    return (
      <>
        <span className="image-text">{rowData.Phone}</span>
      </>
    )

  }


  const actionBodyTemplate = (rowData) => {
    return <Button
      onClick={() => handleDelete(rowData.id, rowData.FirstName, rowData.LastName)}
      type="button"
      icon="pi pi-trash"
      className="p-button-outlined 
                 p-button-danger"
      tooltip="Remove"
      tooltipOptions={{ position: 'bottom' }}
    >
    </Button>;
  }

  const header = renderHeader();

  return (
    <>
      <Helmet>
        <title>Patients List | Admin - Hospital Management System</title>
        <meta name="description" content="Patients list of the admin dashboard which has the access to list of all the patients" />
        <link rel="canonical" href="/dashboard/admin/list/patients" />
      </Helmet>

      <div className="datatable-doc-demo">
        <div className="card">
          <DataTable
            style={{ fontFamily: 'Poppins,sans serif' }}
            value={patients}
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
            dataKey="id"
            rowHover
            selection={selectedPatients}
            onSelectionChange={e => setSelectedPatients(e.value)}
            filters={filters}
            filterDisplay="menu"
            loading={loading}
            responsiveLayout="scroll"
            globalFilterFields={['patient_id', 'FirstName', 'LastName', 'dob', 'age', 'Phone']}
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
              header="Patient Id"
              sortable
              filter
              filterPlaceholder="Search by id"
              style={{ Width: '4rem' }}
            />


            <Column
              field="fname"
              header="First Name"
              sortable
              filterPlaceholder="Search by first name"
              style={{ minWidth: '1rem' }}
              body={addressBodyTemplate}
            />

            <Column
              field="lname"
              header="Last Name"
              sortable
              filterPlaceholder="Search by last name"
              style={{ minWidth: '1rem' }}
              body={nameBodyTemplate}
            />

            <Column
              field="dob"
              header="Date of Birth"
              sortable
              filterPlaceholder="Search by birth date"
              style={{ minWidth: '1rem' }}
            />

            <Column
              field="age"
              header="Age"
              sortable
              filterPlaceholder="Search by age"
              style={{ minWidth: '1rem' }}
            />

            <Column
              field="phone"
              header="Phone Number"
              sortable
              filterPlaceholder="Search by Phone"
              style={{ minWidth: '2rem' }}
              body={phoneBodyTemplate}
            />

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

export default PatientsList;

