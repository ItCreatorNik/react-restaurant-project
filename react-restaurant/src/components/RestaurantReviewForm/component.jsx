import { useReducer } from 'react';
import { Button } from "../Button/component";
import styles from "./styles.module.css";

const DEFAULT_VALUE = {
  name: "",
  review: "",
  rating: "",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...state, [action.payload.name]: action.payload.value };
    case "setReview":
      return { ...state, [action.payload.name]: action.payload.value };
    case "setRating":
      return { ...state, [action.payload.name]: action.payload.value };
    case "clearForm":
      return DEFAULT_VALUE;
    default:
      return state;
  }
};

export const RestaurantReviewForm = ({onModalClose}) => {

    const [formValue, dispatch] = useReducer(reducer,DEFAULT_VALUE);

    console.log(formValue);

  return (
    <form className={styles.reviewForm}>
      <label htmlFor="name">Имя:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValue.name}
        onChange={(event) => {
          dispatch({
            type: "setName",
            payload: event.target,
          });
        }}
      ></input>

      <label htmlFor="review">Текст отзыва:</label>
      <input
        id="review"
        name="review"
        value={formValue.review}
        onChange={(event) => {
          dispatch({
            type: "setReview",
            payload: event.target,
          });
        }}
      ></input>

      <label htmlFor="rating">Рейтинг:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        required
        value={formValue.rating}
        onChange={(event) => {
          dispatch({
            type: "setRating",
            payload: event.target,
          });
        }}
      ></input>

      <Button
        onClick={() => {
          dispatch({ type: "clearForm" });
          onModalClose();
        }}
        text={"Save"}
      ></Button>
      <Button
        onClick={() => {
          dispatch({ type: "clearForm" });
          onModalClose();
        }}
        text={"Cancel"}
      ></Button>
    </form>
  );
};
