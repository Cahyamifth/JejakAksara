import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SubmitPage() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("messages").insert([
      { recipient, message }
    ]);

    setLoading(false);
    if (!error) {
      setSuccess(true);
      setRecipient("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur shadow-lg p-8 rounded-2xl w-full max-w-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Submit a Song</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Recipient name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none min-h-[120px]"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Send"}
          </button>
        </form>
        {success && <p className="text-green-600 mt-4">Message sent!</p>}
      </div>
    </main>
  );
}
