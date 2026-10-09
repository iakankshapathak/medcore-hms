export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-50 px-8 py-5">
      <h1 className="text-2xl font-bold text-blue-700">
        Medcore HMS
      </h1>

      <nav className="flex items-center gap-6">
        <a href="#" className="text-blue-700">
          Home
        </a>

        <a href="#" className="text-blue-700">
          About
        </a>

        <a href="#" className="text-blue-700">
          Services
        </a>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
          Login
        </button>
      </nav>
    </header>
  );
}