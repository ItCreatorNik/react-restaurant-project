import React, { useState } from "react";
import { RestaurantReviewForm } from "../RestaurantReviewForm/component";
import { Button } from "../Button/component";
import { createPortal } from "react-dom";

export const AddReviewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        text={"Add Review"}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen &&
        createPortal(
          <RestaurantReviewForm onModalClose={() => setIsModalOpen(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
