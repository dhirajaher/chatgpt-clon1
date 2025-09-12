// app/page.js
import Header from "./header/page";
import InputField from "./textfield/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header Component */}
      <Header />

      {/* Main Center Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-center">
          What's on your mind today?
        </h1>

        {/* Chat Input Component */}
        <InputField />
      </main>
    </div>
  );
}
