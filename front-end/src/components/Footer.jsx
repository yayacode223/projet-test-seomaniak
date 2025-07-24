export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-900 mt-4">
      <footer className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            <svg
              width="32"
              height="32"
              viewBox="0 0 95 94"
              className="h-6 w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Blog Web
          </div>

          <div className="text-sm text-gray-400 text-center sm:text-right">
            © {year} — Tout droit réservé.
          </div>
        </div>
      </footer>
    </div>
  );
}
