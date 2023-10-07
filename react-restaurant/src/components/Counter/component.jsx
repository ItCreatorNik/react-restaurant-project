export const Counter = ({count, onIncrease, onDecrease}) => {
    return (
        <>
            <button onClick={onDecrease} disabled={count <= 0}>-</button>
            <span>{count}</span>
            <button onClick={onIncrease} disabled={count >= 5}>+</button>
        </>
    )
}
