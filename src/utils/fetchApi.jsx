import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'c53e0c39c2msh03c243a285dff63p1239dejsn7dddfcfed6a9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
