import { Tabs } from "../../components/Tabs/component";
import { restaurants } from "../../constants/mock";
import {useState} from "react";
import { Restaurant } from '../../components/Restaurant/component';

const tabs = restaurants.map(restaurant => ({ id: restaurant.id, text: restaurant.name }))

export const Main = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  
    return (
      <div>
        <Tabs tabs={tabs} onTabSelect={setActiveRestaurantIndex} />
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      </div>
    );
}