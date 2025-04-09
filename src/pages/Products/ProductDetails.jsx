import React from "react";
import iphoneImg from "../../assets/iphone.jpg";
 import nikeImg from "../../assets/Nike.jpg";
import macbookImg from "../../assets/Mac.jpg";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999",
      category: "Electronics",
      stock: 12,
      image: iphoneImg,
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: "$150",
      category: "Shoes",
      stock: 35,
     image: nikeImg,
    },
    {
      id: 3,
      name: "MacBook Air",
      price: "$1199",
      category: "Computers",
      stock: 5,
      image: macbookImg,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3 shadow-sm focus:ring-2 focus:ring-blue-400"
        />
        <select className="border border-gray-300 rounded px-4 py-2 shadow-sm focus:ring-2 focus:ring-purple-400">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Computers</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-gray-800 rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p>
              <span className="font-semibold">Price:</span> {product.price}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Stock:</span> {product.stock}
            </p>

            <div className="flex gap-3">
              <button className="bg-black text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-800 transition">
                View
              </button>
              <button className="bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
