import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const AddToListHandler = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      note: '',
      img: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        name='name'
        value={input.name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        name='age'
        value={input.age}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Image Url'
        className='AddToList-input'
        name='img'
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        className='AddToList-input'
        placeholder='Notes'
        name='note'
        value={input.note}
        onChange={handleChange}
      ></textarea>
      <button className='AddToList-btn' onClick={AddToListHandler}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
