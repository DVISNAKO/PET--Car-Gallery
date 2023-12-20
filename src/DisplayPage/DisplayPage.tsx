import React, { FC, useEffect, useState } from "react";
import "./DisplayPage.css";
import AddForm from "../AddForm/AddForm";
import SingleCard from "../SingleCard/SingleCard";
import Card from "../Models/Card";

interface DisplayPageProps {
  cardList: Card[];
  addCard: (newCard: Card) => void;
  deleteCard: (id: number) => void;
  updateCard: (newCard: Card) => void;
}

const DisplayPage: FC<DisplayPageProps> = ({
  addCard,
  cardList,
  deleteCard,
  updateCard,
}) => {

  return (
    <div className="container">
   
        <div className="form__box">
          <h2>Add form</h2>
          <AddForm addCard={addCard} />
        </div>

      <hr />
      <div className="galery_box">
        <h2>Galery</h2>
        {cardList.map((card) => (
          <SingleCard
            updateCard={updateCard}
            card={card}
            key={card.id}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
