import React, { useState, useEffect } from 'react';
import Quote from './Quote.jsx';
import { getQuote } from './quotes.jsx';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import './App.css';
import { updateBodyClass } from './index.jsx';

const App = () => {
  const [quote, setQuote] = useState(null);
  const [simpleMode, setSimpleMode] = useState(localStorage.getItem('simpleMode') === 'true');

  // useEffect for simpleMode
  useEffect(() => {
    localStorage.setItem('simpleMode', simpleMode);
    updateBodyClass(simpleMode);
  }, [simpleMode]);

  // useEffect for fetching quote
  useEffect(() => {
    const fetchQuote = async () => {
      const quoteData = await getQuote();
      setQuote(quoteData);
    };

    fetchQuote();
  }, []); 

  const handleClick = () => {
    const fetchQuote = async () => {
      const quoteData = await getQuote();
      setQuote(quoteData);
    };

    fetchQuote();
  };

  return (
    <div className="app">
      <Quote quote={quote?.en} author={quote?.author} />
      <button class="load-quote-btn" onClick={handleClick}>Next →</button>
      <div className="icons">
        <a href="https://github.com/m4xy07" className="icon github" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://m4xy.org" className="icon globe" target="_blank" rel="noopener noreferrer">
          <FaGlobe size={30} />
        </a>
        <a href="https://www.linkedin.com/in/aman-shaikh33" className="icon linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
       
      </div>
      <p></p>
       <p>Simple Mode?</p>
          <div className="toggle-switch">
            <label class="rocker rocker-small"> 
            <input type="checkbox"
             id="simple-mode"
              checked={simpleMode} onChange={() => setSimpleMode(!simpleMode)}
            />
            <span class="switch-left">Yes</span>
            <span class="switch-right">No</span>
            </label>   
          </div>
          <div className="footer">
            Made with 💖by <a href="https://github.com/m4xy07" target="_blank" rel="noopener noreferrer">m4xy07</a>
          </div>
      </div>
    
  );
};

export default App;