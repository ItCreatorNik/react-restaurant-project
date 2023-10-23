import {Counter} from "../Counter/component";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/enitities/dish/selectors";

export const Dish = ({dishId}) => {
    const [count, setCount] = useState(0)
    const dish = useSelector(state => selectDishById(state, dishId))
    const onIncrease = () => {
        if (count >= 5) {
            return
        }
        setCount(count + 1)
    }
    const onDecrease = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <h2>{dish.name} -</h2>
            <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </div>
    )
}