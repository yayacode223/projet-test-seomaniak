import { useState } from "react";

const Modal = () => {
  const [authModal, setAuthModal] = useState(null); // 'login', 'register' ou null

  return (
    <div>
      {/* Boutons de déclenchement */}
      <div className="flex gap-4 p-8">
        <button
          onClick={() => setAuthModal("login")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => setAuthModal("register")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>

      {/* Overlay et Modal */}
      {authModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setAuthModal(null)}
        >
          <div
            className="bg-white w-full max-w-md rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold capitalize">{authModal}</h3>
              <button
                onClick={() => setAuthModal(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Formulaire */}
            <form className="space-y-4">
              {authModal === "register" && (
                <div>
                  <label className="block mb-1">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Entrez votre nom"
                  />
                </div>
              )}

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Entrez votre email"
                />
              </div>

              <div>
                <label className="block mb-1">Mot de passe</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                {authModal === "login" ? "Se connecter" : "Créer un compte"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
