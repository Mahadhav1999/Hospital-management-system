import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const DoctorLogin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        }

    }

    const validate = () => {
        let result = true;
        if (username === "" || username === null) {
            result = false;
            toast.warn('Please enter the email!');
        }
        if (password === "" || password === null) {
            result = false;
            toast.warn('Please enter the password')
        }
        if (username === "admin" && password === "admin") {
            toast.success(`Successfully logged in as ${username}`);
            navigate('/dashboard/admin')
        }
        else {
            toast.error("Wrong Credentials")
        }
    }
    return (
        <>
        <Helmet>
            <title>Login | Admin - Hospital Management System</title>
            <meta name="description" content="Login to admin account to have the access admin system"/>
            <link rel="canonical" href="/auth/admin/login" />
        </Helmet>
        <div className="block-content">
            <div>
                <div className="flex">
                    <div className="surface-section w-full md:w-6 p-6 md:p-8">
                        <div className="mb-5">
                            <img src="https://cdn2.iconfinder.com/data/icons/toolbar-signs/512/medical-512.png" alt="admin" height="55" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome Back Admin</div>
                            <span className="text-600 font-medium mr-2">Login to continue
                            </span>
                            <Link to="/auth/user/login" className="font-medium no-underline text-blue-500 cursor-pointer">Not a admin ?</Link>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email2" className="block text-900 font-medium mb-2">Username</label>
                            <div className="col-12 md:col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText
                                        type='text'
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
                            <div className="col-12 md:col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-eye"></i>
                                    </span>
                                    <InputText
                                        type='password'
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button aria-label="Sign In" className="p-button p-component w-full mt-3"
                                style={{ fontFamily: 'Poppins,sans serif',fontWeight:'200' }}
                            >
                                <span className="p-button-icon  p-button-icon-left pi pi-user"></span>
                                <span className="p-button-label p-c">Sign In admin</span>
                                <span role="presentation" className="p-ink">
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className="hidden md:inline-flex w-6 bg-no-repeat bg-cover" style={{ background: 'url(https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1675081580~exp=1675082180~hmac=52eb4f67e7ff9fe55d5f05e68fe2b7b83554450cd0d49a76122bac4515f1a7ad)' }}>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DoctorLogin;