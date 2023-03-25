import { Link } from 'react-router-dom';
import './header.css';
function Header() {
    return (
        <>
            <header className='header'>
                <Link to='/'><h1>Quiz App</h1></Link>
            </header>
        </>
    )
};
export default Header;