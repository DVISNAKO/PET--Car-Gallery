import React, { FC, useState } from "react";
import "./SigleCard.css";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Card from "../Models/Card";
import EditForm from "../EditForm/EditForm";

interface SingleCardProps {
  card: Card;
  deleteCard: (id: number) => void;
  updateCard: (newCard: Card) => void;
}

const SingleCard: FC<SingleCardProps> = ({ card, deleteCard, updateCard }) => {
  const handleDelete = () => {
    deleteCard(card.id);
  };
  const [edit, setEdit] = useState<boolean>(false);

  const handleToogleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="card">
      <div className="img__box">
        <div className="img__box">
          <img src={`images/${card.img}`} />
        </div>
        <div className="btn__box">
          <MdEditSquare
            onClick={handleToogleEdit}
            style={{ marginRight: 10 }}
          />
          <MdDelete onClick={handleDelete} />
        </div>
      </div>
      <hr />
      {!edit ? (
        <div className="info__box">
          <h3>info about card</h3>
          <div className="content">
            <h4>Model: {card.title}</h4>
            <h4>Year: {card.description}</h4>
            <h4>Price: ${card.price}</h4>
          </div>
        </div>
      ) : null}
      {edit ? (
        <EditForm
          data={card}
          handleToogleEdit={handleToogleEdit}
          updateCard={updateCard}
        />
      ) : null}
    </div>
  );
};

export default SingleCard;
