import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const apikey = "205460da07c2fded5e954e3d45f145e2";

const categoryType = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const fetchNews = async (category) => {
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;
  const response = await axios.get(url);
  return response.data.articles;
};

export default function Actualite() {
  const [category, setCategory] = useState("general");

  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["news", category],
    queryFn: () => fetchNews(category),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="my-12 flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-gray-700">Chargement en cours ...</div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 text-center mt-8">Erreur : {error.message}</div>;
  }

  return (
    <div className="my-8 px-4">
      {/* Catégories */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categoryType.map((type, index) => (
          <button
            key={index}
            onClick={() => setCategory(type)}
            className={`px-4 py-2 rounded-full transition-all text-sm font-semibold ${
              category === type
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300"
              />
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-4 line-clamp-4">{article.content}</p>
              <div className="mt-auto">
                <Link
                  to={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Lire l’article complet →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
