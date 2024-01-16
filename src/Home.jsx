import React from "react";
import { useSelector } from "react-redux";

function Home() {

    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);

    return(
        <div className="container">
            <br />
            <h2>
                Basic Crud Using Redux 
            </h2>
            <button className="btn btn-success my-3">
                New Task +
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Task
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasks.map((task,idx) => (
                            <tr key={idx}>
                                <td>
                                    {task.id}
                                </td>
                                <td>
                                    {task.taskName}
                                </td>
                                <td>
                                    <button className="btn btn-md btn-primary">edit</button>
                                    <button className="btn btn-md btn-danger ms-2">delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Home;