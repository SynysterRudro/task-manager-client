import React from 'react';

const tasks = (task) => {

    console.log(task);
    const { title, img, description } = task.task;

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{title}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {description}
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Completed</button>
                                <button className="btn btn-ghost btn-xs">Edit Task</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default tasks;