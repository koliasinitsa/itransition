import axios from "axios";

// src/services/ItemServices.ts


const API_BASE_URL = 'http://localhost:3000';

export async function getItemByCollectionId(collectionsId: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/items/${collectionsId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch collections');
  }
}
