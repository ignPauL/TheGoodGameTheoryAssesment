import React, { useState } from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';

const App = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  const addToSavedQuotes = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard addToSavedQuotes={addToSavedQuotes} />
      <h2>Saved Quotes</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
