const db = require("../data/dbconfig");

const getContexts = () => {
    return db("contexts");
}

const addContext = (context) => {
    return db("contexts").insert(context)
}

const getContextById = (id) => {
    return db("contexts").where({id}).first()
}

module.exports = {
    getContexts,
    addContext,
    getContextById
}