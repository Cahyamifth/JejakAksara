// src/pages/BrowsePage.jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("public:messages")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [payload.new, ...prev]);
        })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setMessages(data);
  };

  const filtered = messages.filter((msg) =>
    msg.recipient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Browse Messages</h1>
          <p className="text-gray-500 mt-2">
            Find your song or message by searching the recipient’s name.
          </p>
        </div>

        {/* search box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search by recipient..."
            className="border border-gray-300 rounded-xl p-3 w-full shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* messages list */}
        <div className="space-y-5">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400">No messages found.</p>
          ) : (
            filtered.map((msg) => (
              <div
                key={msg.id}
                className="bg-white/80 backdrop-blur shadow-md p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">hello </span>
                  <span className="text-indigo-600 font-medium">{msg.recipient}</span>
                </p>
                <p className="italic text-gray-700">
                  <span className="text-gray-500 font-semibold">i'm sorry, </span>
                  {msg.message}
                </p>
                <p className="text-right text-xs text-gray-400 mt-3">
                  {new Date(msg.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
