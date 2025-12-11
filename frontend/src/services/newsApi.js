// Mock news data for demonstration
// Replace with real API calls when you have an API key

const mockArticles = {
  technology: [
    {
      title: "AI Revolution: New Breakthrough in Machine Learning",
      description: "Researchers announce major advancement in artificial intelligence capabilities.",
      url: "https://example.com/ai-breakthrough",
      urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Tech News" },
      content: "Full article content here...",
      category: "technology"
    },
    {
      title: "Quantum Computing Reaches New Milestone",
      description: "Scientists achieve quantum supremacy with new processor design.",
      url: "https://example.com/quantum-computing",
      urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Science Daily" },
      content: "Full article content here...",
      category: "technology"
    },
    {
      title: "5G Networks Expand Globally",
      description: "Major telecom companies roll out next-generation wireless technology.",
      url: "https://example.com/5g-expansion",
      urlToImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      source: { name: "Tech World" },
      content: "Full article content here...",
      category: "technology"
    }
  ],
  sports: [
    {
      title: "Championship Finals: Historic Victory",
      description: "Team secures championship title in thrilling final match.",
      url: "https://example.com/championship",
      urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Sports Network" },
      content: "Full article content here...",
      category: "sports"
    },
    {
      title: "Olympic Athletes Break World Records",
      description: "Multiple records shattered at international competition.",
      url: "https://example.com/olympic-records",
      urlToImage: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Olympic News" },
      content: "Full article content here...",
      category: "sports"
    }
  ],
  entertainment: [
    {
      title: "New Blockbuster Breaks Box Office Records",
      description: "Latest film release shatters opening weekend expectations.",
      url: "https://example.com/blockbuster",
      urlToImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Entertainment Weekly" },
      content: "Full article content here...",
      category: "entertainment"
    },
    {
      title: "Music Festival Announces Star-Studded Lineup",
      description: "Major artists confirmed for summer's biggest music event.",
      url: "https://example.com/music-festival",
      urlToImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Music Today" },
      content: "Full article content here...",
      category: "entertainment"
    }
  ],
  business: [
    {
      title: "Stock Market Reaches All-Time High",
      description: "Major indices close at record levels amid economic optimism.",
      url: "https://example.com/stock-market",
      urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Financial Times" },
      content: "Full article content here...",
      category: "business"
    },
    {
      title: "Tech Giant Announces Major Acquisition",
      description: "Industry leader acquires startup in billion-dollar deal.",
      url: "https://example.com/tech-acquisition",
      urlToImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Business Insider" },
      content: "Full article content here...",
      category: "business"
    }
  ],
  health: [
    {
      title: "New Study Reveals Benefits of Mediterranean Diet",
      description: "Research shows significant health improvements from dietary changes.",
      url: "https://example.com/diet-study",
      urlToImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Health Journal" },
      content: "Full article content here...",
      category: "health"
    },
    {
      title: "Breakthrough in Cancer Treatment Research",
      description: "New therapy shows promising results in clinical trials.",
      url: "https://example.com/cancer-treatment",
      urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Medical News" },
      content: "Full article content here...",
      category: "health"
    }
  ],
  science: [
    {
      title: "Mars Mission Discovers Evidence of Ancient Water",
      description: "NASA rover finds compelling signs of past liquid water on Mars.",
      url: "https://example.com/mars-water",
      urlToImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Space News" },
      content: "Full article content here...",
      category: "science"
    },
    {
      title: "Climate Scientists Report Alarming Findings",
      description: "New data reveals accelerated changes in global climate patterns.",
      url: "https://example.com/climate-report",
      urlToImage: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Climate Journal" },
      content: "Full article content here...",
      category: "science"
    }
  ]
}

const getAllArticles = () => {
  return Object.values(mockArticles).flat()
}

export const getTopHeadlines = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const articles = getAllArticles()
  
  // Save to localStorage for article view
  articles.forEach(article => {
    localStorage.setItem(`article_${article.url}`, JSON.stringify(article))
  })
  
  return articles
}

export const getNewsByCategory = async (category) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const articles = mockArticles[category] || []
  
  articles.forEach(article => {
    localStorage.setItem(`article_${article.url}`, JSON.stringify(article))
  })
  
  return articles
}

export const searchNews = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const allArticles = getAllArticles()
  const filtered = allArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.description.toLowerCase().includes(query.toLowerCase())
  )
  
  return filtered
}

// To use real News API, replace the above with:
/*
import axios from 'axios'

const API_KEY = 'YOUR_NEWS_API_KEY'
const BASE_URL = 'https://newsapi.org/v2'

export const getTopHeadlines = async () => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: 'us',
      apiKey: API_KEY
    }
  })
  return response.data.articles
}

export const getNewsByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      country: 'us',
      apiKey: API_KEY
    }
  })
  return response.data.articles
}

export const searchNews = async (query) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: query,
      apiKey: API_KEY,
      sortBy: 'publishedAt'
    }
  })
  return response.data.articles
}
*/
