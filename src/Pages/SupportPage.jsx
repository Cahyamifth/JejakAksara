export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Support 💜</h1>
        <p className="text-gray-600 mb-6">
          This project is free to use. If you’d like to support, consider sharing it with friends or buying me a coffee.
        </p>
        <a
          href="https://www.buymeacoffee.com/yourlink"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Buy me a coffee ☕
        </a>
      </div>
    </main>
  );
}
