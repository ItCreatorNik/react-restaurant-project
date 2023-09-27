import { Tabs } from "../../components/Tabs/component";
import { restaurants } from "../../constants/mock";
import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";
import {useState} from "react";

const tabs = restaurants.map(restaurant => ({ id: restaurant.id, text: restaurant.name }))

export const Main = () => {
    const [restaurantId, setRestaurantId] = useState(restaurants[0].id)

    const activeRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId)
    const setActiveRestaurant = (id) => {
        setRestaurantId(id)
    }
    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveRestaurant}/>
            <h2>{activeRestaurant.name}</h2>
            <Menu menu={activeRestaurant.menu}/>
            <Reviews reviews={activeRestaurant.reviews}/>
        </div>
    )
}