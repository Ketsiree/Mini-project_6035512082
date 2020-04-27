import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './Task.css';

export default props => {
    const { task, editTask, deleteTask } = props
    const { id,
        name,
        lastname,
        date,
        time } = task
    return (
        <div className="li">
            <Card style={{width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Reserved a Table</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">ID:{id}</Card.Subtitle>
                    <Card.Text>
                        <td>Name:{name}</td>
                        Lastname:{lastname}
                        <td>Date:{date}</td>
                        Time:{time}
                    </Card.Text>
                    <Button variant="outline-danger" onClick={() => deleteTask(id)}>Delete</Button>
                    <Button variant="outline-success" onClick={() => editTask(id)}>Update</Button>
                </Card.Body>
            </Card>
        </div>
    )
}





