import { Button } from "../Button/component";

export const Tab = ({ id, text, onClick, className }) => {
    return (
        <Button className={className}  onClick={()  => onClick(id)} text={text} type="secondary"/>
    )
}