import {axiosInstance} from "../util/axiosInstance.js";

//Post User

export const allPost = () => axiosInstance.get("post");

export const specificPost = (id) => axiosInstance.get(`post/${id}`);

export const addPost = ({ title, content, author, author_id, created_at }) =>
  axiosInstance.post("post/add", {
    title,
    content,
    author,
    author_id,
    created_at,
  });

export const updatePost = ({ id, title, content, author, author_id }) =>
  axiosInstance.put(`post/update/${id}`, { title, content, author, author_id });

export const deletePost = (id) => axiosInstance.delete(`post/delete/${id}`);
