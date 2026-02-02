export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ul className="flex gap-8">
            <li>
              <a href="#about" className="hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-200 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
