const express = require("express");
const {         createCommonInformation,
    getListCommonInformation,
    getCommonInformation,
    updateCommonInformation,
    deleteCommonInformation} =require("../controllers/thongtinchung.controllers");

const thongtinchungRouter = express.Router();
thongtinchungRouter.post("/create" ,createCommonInformation);
thongtinchungRouter.get("/get-list-common-information" ,getListCommonInformation);
thongtinchungRouter.get("/:id" ,getCommonInformation);
thongtinchungRouter.put("/:id" ,updateCommonInformation);
thongtinchungRouter.delete("/:id" ,deleteCommonInformation);

module.exports = {
    thongtinchungRouter,
    
  };