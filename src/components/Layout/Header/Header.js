import { Fragment } from "react";
import mealsImage from '../../../assets/meals2.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import Links from '../../Links/Links'

function Header(props) {
    return (
        <Fragment>
            <header className={styles.header}>
                <Links />
                <h1>Food Ordering App</h1>
                <HeaderCartButton onClick={props.onManageModal}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Table with meals"/>
            </div>
        </Fragment>
    );
}

export default Header;