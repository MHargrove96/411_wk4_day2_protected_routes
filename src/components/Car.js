import React from 'react'
import { useParams } from 'react-router-dom'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const { id } = useParams();
    const car = cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car