import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Login = () => {

    // form controller 
    const handleEmailPasswordLogin = (event) => {
        event.preventDefault();
        // console.log(event);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='my-8'>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Log in to our website to use the full feature of our Website. You can also log in using Google</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            {/* form part  */}
                            <form onSubmit={handleEmailPasswordLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div>
                                    Didn't have an account? Then  <Link className='text-blue-500 ' href='/SignUp'>Sign up</Link>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;