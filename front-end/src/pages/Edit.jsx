import { useState, useEffect } from "react";
import { addPost, updatePost, specificPost } from "../service/postService";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: "",
    author_id: 1,
  });

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const { data } = await specificPost(id);
          setInput({
            title: data.title,
            content: data.content,
          });
        } catch (error) {
          console.error("Erreur lors du chargement :", error.message);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { title, content } = input;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (id) {
        await updatePost({ id, title, content});
        alert("Post modifié avec succès !");
      } else {
        await addPost({ title, content});
        alert("Post créé avec succès !");
      }
      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Session expirée, veuillez vous reconnecter");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Erreur :", error.message);
        alert("Une erreur est survenue : " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          {id ? "Modifier le Post" : "Nouveau Post"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
              Titre
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Titre"
              value={title}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-700 font-medium mb-1">
              Contenu
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              placeholder="Contenu"
              value={content}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              required
            />
          </div>
          {/* <div>
            <label htmlFor="author" className="block text-gray-700 font-medium mb-1">
              Auteur
            </label>
            <input
              id="author"
              type="text"
              name="author"
              placeholder="Auteur"
              value={author}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div> */}
          {/* <div>
            <label htmlFor="author_id" className="block text-gray-700 font-medium mb-1">
              ID Auteur
            </label>
            <input
              id="author_id"
              type="number"
              name="author_id"
              placeholder="ID Auteur"
              value={author_id}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              min={1}
            />
          </div> */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {id ? "Modifier" : "Poster"}
          </button>
        </form>
      </div>
    </div>
  );
}
