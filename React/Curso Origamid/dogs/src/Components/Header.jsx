import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <div className={styles.header}>
            <nav className='container'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    )
}

