import { Carousel } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import React from 'react'

export default function Carrusel () {

    const { drinks, handleDrinkId, handleModalClick } = useBebidas()

    return (
        <Carousel className="mb-5" variant="dark">
            {drinks.map((bebida) => (
                <Carousel.Item
                    key={bebida.idDrink}
                    onClick={() => {

                        handleDrinkId(bebida.idDrink)
                        handleModalClick()

                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        className="d-block w-100"
                        src={bebida.strDrinkThumb}
                        alt={`Imagen de la bebida ${bebida.strDrink}`}
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h5 className='text-uppercase fs-2 fw-bold'>{bebida.strDrink}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )

}
