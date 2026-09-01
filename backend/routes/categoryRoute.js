import express from "express";

import {
  addCategory,
  listCategories,
  removeCategory,
  addSubCategory,
} from "../contollers/categoryController.js";

import adminAuth from "../middleware/adminAuth.js";

const categoryRouter = express.Router();

categoryRouter.post("/add", adminAuth, addCategory);

categoryRouter.get("/list", listCategories);

categoryRouter.post("/remove", adminAuth, removeCategory);

categoryRouter.post("/addSub", adminAuth, addSubCategory);

export default categoryRouter;