const Card = ({ title, description }) => {
    return (
      <div className="relative w-full max-w-sm rounded-xl bg-gradient-to-br bg-black p-[1px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition">
            Learn More
          </button>

        </div>
      </div>
    )
  }
  
  export default Card
  
  