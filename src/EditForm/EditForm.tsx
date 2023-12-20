import React, { ChangeEvent, FC, FormEvent, useState, useEffect } from "react";
import Card from "../Models/Card";

interface EditFormProps {
  data: Card;
  handleToogleEdit: () => void;
  updateCard: (newCard: Card) => void;
 
}

const EditForm: FC<EditFormProps> = ({
  data,
  handleToogleEdit,
  updateCard,
 
}) => {
  const [editCard, setEditCard] = useState<Card>(data);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditCard({
      ...editCard,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, img, price } = editCard;
    if (title && description && img && price) {
      updateCard(editCard);
      handleToogleEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <input
        placeholder="title"
        type="text"
        name="title"
        onChange={handleChange}
        value={editCard.title}
      />

      <input
        placeholder="description"
        type="text"
        name="description"
        onChange={handleChange}
        value={editCard.description}
      />
      <input
        placeholder="price"
        type="text"
        name="price"
        onChange={handleChange}
        value={editCard.price}
      />
      <input
        name="img"
        type="text"
        onChange={handleChange}
        placeholder="image"
        value={editCard.img}
      />
      <button type="submit">
        Edit Card
      </button>
    </form>
  );
};

export default EditForm;
