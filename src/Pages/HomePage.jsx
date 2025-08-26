import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Send a song, say what words cannot 🎵
        </h1>
        <p className="text-gray-600 mb-8">
          A small way to send your feelings to someone special. Submit a message with a song, browse others, or just vibe.
        </p>
        <Link
          to="/submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
