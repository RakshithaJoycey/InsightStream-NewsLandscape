import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaClock } from 'react-icons/fa'

const NewsCard = ({ article, onToggleFavorite, isFavorite }) => {
  const defaultImage = 'https://via.placeholder.com/400x250?text=No+Image+Available'
  
  const handleClick = () => {
    localStorage.setItem(`article_${article.url}`, JSON.stringify(article))
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden news-card-hover">
      <Link to={`/article/${encodeURIComponent(article.url)}`} onClick={handleClick}>
        <img 
          src={article.urlToImage || article.image || defaultImage} 
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => e.target.src = defaultImage}
        />
      </Link>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase">
            {article.source?.name || article.category || 'News'}
          </span>
          <button
            onClick={() => onToggleFavorite(article)}
            className="text-red-500 hover:scale-110 transition"
          >
            {isFavorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          </button>
        </div>
        
        <Link to={`/article/${encodeURIComponent(article.url)}`} onClick={handleClick}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition line-clamp-2">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.description || article.content || 'No description available'}
        </p>
        
        <div className="flex items-center text-xs text-gray-500">
          <FaClock className="mr-1" />
          <span>{new Date(article.publishedAt || Date.now()).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
