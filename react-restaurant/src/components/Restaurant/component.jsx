import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

import { AddReviewButton } from "../AddReviewButton/component";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/enitities/restaurant/selectors";

export const Restaurant = ({restaurantId}) => {

  const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

  return (
    <div>
      <h2>{restaurant?.name}</h2>
      <Menu dishIds={restaurant?.menu} />
      <Reviews reviewIds={restaurant?.reviews} />
      <AddReviewButton />
    </div>
  );
}
