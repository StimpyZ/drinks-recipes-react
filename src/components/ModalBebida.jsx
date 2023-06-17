import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'

export default function ModalBebida () {

    const { modal, handleModalClick, singleDrink, loading } = useBebidas()

    const showIngredients = () => {

        const ingredients = []

        for (let i = 1; i < 16; i++) {

            if (singleDrink[`strIngredient${i}`]) {

                ingredients.push(
                    <li key={i}>
                        {singleDrink[`strIngredient${i}`]}{' '}
                        {singleDrink[`strMeasure${i}`]}
                    </li>
                )

            }

        }

        return ingredients

    }

    return (
        <>
            {loading
                ? <Spinner />
                : (
                    <Modal show={modal} onHide={handleModalClick}>
                        <Image
                            src={singleDrink.strDrinkThumb}
                            alt={`Imagen de la bebida ${singleDrink.strDrink}`}
                        />
                        <Modal.Header>
                            <Modal.Title>{singleDrink.strDrink}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="p-3">
                                <h2>Instruccioness</h2>
                                <p className="px-3">{singleDrink.strInstructions}</p>
                                <h2>Ingredientes y cantidades</h2>
                                <p className="px-4">{showIngredients()}</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                )}

        </>
    )

}
