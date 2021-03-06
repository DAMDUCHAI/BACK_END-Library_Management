const express = require("express");

const rootRouter = express.Router();
const {sachRouter} =require("./sach.routers")
const {theloaiRouter} =require("./theloai.routers")
const {tacgiaRouter} =require("./tacgia.routers")
const {kesachRouter} =require("./kesach.routers")
const {nhaxuatbanRouter} =require("./nhaxuatban.routers")
const {docgiaRouter} =require("./docgia.routers")
const {thongtinchungRouter} =require("./thongtinchung.routers")
const {acountRouter} =require("./acount.routers")
const {gioitinhRouter} =require("./gender.routers")
const {thethuvienRouter} =require("./thethuvien.routers")

rootRouter.use("/book", sachRouter);
rootRouter.use("/category", theloaiRouter);
rootRouter.use("/author", tacgiaRouter);
rootRouter.use("/bookshelf", kesachRouter);
rootRouter.use("/publisher", nhaxuatbanRouter);
rootRouter.use("/reader", docgiaRouter);
rootRouter.use("/common-information", thongtinchungRouter);
rootRouter.use("/acount", acountRouter);
rootRouter.use("/gender", gioitinhRouter);
rootRouter.use("/library-card", thethuvienRouter);
module.exports = {
    rootRouter,
  };
  
  