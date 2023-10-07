import styles from './styles.module.css';
import classNames from "classnames";

export const Button = ({type = 'primary', size = 'md', text, disabled, className, onClick}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(styles.button, [styles[size]], [styles[type]], className)}
        >{text}</button>
    )
}