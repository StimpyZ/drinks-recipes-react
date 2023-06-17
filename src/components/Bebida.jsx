import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export default function Bebida ({ bebidas }) {

    const { handleModalClick, handleDrinkId } = useBebidas()

    const { strDrink, strDrinkThumb, idDrink } = bebidas

    return (
        <Col md={6} lg={3} className="mt-4">
            <Card className="mb-4" style={{ minHeight: '440px' }}>
                <Card.Img
                    variant="top"
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <Button
                        onClick={() => {

                            handleDrinkId(idDrink)
                            handleModalClick()

                        }}
                        className="w-100 text-uppercase mt-2"
                        variant="danger"
                    >
                        Ver receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )

}
