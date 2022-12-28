import Link from 'next/link';
import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../components/Contexts/AuthProvider';
import { useRouter } from 'next/router';

const SignUp = () => {

    const { googleLogin } = useContext(AuthContext);

    const router = useRouter();


    // google login provider
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                router.push('/');
            })
            .catch(err => {
                console.error(err);
            })
    }


    // form controller 
    const handleEmailPassword = (event) => {
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
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">Log in to our website to use the full feature of our Website. You can also log in using Google</p>
                            <FaGoogle onClick={handleGoogle} className='text-4xl hover:text-primary'></FaGoogle>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            {/* form part  */}
                            <form onSubmit={handleEmailPassword} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
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
                                    Already have an account? Then  <Link className='text-blue-500 ' href='/Login'>Login</Link>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Signup" />
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

export default SignUp;