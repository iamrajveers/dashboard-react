// src/pages/Products.jsx
import React from "react";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999",
      category: "Electronics",
      stock: 12,
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: "$150",
      category: "Shoes",
      stock: 35,
    },
    {
      id: 3,
      name: "MacBook Air",
      price: "$1199",
      category: "Computers",
      stock: 5,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        />

        <select className="border border-gray-300 rounded px-4 py-2">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Computers</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">In Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
