
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {  toast } from 'react-toastify';
import '../../Assets/Styles/DoctorsList.css';
import { Helmet } from 'react-helmet';




const UsersList = () => {

  const [users, setUsers] = useState();
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [filters, setFilters] = useState({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [loading, setLoading] = useState(true);


//Functions  To get the users data 
  let getData = async () => {
    let response = await fetch("http://localhost:4000/users")
    let data = await response.json();
    setUsers(data);
    setLoading(false);
  }


// Calling the function in the useEffect Hook
  useEffect(() => {
    getData();
  }, [users]);


  const handleDelete = (id, first_name) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: 'DELETE',
    })
    toast.success(`User ${first_name} has been deleted permanently with id - ${id}`);
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
        <h4 className="m-0 text-blue-500">Users List {users?.length}</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue}
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
          {rowData.first_name}
        </span>
      </React.Fragment>
    );
  }

  const nameBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span
          className="image-text">
          {rowData.last_name}
        </span>
      </React.Fragment>
    );
  }


  const phoneBodyTemplate = (rowData) => {
    return (
      <>
        <span className="image-text">{rowData.phone_number}</span>
      </>
    )

  }


  const actionBodyTemplate = (rowData) => {
    return <Button
      onClick={() => handleDelete(rowData.id, rowData.first_name)}
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
        <title>Users List | Admin - Hospital Management System</title>
        <meta name="description" content="Users list of the admin dashboard which has the access to list of all the users" />
        <link rel="canonical" href="/dashboard/admin/list/doctors" />
      </Helmet>


      <div className="datatable-doc-demo">

        <div className="card">

          <DataTable
            style={{ fontFamily: 'Poppins,sans serif' }}
            value={users}
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
            selection={selectedUsers}
            onSelectionChange={e => setSelectedUsers(e.value)}
            filters={filters}
            filterDisplay="menu"
            loading={loading}
            responsiveLayout="scroll"
            globalFilterFields={['id', 'first_name', 'last_name', 'username', 'email', 'phone_number', 'city']}
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
              field="first_name"
              header="First Name"
              sortable
              filterPlaceholder="Search by first name"
              style={{ minWidth: '1rem' }}
              body={addressBodyTemplate}
            />

            <Column
              field="last_name"
              header="Last Name"
              sortable
              filterPlaceholder="Search by last name"
              style={{ minWidth: '1rem' }}
              body={nameBodyTemplate}
            />

            <Column
              field="username"
              header="Username"
              sortable
              filterPlaceholder="Search by username"
              style={{ minWidth: '1rem' }}
            />

            <Column
              field="email"
              header="Email"
              sortable
              filterPlaceholder="Search by email"
              style={{ minWidth: '1rem' }}
            />

            <Column
              field="city"
              header="City"
              sortable
              filterPlaceholder="Search by city"
              style={{ minWidth: '1rem' }}
            />

            <Column
              field="phone_number"
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

export default UsersList;

