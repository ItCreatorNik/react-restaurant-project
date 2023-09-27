import { Dish } from "../Dish/component";

export const Menu = ({ menu }) => {
    return (
        <div>
            {!!menu && menu.map(dish => <Dish key={dish.id} name={dish.name}/>)}
        </div>
    )
}