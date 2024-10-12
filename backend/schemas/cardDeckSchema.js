const { db} = require("../database/mysqlConnection")

const createCardDeck = (name, userID, callback) => {
    const query = "INSERT INTO deckOfCards (name, userID) VALUES (?, ?)"

    db.query(query, [name, userID],(result, error) => {
        if(error){
            return callback(error, null)
        }
        return callback(null, result.insertId)
    } )
}

const deleteCardDeck = (id) => {
    const query = "DLETE FROM deckOfCards WHERE id = ?"

    db.query(query, [id],(result, error) => {
        if(error){
            return callback(error, null)
        }
        return callback(null, result.insertId)
    } )
}

module.exports = {createCardDeck, deleteCardDeck}


