import pool from "../config/db.js";

// Récupérer tous les posts
export const getAllPost = async () => {
  const [rows] = await pool.query("SELECT * FROM posts");
  return rows;
};

// Récupérer un post spécifique
export const getSpecificPost = async (id) => {
  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
  return rows[0];
};

// Ajouter un nouveau post
export const addPost = async (title, content) => {
  const created_at = new Date(); // .now() n'existe pas en JS
  const [result] = await pool.query(
    "INSERT INTO posts (title, content, created_at) VALUES (?, ?, ?)",
    [title, content, created_at]
  );
  return result;
};


// Mettre à jour un post
export const updatePost = async (id, title, content) => {
  await pool.query(
    "UPDATE posts SET title = ?, content = ? WHERE id = ?",
    [title, content, id]
  );

  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
  return rows[0];
};

// Supprimer un post
export const deletePost = async (id) => {
  await pool.query("DELETE FROM posts WHERE id = ?", [id]);
};
