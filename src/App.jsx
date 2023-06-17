import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import CategoryProvider from './context/CategoryProvider'
import BebidasProvider from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import Carrusel from './components/Carrusel'

function App () {

    return (
        <CategoryProvider>
            <BebidasProvider>
                <header className="py-5">
                    <h1>Buscador de bebidas</h1>
                </header>

                <Container className='mt-5'>
                    <Carrusel />
                    <Formulario />
                    <ListadoBebidas />
                    <ModalBebida />
                </Container>
            </BebidasProvider>
        </CategoryProvider>
    )

}

export default App
