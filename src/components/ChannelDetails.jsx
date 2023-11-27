import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    )

    fetchApi(`search?channelId=${id}&part=snippet&order=data`).then((data) =>
      setVideos(data?.items)
    )
  }, [id])

  return (
    <Box>
      <Box>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(111,7,16,1) 14%, rgba(181,26,26,1) 60%, rgba(187,19,70,1) 88%)`,
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard
          channelDetails={channelDetails}
          marginTop="-110px"
        />
      </Box>
      <Box
        display="flex"
        p="2"
      >
        <Box sx={{ mr: { sm: '100px' } }} />
        <h1 color="white">hii</h1>
      </Box>
    </Box>
  )
}

export default ChannelDetails
