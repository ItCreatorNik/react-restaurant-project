import {Counter} from "../Counter/component";
import {useState} from "react";

export const Dish = ({name}) => {
    const [count, setCount] = useState(0)
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
            <h2>{name} -</h2>
            <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </div>
    )
}