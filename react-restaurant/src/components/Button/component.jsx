import { useContext } from 'react';
import styles from './styles.module.css';
import classNames from "classnames";
import { ThemeContext } from '../../contexts/Theme';

export const Button = ({type = 'primary', size = 'md', text, disabled, className, onClick}) => {

   const {theme} = useContext(ThemeContext);

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          styles.button,
          [styles[size]],
          [styles[type]],
          [styles[theme]],
          className
        )}
      >
        {text}
      </button>
    );
}