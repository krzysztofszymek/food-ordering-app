import { useContext } from 'react';
import styles from './HeaderCartButton.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../../../context/CartContext/cart-context';

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);

    const itemsInCart = cartCtx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <FaShoppingCart size={20}/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                {itemsInCart}
            </span>
        </button>
    );
}

export default HeaderCartButton;