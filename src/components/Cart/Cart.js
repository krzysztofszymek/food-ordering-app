import { useContext } from 'react';
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../context/CartContext/cart-context';
import CartItem from './CartItem/CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemAddHandler(item){
        const cartItem = { ...item, amount: 1 };
        cartCtx.addItem(cartItem);
    }

    function cartItemRemoveHandler(id){
        cartCtx.removeItem(id);
    }

    return (
        <Modal>
            <ul className={styles['cart-items']}>
                {cartCtx.items.map((item) => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        onAdd={cartItemAddHandler.bind(null, item)} 
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    />
                ))}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']} onClick={props.onManageModal}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;