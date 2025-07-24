import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "880092c783c54c679105682cb157040e";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(url);
        if (response.data && response.data.articles) {
          setArticles(response.data.articles);
        }
      } catch (error) {
        console.error("Error : " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-medium text-gray-600">
          Chargement en cours...
        </span>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="article"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
              />
            )}
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {article.content || "No content available."}
              </p>
              <Link
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-600 font-medium hover:underline"
              >
                Lire l&apos;article complet →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
