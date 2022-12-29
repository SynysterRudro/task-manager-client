import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Tasks from '../components/Tasks/Tasks'

const MyTasks = ({ tasks }) => {
    // console.log(tasks);
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


export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/alltasks');
    const data = await res.json();

    return {
        props: {
            tasks: data
        }
    }
}