import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { Tab } from "../Tab/component";
import styles from './styles.module.css'
import classNames from "classnames";

export const Tabs = ({ tabs, activeIndex, onTabSelect }) => {

  const { theme } = useContext(ThemeContext);


  return (
    <nav>
      <ul>
        {!!tabs &&
          tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              id={tab.id}
              text={tab.text}
              onClick={() => onTabSelect(index)}
              className={classNames(styles.tab, styles[theme], {
                [styles.tabActive]: index === activeIndex,
              })}
            />
          ))}
      </ul>
    </nav>
  );
};