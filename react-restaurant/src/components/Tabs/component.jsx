import { Tab } from "../Tab/component";

export const Tabs = ({ tabs, onTabSelect }) => {
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
            />
          ))}
      </ul>
    </nav>
  );
};