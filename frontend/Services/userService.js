
/* app.use("/api/user", userRouter);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser) */

import { paperClasses } from '@mui/material';
import axios from 'axios'

const baseURL = "http://localhost:3000/api/user";

const apiClient = axios.create({
    baseURL: baseURL
})

const postUser = async (body) => {
    try {
        const response = await apiClient.post("/", body)
        return response.data
    }
    catch(error){
        console.error("Error in postUser", error)
    }
}

const deleteUser = async (id) => {
    try {
        const response = await apiClient.delete(`/${id}`)
        return response.data
    }
    catch(error){
        console.error("Error in postUser", error)
    }
}

const signInUser = async(body) => {
    try{
        const response = await apiClient.get('/signin', body)
        return response.data
    }catch(error){
        console.error("Error in signInUser frontnend", error)
    }
}

export {postUser, deleteUser, signInUser}