import { Dish } from "../Dish/component";

export const Menu = ({ dishIds }) => {

    return (
        <div>
            {!!dishIds && dishIds.map(dishId => <Dish key={dishId} dishId={dishId}/>)}
        </div>
    )
}