import React, { useState, useEffect } from 'react'
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";
import { firestore } from '../index'
import './Table.css';

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
            return (<ll>No task</ll>)
    }

    const editTask = (id) => {
        firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date, time })
    }
    const deleteTask = (id) => {
        firestore.collection("task").doc(id + ' ').delete()
    }

    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
            </style>
        <div className="myStyleTable">
            <br />
            <h1>Welcome to Rendezvous Cafe</h1>
            <br />
            <h3>Beverage and Dessert</h3>
        </div>
        <div className="Book">
        <br />
        <div align="center"><h1>Reserve</h1></div>

            {/* <Card className="bg-light text-white">
                <Card.Img style={{ width:1900,height:270}} src="https://wallpaperaccess.com/full/277719.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title><h1>Reserved</h1></Card.Title>
                            <Card.Text>
                                Please reserved your table.
                            </Card.Text>
                    </Card.ImgOverlay>
            </Card> */}

        <br />
        <br />
        </div>
            <div className="li1">

            <Card style={{width:400,height:320,margin:10}}>
            <Form.Group>
                <tr>
                    <td>Name : </td>
                <td>
                <Form.Control className="mb-2 text-muted" style={{margin:15}} placeholder="Name" input type="text" onChange={(e) => setName(e.target.value)} />
                </td>
                </tr>
                <tr>
                    <td>Lastname : </td>
                <td>
                <Form.Control className="mb-2 text-muted" style={{margin:15}} placeholder="Lastname" input type="text" onChange={(e) => setLastname(e.target.value)} />
                </td>
                </tr>
                <tr>
                    <td>Date : </td>
                <td>
                <Form.Control className="mb-2 text-muted" style={{margin:15}} placeholder="00-00-00" input type="text" onChange={(e) => setDate(e.target.value)} />
                </td>
                </tr>
                <tr>
                    <td>Time : </td>
                <td>
                <Form.Control className="mb-2 text-muted" style={{margin:15}} placeholder="00:00" input type="text" onChange={(e) => setTime(e.target.value)} />
                </td>
                </tr>
            </Form.Group>
                <div>
                    <Button variant="outline-primary" onClick={addTask}>Reserve</Button>
                </div>
            </Card>
        </div>
            <br />
            <br />
            <div className="d-flex justify-content-center">
                {
                    renderTask()
                }
            </div>
            
            <Card className="li1">
            <Card.Img style={{ width:1900,height:270}} src="https://wallpaperaccess.com/full/277719.jpg" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title><h1>Contact Us :</h1></Card.Title>
                    <Card.Text>
                        <h2>www.rendezvous1234@gmail.com</h2>
                    </Card.Text>
                    <Card.Text>
                        <h2>098-25775XX</h2>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>

    );
}
export default App;







