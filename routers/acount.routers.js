const express = require("express");
const {          createAcount,
    getListAcount,
    getAcount,
    updateAcount,
    deleteAcount} =require("../controllers/acount.controllers");

const acountRouter = express.Router();
acountRouter.post("/create" ,createAcount);
acountRouter.get("/get-list-acount" ,getListAcount);
acountRouter.get("/:id" ,getAcount);
acountRouter.put("/:id" ,updateAcount);
acountRouter.delete("/:id" ,deleteAcount);

module.exports = {
    acountRouter,
    
  };