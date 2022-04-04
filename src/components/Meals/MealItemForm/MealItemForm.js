import { useRef, useState } from 'react';
import Input from '../../UI/Input/Input';
import styles from './MealItemForm.module.css'

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                label="Amount" 
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id, 
                    type: 'number', 
                    min: '1', 
                    max: '5', 
                    step: '1', 
                    defaultValue: '1'
                }}/>
            <button>Add to Cart</button>
            {!amountIsValid && <p>Enter a Valid Amount</p>}
        </form>
    );
}

export default MealItemForm;