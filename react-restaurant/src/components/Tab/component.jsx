export const Tab = ({ id, text, onClick }) => {
    return (
        <button onClick={()  => onClick(id)}>{text}</button>
    )
}