export default function HeroSection() {
  return (
    <div className="relative w-full bg-gray-900 text-white">
      {/* Image */}
      <img
        src="https://universityconnection.in/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-19-at-18.31.27.jpeg"
        alt="Students"
        className="w-full h-[260px] object-cover"
      />
      <div className="p-5">
        <h1 className="text-xl font-bold leading-tight">
          Join a leading university of technology, design and business
        </h1>

        <p className="text-sm text-gray-300 mt-3">
          Study in Melbourne, the top student city in Australia*. RMIT's courses
          are designed by industry to give you the hands-on skills you need to
          get a job sooner.
        </p>

        <button className="mt-5 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold">
          Explore courses
        </button>
      </div>

      <a href="https://t.me/ch_vibol">
      <button className="fixed bottom-6 right-4 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
        💬 Chat
      </button>
      </a>
    </div>
  );
}
