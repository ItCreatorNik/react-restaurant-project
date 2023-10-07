import { Tabs } from "../../components/Tabs/component";
import { restaurants } from "../../constants/mock";
import {useState} from "react";
import { Restaurant } from '../../components/Restaurant/component';
import { Header } from '../../components/Header/component'
import { Footer } from '../../components/Footer/component'
import styles from './styles.module.css'

const tabs = restaurants.map(restaurant => ({ id: restaurant.id, text: restaurant.name }))

export const Main = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  
    return (
      <div className={styles.root}>
        <Header/>
          <main className={styles.main}>
              <Tabs tabs={tabs} onTabSelect={setActiveRestaurantIndex} activeIndex={activeRestaurantIndex} />
              <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
          </main>
        <Footer/>
      </div>
    );
}