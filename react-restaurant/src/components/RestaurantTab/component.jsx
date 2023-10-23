import classNames from "classnames";
import styles from "./styles.module.css";
import { Tab } from "../Tab/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/enitities/restaurant/selectors";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const RestaurantTab = ({
  restaurantId,
  activeRestaurantId,
  onTabSelect,
}) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { theme } = useContext(ThemeContext);

  return (
    <Tab
      key={restaurantId}
      id={restaurantId}
      text={restaurant.name}
      onClick={() => onTabSelect(restaurantId)}
      className={classNames(styles.tab, styles[theme], {
        [styles.tabActive]: restaurantId === activeRestaurantId,
      })}
    />
  );
};
