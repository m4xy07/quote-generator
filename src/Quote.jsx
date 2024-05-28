import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <FaQuoteLeft className="quote-icon" />
      <p className="quote-text">{quote}</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default Quote;