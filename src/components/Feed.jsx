import { Stack, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
// api
import { fetchApi } from '../utils/fetchApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5 }}
        >
          Copyright 2023 Frontend@Gokul
        </Typography>
      </Box>
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
          {selectedCategory}
          <span style={{ color: '#f31503', marginLeft: '10px' }}>Videos</span>
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  )
}

export default Feed
