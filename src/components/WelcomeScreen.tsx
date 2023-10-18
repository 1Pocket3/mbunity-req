export function WelcomeScreen({ onStartClick }: any) {
  return (
    <div className="h-screen flex flex-col justify-center items-center transition duration-500 ease-in-out transform">
      <h1 className="text-4xl font-bold mb-8">Welcome! :)</h1>
      <button
        className="bg-black text-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 outline-none"
        onClick={onStartClick}
      >
        Let's start
      </button>
    </div>
  );
}
