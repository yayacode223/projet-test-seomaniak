# projet-test-seomaniak 

Gestion des posts avec React (Vite + Tailwind CSS) en frontend, Node.js (Express) en backend, et MySQL (via WAMP) comme base de données.

---

## 📁 Structure du 

 projet-test-seomaniak/
├── frontend/ → Interface utilisateur (React, Tailwind CSS, Vite)
├── backend/ → API REST (Node.js, Express)
└── README.md


---

## ⚙️ Prérequis

- Node.js installé (version recommandée : 18+)
- WAMP installé (ou un serveur MySQL local)
- Git installé

---

## 🔧 Installation

### 1. Cloner le projet

##Terminal bash ou Terminal simple
git clone https://github.com/yayacode223/projet-test-seomaniak.git
cd projet-test-seomaniak

2. Configurer la base de données
Lancer WAMP

Créer une base de données blogweb_db via phpMyAdmin

Créer la table posts :

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO posts (title, content) VALUES
("Le Pouvoir de la Discipline", "La discipline est ce qui sépare les rêves de la réalité. La constance l’emporte sur l’intensité."),
("Pourquoi Vous Devriez Coder Chaque Jour", "Coder tous les jours améliore les compétences en résolution de problèmes et la mémoire musculaire."),
("Comment Maîtriser JavaScript", "Comprendre les closures, async/await et la boucle d’événements est essentiel."),
("React vs Vue vs Angular", "Chacun a ses points forts. Choisissez ce qui convient à votre projet et à votre équipe."),
("Astuces pour Rester Motivé", "Divisez les tâches, célébrez les petites victoires et évitez l’épuisement."),
("Les Bases du Développement Backend", "Comprenez les API REST, les bases de données, l’authentification et la gestion des erreurs.");

# Vous pouvez aussi remplir la base de donnees via le formulaire au niveau de frontend, c'est creation de post, modification, suppression et mis a jour.

#Lancer le backend

cd backend
npm install
npm run dev
Le serveur sera accessible sur : http://localhost:3002 # Si le port 3002 est occupé, il suffit de changer le port.

#Lancer le frontend
Dans un autre terminal :

cd frontend
npm install
npm run dev
L'application sera disponible sur : http://localhost:5173 # Si le port 5173 est occupé, il suffit de changer le port.


#Authentification
Les routes protégées nécessitent un token JWT. 
Comme Creer un post, modifier un post, supprimer un post. 



📦 Dépendances principales
Frontend :
React
Tailwind CSS
Axios
React Router DOM

Backend :
Express
MySQL2
CORS
Dotenv
JSON Web Token


