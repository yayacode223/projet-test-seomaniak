import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { allPost, deletePost } from "../service/postService.js";
import Img from "../assets/profil.jpeg";

export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: allPost,
    select: (data) => data.data || [], // pour extraire le tableau de posts
  });

  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // refetch après suppression
      alert("Post supprimé");
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        alert("Session expirée. Veuillez vous reconnecter.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        alert("Erreur lors de la suppression.");
        console.error(error.message);
      }
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce post ?")) {
      mutation.mutate(id);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src={Img}
          className="w-40 h-40 object-cover rounded-full mb-6"
          alt="Profil"
        />
        <ul className="space-y-3 w-full">
          <li className="text-center font-semibold text-xl text-red-600 bg-gray-200 py-2 rounded shadow">
            Meilleurs Posts
          </li>
          <Link to="/edit">
            <li className="text-center text-blue-600 bg-gray-100 hover:bg-blue-100 py-2 rounded shadow">
              Faire un Post
            </li>
          </Link>
          <Link to="/blog">
            <li className="text-center text-blue-600 bg-gray-100 hover:bg-blue-100 py-2 rounded shadow">
              Blogs
            </li>
          </Link>
          <li className="text-center text-green-600 bg-gray-100 hover:bg-green-100 py-2 rounded shadow">
            Commentaires
          </li>
        </ul>
      </aside>

      {/* Posts */}
      <main className="w-full lg:w-3/4 p-6">
        {isLoading && (
          <div className="text-center text-gray-500 mt-10">
            Chargement des posts...
          </div>
        )}

        {isError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error?.message || "Erreur lors du chargement des posts."}</p>
          </div>
        )}

        {!isLoading && posts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Aucun post disponible pour le moment.
          </p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all"
              >
                <h1 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h1>
                <p className="text-gray-700 mb-3">{item.content}</p>
                <div className="mt-4 flex gap-3">
                  <Link to={`/edit/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                      Modifier
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                    disabled={mutation.isLoading}
                  >
                    {mutation.isLoading ? "Suppression..." : "Supprimer"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
