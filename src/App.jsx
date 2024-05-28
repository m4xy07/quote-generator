import React, { useState, useEffect } from "react";
import Quote from "./Quote.jsx";
import { getQuote } from "./fetchquotes.jsx";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import "./App.css";
import { updateBodyClass } from "./index.jsx";


const App = () => {
  const [quote, setQuote] = useState(null);
  const [simpleMode, setSimpleMode] = useState(
    localStorage.getItem("simpleMode") === "true"
  );

  const downloadQuote = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `${quote?.en} \n- ${quote?.author}\n\nhttps://quotes.m4xy.org | https://github.com/m4xy07`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `A quote by ${quote?.author}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  // useEffect for simpleMode
  useEffect(() => {
    localStorage.setItem("simpleMode", simpleMode);
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
      <div class="wrap-delete">
        <button class="button-delete" onClick={handleClick}>
          <span class="text">Next</span>
          <span class="icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.468,14.508l-20.967,-0.008c-0.828,-0 -1.501,0.672 -1.501,1.499c-0,0.828 0.672,1.501 1.499,1.501l21.125,0.009c-0.107,0.159 -0.234,0.306 -0.377,0.439c-3.787,3.502 -9.68,8.951 -9.68,8.951c-0.608,0.562 -0.645,1.511 -0.083,2.119c0.562,0.608 1.512,0.645 2.12,0.083c-0,0 5.892,-5.448 9.68,-8.95c1.112,-1.029 1.751,-2.47 1.766,-3.985c0.014,-1.515 -0.596,-2.968 -1.688,-4.018l-9.591,-9.221c-0.596,-0.574 -1.547,-0.556 -2.121,0.041c-0.573,0.597 -0.555,1.547 0.042,2.121l9.591,9.221c0.065,0.063 0.127,0.129 0.185,0.198Z" />
            </svg>
          </span>
        </button>
        <button class="button-delete" onClick={downloadQuote}>
          <span class="text">Save</span>
          <span class="icon">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g>
                <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z" />
                <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z" />
              </g>
            </svg>
          </span>
        </button>
      </div>
      <p></p>
      <p>Retro?</p>
      <div className="toggle-switch">
        <label class="rocker rocker-small">
          <input
            type="checkbox"
            id="simple-mode"
            checked={simpleMode}
            onChange={() => setSimpleMode(!simpleMode)}
          />
          <span class="switch-left">Yes</span>
          <span class="switch-right">No</span>
        </label>
      </div>

      <div className="icons">
        <a
          href="https://github.com/m4xy07"
          className="icon github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://m4xy.org"
          className="icon globe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-shaikh33"
          className="icon linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default App;
