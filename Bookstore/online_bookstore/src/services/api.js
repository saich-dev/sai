
import axios from 'axios';

const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchBooks = async (query, maxResults = 20) => {
  try {
    const response = await api.get('/volumes', {
      params: {
        q: query,
        maxResults,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; 
  }
};

const fetchBookById = async (bookId) => {
  try {
    const response = await api.get(`/volumes/${bookId}`);
    return response.data.volumeInfo;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error; 
  }
};

export { fetchBooks, fetchBookById };
export const API_KEY ='AIzaSyBuonlRJ_d_tK4dCVFHQsTgvrmJXTPDO9A';
export const GOOGLE_BOOKS_URL = '/https://www.googleapis.com/books/v1/volumes?q=';
export const GET_BOOKS_BY_NAME_ENDPOINT = '/v1/volumes?q=';
export const KEY_HEADER = '&key'+ API_KEY;