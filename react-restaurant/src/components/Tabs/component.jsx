import { Tab } from "../Tab/component";
import styles from './styles.module.css'
import classNames from "classnames";

export const Tabs = ({ tabs, activeIndex, onTabSelect }) => {
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
              className={classNames(styles.tab, {
                  [styles.tabActive]: index === activeIndex
              })}
            />
          ))}
      </ul>
    </nav>
  );
};