import { Button } from "../Button/component";

export const Counter = ({count, onIncrease, onDecrease}) => {
    return (
        <>
            <Button onClick={onDecrease} size="sm" disabled={count <= 0} text="-"></Button>
            <span>{count}</span>
            <Button onClick={onIncrease} size="sm" disabled={count >= 5} text="+"></Button>
        </>
    )
}
