import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/Contexts/AuthProvider';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Tasks from '../components/Tasks/Tasks'



const MyTasks = () => {
    // console.log(tasks);
    const { user } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/alltasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])


    return (
        <div>
            <Navbar></Navbar>
            <div className='my-6'>
                <h1 className='text-4xl text-center my-6'>All Tasks</h1>
                {
                    tasks.map(task => <Tasks
                        key={task._id}
                        task={task}
                    ></Tasks>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyTasks;
