import React from 'react';
import AvaibleMeals from './AvaibleMeals/AvaibleMeals';
import MealsSummary from './MealsSummary/MealsSummary';


function Meals() {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvaibleMeals />
        </React.Fragment>
    );
}

export default Meals;