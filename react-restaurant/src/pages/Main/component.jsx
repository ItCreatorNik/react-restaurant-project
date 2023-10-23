import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../redux/enitities/restaurant/selectors";
import {ThemeProvider} from "../../contexts/Theme";

export const Main = () => {
  const restaurantIds = useSelector(state => selectRestaurantIds(state))
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>
          <RestaurantTabs
            restaurantIds={restaurantIds}
            onTabSelect={setActiveRestaurantId}
            activeRestaurantId={activeRestaurantId}
          />
          <Restaurant restaurantId={activeRestaurantId} />
          <div id="modal-container" ></div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
