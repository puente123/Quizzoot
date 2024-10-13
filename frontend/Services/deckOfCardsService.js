/* app.use("/api/cardDeck", cardDeckRouter);
cardDeckRouter.post("/", createCardDeck)
cardDeckRouter.get('/', getUsersCardDecks);
cardDeckRouter.get('/public', getPublicDecks)
cardDeckRouter.delete("/:id", deleteCardDeck)
 */

import axios from "axios";

const baseURL = "http://localhost:3000/api/cardDeck";

const apiClient = axios.create({
  baseURL: baseURL,
});

const postCardDeck = async (body) => {
  try {
    const response = await apiClient.post("/", body);
    return response.data;
  } catch (error) {
    console.error("Error in posCardDeck call", error)
    throw error;
  }
};

const getUserCardDecks = async (body) => {
  try {
    const response = await  apiClient.get("/", body);
    return response.data;
  } catch (error) {
    console.error("Error in getUserCardDeck call", error)
    throw error;
  }
};

const getPublicCardDecks = async () => {
  try {
    const response = await apiClient.get("/public");
    return response.data;
  } catch (error) {
    console.error("Error in getPublicCardDecks call", error)
    throw error;
  }
};

const deleteCardDeck = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in deleteCardDeck call", error)
    throw error;
  }
};

export { postCardDeck, getUserCardDecks, getPublicCardDecks, deleteCardDeck };
