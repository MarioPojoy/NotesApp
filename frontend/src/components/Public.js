import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Bienvenido a <span className="nowrap">NotesApp!</span></h1>
            </header>
            <main className="public__main">
                <p>Direccion del establecimiento</p>
                <address className="public__addr">
                    NotesApp!<br />
                    Departamento<br />
                    Ciudad<br />
                    <a href="tel:+5025555555555">5555-5555</a>
                </address>
                <br />
                <p>Dueño: Mario Pojoy</p>
            </main>
            <footer>
                <Link to="/login">Empleados</Link>
            </footer>
        </section>

    )
    return content
}
export default Public