// components/ChatInput.js
import { Plus, Mic, AudioLines } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="w-full max-w-2xl flex items-center border rounded-full shadow-sm bg-white px-4 py-3">
      {/* Left Icon */}
      <Plus className="w-5 h-5 text-gray-500 mr-3" />

      {/* Input */}
      <input
        type="text"
        placeholder="Ask anything"
        className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-500"
      />

      {/* Right Icons */}
      <Mic className="w-5 h-5 text-gray-500 mx-2 cursor-pointer" />
      <AudioLines className="w-5 h-5 text-gray-500 cursor-pointer" />
    </div>
  );
}
