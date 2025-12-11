import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const getFavorites = async () => {
  try {
    const response = await axios.get(`${API_URL}/favorites`)
    return response.data
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return []
  }
}

export const addFavorite = async (article) => {
  try {
    const response = await axios.post(`${API_URL}/favorites`, article)
    return response.data
  } catch (error) {
    console.error('Error adding favorite:', error)
    throw error
  }
}

export const removeFavorite = async (id) => {
  try {
    await axios.delete(`${API_URL}/favorites/${id}`)
  } catch (error) {
    console.error('Error removing favorite:', error)
    throw error
  }
}
