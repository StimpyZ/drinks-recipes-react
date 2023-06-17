import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import useCategory from '../hooks/useCategory'
import { useState } from 'react'
import useBebidas from '../hooks/useBebidas'

export default function Formulario () {

    const { category, handleChangeSearch, search } = useCategory()

    const { obtainBebidas } = useBebidas()
    const [error, setError] = useState('')

    const handleSubmit = e => {

        e.preventDefault()

        if (Object.values(search).includes('')) {

            setError('Todos los campos son obligatorios')

        } else {

            setError('')
            obtainBebidas(search)

        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="name">
                            Nombre de la bebida
                        </Form.Label>
                        <Form.Control
                            onChange={handleChangeSearch}
                            id="name"
                            type="text"
                            placeholder="Ej: Margarita"
                            name="name"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="category">
                            Categoría de la bebida
                        </Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                            onChange={handleChangeSearch}
                        >
                            <option value="">-- Seleccione --</option>
                            {category.map((item, idx) => (
                                <option key={idx} value={item.strCategory}>
                                    {item.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Button
                        variant="danger"
                        className="w-100 text-uppercase mt-4"
                        type="submit"
                    >
                        Buscar bebida
                    </Button>
                </Col>
            </Row>
        </Form>
    )

}
