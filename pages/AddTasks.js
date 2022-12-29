import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../components/Contexts/AuthProvider';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const AddTasks = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);


    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const details = form.taskDetails.value;
        const img = form.img.value;


        if (user?.uid) {
            const tasks = {
                title: name,
                email: user?.email,
                state: 'not',
                description: details
            }

            fetch('http://localhost:5000/alltasks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(tasks)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        alert('Tasks added');
                    }
                })


        }

        else {
            // navigate('/login');
        }

        // console.log(review);

        form.reset();
    }



    return (
        <div>
            <Navbar></Navbar>

            {/* form  */}

            <div className='my-8'>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Add tasks!</h1>
                            <p className="py-6">People should not waste the space of their brain in order to store less important informations. We all should use our brain in creative works</p>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            {/* form part  */}
                            <form onSubmit={handleForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Details</span>
                                    </label>
                                    <input type="text" name='taskDetails' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Pick a file</span>
                                        </label>
                                        <input name='img' type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add task" />
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

export default AddTasks;