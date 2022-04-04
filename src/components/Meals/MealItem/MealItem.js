import { useContext } from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import styles from './MealItem.module.css'
import CartContext from '../../../context/CartContext/cart-context';

function MealItem(props) {
    const cartCtx = useContext(CartContext);
    const price = `$${props.data.price.toFixed(2)}`;
    
    function addToCartHandler(amount) {
        cartCtx.addItem({
            id: props.data.id,
            name: props.data.name,
            amount: amount,
            price: props.data.price
        });
    }

    return (
        <li key={props.data.id} className={styles.meal}>
            <div>
                <h3>{props.data.name}</h3>
                <div className={styles.description}>{props.data.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.data.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;