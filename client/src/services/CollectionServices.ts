import axios from "axios";

// src/services/CollectionServices.ts


const API_BASE_URL = 'http://localhost:3000';

export async function getCollectionsByUserId(userId: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/collections/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch collections');
  }
}
