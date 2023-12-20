import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./AddForm.css";
import Card from "../Models/Card";

interface AddFormProps {
  addCard: (newCard: Card) => void;
}

const initialState = {
  title: "",
  description: "",
  price: "",
  img: "",
};

const AddForm: FC<AddFormProps> = ({ addCard }) => {
  const [newCard, setNewCard] = useState<{
    title: string;
    description: string;
    price: string;
    img: string;
  }>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, img, price } = newCard;
    if (title && description && img && price) {
      addCard({
        title,
        description,
        price,
        img,
        id: Date.now(),
      });
      setNewCard(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <input
        placeholder="Model"
        type="text"
        name="title"
        onChange={handleChange}
        value={newCard.title}
      />

      <input
        placeholder="Year"
        type="text"
        name="description"
        onChange={handleChange}
        value={newCard.description}
      />
      <input
        placeholder="Price"
        type="number"
        name="price"
        onChange={handleChange}
        value={newCard.price}
      />
      <input
        name="img"
        type="text"
        onChange={handleChange}
        placeholder="Image"
        value={newCard.img}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddForm;
