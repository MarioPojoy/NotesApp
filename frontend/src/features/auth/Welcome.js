import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`NotesApp!: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('es-GT', { dateStyle: 'full', timeStyle: 'medium' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Bienvenido {username}!</h1>

            <p><Link to="/dash/notes">Ver Notas</Link></p>

            <p><Link to="/dash/notes/new">Agregar nueva Nota</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Ver opciones de usuario</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Agregar nuevo usuario</Link></p>}

        </section>
    )

    return content
}
export default Welcome