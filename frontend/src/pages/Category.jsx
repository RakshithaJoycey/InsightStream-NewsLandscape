import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import CategoryMenu from '../components/CategoryMenu'
import Loader from '../components/Loader'
import { getNewsByCategory } from '../services/newsApi'
import { getFavorites, addFavorite, removeFavorite } from '../services/api'

const Category = () => {
  const { categoryName } = useParams()
  const [articles, setArticles] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNews()
    loadFavorites()
  }, [categoryName])

  const loadNews = async () => {
    setLoading(true)
    try {
      const data = await getNewsByCategory(categoryName)
      setArticles(data)
      // Save articles to localStorage for article view
      data.forEach(article => {
        localStorage.setItem(`article_${article.url}`, JSON.stringify(article))
      })
    } catch (error) {
      console.error('Error loading category news:', error)
    }
    setLoading(false)
  }

  const loadFavorites = async () => {
    try {
      const data = await getFavorites()
      setFavorites(data)
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }

  const handleToggleFavorite = async (article) => {
    const isFav = favorites.some(fav => fav.url === article.url)
    
    if (isFav) {
      const favToRemove = favorites.find(fav => fav.url === article.url)
      await removeFavorite(favToRemove.id)
      setFavorites(favorites.filter(fav => fav.id !== favToRemove.id))
    } else {
      const newFav = await addFavorite({ ...article, id: Date.now() })
      setFavorites([...favorites, newFav])
    }
  }

  const isFavorite = (article) => {
    return favorites.some(fav => fav.url === article.url)
  }

  return (
    <div>
      <CategoryMenu />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          {categoryName} News
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard
                key={article.url || index}
                article={{ ...article, id: article.url }}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={isFavorite(article)}
              />
            ))}
          </div>
        )}

        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
