import axios from 'axios';
import _ from 'lodash';

const QUOTES_API_URL = 'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Data/quotes.json';

export const getQuote = async () => {
  const response = await axios.get(QUOTES_API_URL);
  const quotes = response.data;
  return _.sample(quotes);
};