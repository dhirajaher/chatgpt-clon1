import { Plus, Mic, AudioLines } from "lucide-react";

export default function InputField() {
  return (
    <div className="w-full flex justify-center">
  <div className="w-full max-w-2xl flex items-center border rounded-full shadow-sm bg-white px-3 py-2 sm:px-4 sm:py-3">
    {/* Left Icon */}
    <Plus className="w-5 h-5 text-gray-500 mr-2 sm:mr-3" />

    {/* Input */}
    <input
      type="text"
      placeholder="Ask anything"
      className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-500 text-sm sm:text-base"
    />

    {/* Right Icons */}
    <Mic className="w-5 h-5 text-gray-500 mx-1 sm:mx-2 cursor-pointer" />
    <AudioLines className="w-5 h-5 text-gray-500 ml-1 sm:ml-2 cursor-pointer" />
  </div>
</div>

  );
}
