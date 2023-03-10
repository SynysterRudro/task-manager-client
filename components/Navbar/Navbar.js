import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // logout handling 
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/AddTasks'>Add Tasks</Link></li>
                            <li><Link href='/MyTasks'>My Task</Link></li>
                            <li><Link href='/Completed'>Completed Task</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost normal-case text-xl">taskManager</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/AddTasks'>Add Task</Link></li>
                        <li><Link href='/MyTasks'>My Task</Link></li>
                        <li><Link href='/Completed'>Completed Task</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <>
                        {
                            user?.uid ? <button onClick={handleLogOut} className="btn">Logout</button>
                                : <Link href='/Login' className="btn">Login</Link>
                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default Navbar;