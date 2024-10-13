const db = require('../database/mysqlConnection')

const createFlashcard = async (question, answer) => {
    try{
        const [result] = await db.promise().query(query, [question, answer])
        return result.insertId
    }
    catch(error){
        throw error;
    }
}

const deleteFlashcard = async (id) =>{
    try{
        const [result] = await db.promise().query(query,[id])
        return result.affectedRows
    }
    catch(error){
        throw error
    }
}

module.exports = {createFlashcard, deleteFlashcard}