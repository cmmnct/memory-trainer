import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/cmmnct/cards/cards';

export const fetchCards = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("data received")
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};
