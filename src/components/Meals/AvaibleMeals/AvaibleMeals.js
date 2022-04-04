import styles from './AvaibleMeals.module.css'
import FoodMenu from '../../data/FoodMenu'
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

function AvaibleMeals() {
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {FoodMenu.map((meal) => (
                        <MealItem key={meal.id} data={meal}/>
                    ))}
                </ul>
            </Card>
        </section>
    );
}

export default AvaibleMeals;