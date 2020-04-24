import React, { useState, useEffect } from 'react'
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";
import { firestore } from '../index'

function App() {

    const [task, setTask] = useState([
        {
            id: 1,
            name: "Peempos",
            lastname: "Sinla",
            date: "24-04-20",
            time: "18.00"
        },
        {
            id: 2,
            name: "Ketsiree",
            lastname: "Tantiwit",
            date: "24-04-20",
            time: "18.00"
        }
    ]);

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        retriverData()
    }, [])

    const retriverData = () => {
        firestore.collection("task").onSnapshot(snapshot => {
            console.log(snapshot.docs)
            let mytask = snapshot.docs.map(d => {
                const { id, name, lastname, date, time } = d.data()
                return { id, name, lastname, date, time }
            })
            setTask(mytask)
        })
    }

    const addTask = () => {
        let id = (task.length === 0) ? 1 : task[task.length - 1].id + 1
        firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date, time })
    }


    const renderTask = () => {
        if (task && task.length) {
            return task.map((text, index) => {
                return (
                    <Task key={index} task={text} deleteTask={deleteTask} editTask={editTask} />
                )
            }
            )

        }
        else
            return (<ll> No task </ll>)
    }

    const editTask = (id) => {
        firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date, time })
    }
    const deleteTask = (id) => {
        firestore.collection("task").doc(id + ' ').delete()
    }

    return (
        <div>
            <div>
                <tr>
                    <td>Name : </td>
                    <td>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>Lastname : </td>
                    <td>
                        <input type="text" onChange={(e) => setLastname(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>Date : </td>
                    <td>
                        <input type="text" onChange={(e) => setDate(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>Time : </td>
                    <td>
                        <input type="text" onChange={(e) => setTime(e.target.value)} />
                    </td>
                </tr>
                <div>
                    <Button variant="outline-primary" onClick={addTask}>Add</Button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {
                    renderTask()
                }
            </div>
        </div>
    );
}
export default App;

//Hello

















