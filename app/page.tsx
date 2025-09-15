import Header from "./header/page";
import InputField from "./textfield/page";

export default function Home() {
  return (
    <>
     <div className="flex flex-col min-h-screen">
      {/* Header at top */}
      <Header />

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-medium mb-8 text-center">
          What's on your mind today?
        </h1>

        {/* Input field */}
        <InputField />
      </main>
    </div>
    </>
  );
}
