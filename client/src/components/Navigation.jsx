import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='wrapper-links'>
            <NavLink to='/'>Головна</NavLink>
            <NavLink to='/get-files'>Файли</NavLink>
            <NavLink to='/create-post'>Створити</NavLink>
        </nav>
    )
}

export default Navigation;