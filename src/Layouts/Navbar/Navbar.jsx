import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';




const Navbar = () => {


    const start =
        <Link to='/'>
            <img alt="logo" src="http://wjm.s3.amazonaws.com/todayshospital/uploads/Johnston.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>
        </Link>
    const end = <div className="grid grid-nogutter surface-0 text-800 bg-blue-300">
        <section>
            <Link to='/auth/admin/login' className="no-underline">
                <Button label="As Doctor" type="button" className="mr-3 p-button-raised" />
            </Link>
            <Link to='/auth/user/login' className="no-underline">
                <Button label="As User" type="button" className="p-button-outlined bg-transparent border-white text-white" />
            </Link>
        </section>
    </div>

    return (
        <div className='grid'>
            <div className="card col bg-blue-300">
                <div className="mx-5">
                <Menubar
                            style={{ border: 'none', borderRadius: 'none' }}
                            start={start}
                            end={end}
                            className='bg-transparent'
                        />
                </div>
            </div>
        </div>
    );
}

export default Navbar;