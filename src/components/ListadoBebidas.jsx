import React from 'react'
import useBebidas from '../hooks/useBebidas'
import { Row } from 'react-bootstrap'
import Bebida from './Bebida'

export default function ListadoBebidas () {

    const { drinks } = useBebidas()

    return (
        <Row >
            {drinks.map(bebida => (
                <Bebida
                    key={bebida.idDrink}
                    bebidas={bebida}
                />
            ))}
        </Row>
    )

}
