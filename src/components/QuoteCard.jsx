import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteCard.css'; // We'll create this CSS file for styling

const QuoteCard = ({ addToSavedQuotes }) => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
      <button onClick={() => addToSavedQuotes(quote)}>Save Quote</button>
    </div>
  );
};

export default QuoteCard;
