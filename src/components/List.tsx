import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img src={person.url} className='List-img' alt='' />
            <h3>{person.name}</h3>
          </div>
          <p>{person.age} years old.</p>
          <p className='List-note'>{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;