import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          sendthesong
        </Link>
        <div className="space-x-6 text-gray-600 font-medium">
          <Link to="/submit" className="hover:text-indigo-600 transition">Submit</Link>
          <Link to="/browse" className="hover:text-indigo-600 transition">Browse</Link>
          <Link to="/support" className="hover:text-indigo-600 transition">Support</Link>
        </div>
      </div>
    </nav>
  );
}
