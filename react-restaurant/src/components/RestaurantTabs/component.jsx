import {RestaurantTab} from "../RestaurantTab/component";

export const RestaurantTabs = ({ restaurantIds, activeRestaurantId, onTabSelect }) => {

  return (
    <nav>
      <ul>
        {!!restaurantIds &&
            restaurantIds.map((restaurantId) => (
              <RestaurantTab key={restaurantId} restaurantId={restaurantId} activeRestaurantId={activeRestaurantId} onTabSelect={onTabSelect}/>
          ))}
      </ul>
    </nav>
  );
};