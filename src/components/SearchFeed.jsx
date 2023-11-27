import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Videos } from './'
// api
import { fetchApi } from '../utils/fetchApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <Box
      p={2}
      sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white', marginBottom: '20px' }}
      >
        Search Results for :
        <span style={{ color: '#f31503', marginLeft: '10px' }}>
          {searchTerm}
        </span>
        <span style={{ marginLeft: '10px' }}>Videos</span>
      </Typography>

      <Videos videos={videos}></Videos>
    </Box>
  )
}

export default SearchFeed
