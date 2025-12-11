import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaHeart, FaRegHeart, FaClock, FaShare } from 'react-icons/fa'
import { getFavorites, addFavorite, removeFavorite } from '../services/api'

const ArticleView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const articleUrl = decodeURIComponent(id)
    const savedArticle = JSON.parse(localStorage.getItem(`article_${articleUrl}`) || '{}')
    
    if (savedArticle.url) {
      setArticle(savedArticle)
    }
    
    loadFavorites()
  }, [id])

  const loadFavorites = async () => {
    try {
      const data = await getFavorites()
      setFavorites(data)
      const articleUrl = decodeURIComponent(id)
      setIsFavorite(data.some(fav => fav.url === articleUrl))
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }

  const handleToggleFavorite = async () => {
    if (isFavorite) {
      const favToRemove = favorites.find(fav => fav.url === article.url)
      await removeFavorite(favToRemove.id)
      setIsFavorite(false)
    } else {
      await addFavorite({ ...article, id: Date.now() })
      setIsFavorite(true)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: article.url
      })
    } else {
      navigator.clipboard.writeText(article.url)
      alert('Link copied to clipboard!')
    }
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Article not found</p>
      </div>
    )
  }

  const defaultImage = 'https://via.placeholder.com/1200x600?text=No+Image+Available'

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={article.urlToImage || article.image || defaultImage}
          alt={article.title}
          className="w-full h-96 object-cover"
          onError={(e) => e.target.src = defaultImage}
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase">
              {article.source?.name || 'News'}
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleToggleFavorite}
                className="flex items-center space-x-2 text-red-500 hover:scale-110 transition"
              >
                {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 text-blue-600 hover:scale-110 transition"
              >
                <FaShare size={20} />
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <FaClock className="mr-2" />
            <span>{new Date(article.publishedAt || Date.now()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            {article.author && (
              <span className="ml-4">By {article.author}</span>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {article.description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {article.content || 'Full content not available. Click the link below to read the full article.'}
            </p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <span>Read Full Article</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </article>
    </div>
  )
}

export default ArticleView
