import React from "react";

function Developer() {
  const books = [
    {
      id: 1,
      title: "Book good to your life",
      price: 20,
      img: "https://storage.googleapis.com/pbx-sw-digitalorca/media/a0/cb/a3/1725457697/Sydney-min.jpg",
    },
    {
      id: 2,
      title: "Book good to your life",
      price: 23,
      img: "https://via.placeholder.com/200x200", // placeholder
    },
    {
      id: 3,
      title: "Book good to your life",
      price: 18,
      img: "https://via.placeholder.com/200x200",
    },
    {
      id: 4,
      title: "Book good to your life",
      price: 34,
      img: "https://via.placeholder.com/200x200",
    },
  ];

  return (
    <div className="developer container mx-auto p-6">
      <h1 className="text-center text-2xl font-bold animate-bounce mb-6">
        Shop Book
      </h1>

      <div className="shop-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-gray-200 rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-40 h-40 object-cover mb-3"
            />
            <p className="font-bold text-green-600 mb-1">${book.price}</p>
            <p className="text-center mb-3">{book.title}</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 shadow-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View
              </button>
              <button className="px-4 py-2 shadow-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;
