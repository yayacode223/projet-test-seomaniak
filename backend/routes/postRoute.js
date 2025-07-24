import express from "express";
import authmiddleware from "../middleware/middleware.js";
import {
  getAllPosts,
  getSpecificPosts,
  addPosts,
  updatePosts,
  deletePosts,
} from "../controller/postController.js";

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getSpecificPosts);

router.post("/add", authmiddleware, addPosts);

router.put("/update/:id", authmiddleware, updatePosts);

router.delete("/delete/:id", authmiddleware, deletePosts);

export default router;
