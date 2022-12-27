import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero my-6 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/notes.svg" className="rounded-lg w-80 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Task Mangager!</h1>
                        <p className="py-6">Here users can set their all completed and upcoming tasks and also can set their task. It's UI is very user friendly and built by N Dibyandu Singha Rowdra. Hope you will like this website.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;