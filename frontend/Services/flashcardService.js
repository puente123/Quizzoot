/* app.use("/api/flashcard", flashcardRouter);
flashcardRouter.post("/", createFlashcard)
flashcardRouter.delete("/:id", deleteFlashcard) */

import axios from "axios";

const baseURL = "http://localhost:3000/api/flashcard";

const apiClient = axios.create({
  baseURL: baseURL,
});

const postFlashcard = async (body) => {
  try {
    const response = await apiClient.post("/", body);
    return response.data;
  } catch (error) {
    console.error("Error in postFlashcard call", error);
    throw error;
  }
};

const deleteFlashcard = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in deleteFlashcard call", error);
    throw error;
  }
};

export { postFlashcard, deleteFlashcard };
