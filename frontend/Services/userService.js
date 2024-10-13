
/* app.use("/api/user", userRouter);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser) */

import axios from 'axios'

const baseURL = "http://localhost:3000/api/user";

const apiClient = axios.create({
    baseURL: baseURL
})

const postUser = async (body) => {
    try {
        const response = apiClient.post("/", body)
        return response.data
    }
    catch(error){
        console.error("Error in postUser", error)
    }
}

const deleteUser = async (id) => {
    try {
        const response = apiClient.post(`/${id}`)
        return response.data
    }
    catch(error){
        console.error("Error in postUser", error)
    }
}

export {postUser, deleteUser}