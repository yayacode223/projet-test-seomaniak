import {
  getAllPost,
  getSpecificPost,
  addPost,
  updatePost,
  deletePost,
} from "../model/post.js";

export const getAllPosts = async (_req, res) => {
  const post = await getAllPost();
  return res.status(200).json(post);
};

export const getSpecificPosts = async (req, res) => {
  const post = await getSpecificPost(req.params.id);
  return res.status(200).json(post);
};

export const addPosts = async (req, res) => {
  const { title, content, author, created_at } = req.body;
  const author_id = req.user.id; 

  const post = await addPost(title, content, author, author_id, created_at);
  return res.status(200).json(post);
};

export const updatePosts = async (req, res) => {
  const { title, content, author, author_id } = req.body;
  const post = await updatePost(req.params.id, title, content, author, author_id);
  return res.status(200).json(post);
};

export const deletePosts = async (req, res) => {
  const post = await deletePost(req.params.id);
  return res.status(200).json(post);
};
