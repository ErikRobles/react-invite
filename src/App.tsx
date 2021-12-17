import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://e0.365dm.com/21/02/1600x900/skysports-nba-los-angeles-lakers_5268563.jpg?20210211081745',
      age: 36,
      note: 'Alergic to staying on the same team.',
    },
  ]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
