import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import './Quote.css'

const Quote = ({ quote, author }) => {
  const downloadQuote = () => {
    const element = document.createElement('a');
    const file = new Blob([`${quote} - ${author}\n\nquotes.m4xy.org - https://github.com/m4xy07`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `A quote by ${author}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className="quote">
      <FaQuoteLeft className="quote-icon" />
      <p className="quote-text">{quote}</p>
      <p className="quote-author">- {author}</p>
      <div class="wrap-delete">
        <button class="button-delete" onClick={downloadQuote}>
            <span class='text'>Save</span>
            <span class="icon"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z"/><path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z"/></g></svg>
            </span>
            </button>
       </div>
    </div>
  );
};

export default Quote;