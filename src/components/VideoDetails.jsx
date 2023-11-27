import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'

// import { Videos } from './Videos'
import { fetchApi } from '../utils/fetchApi'
import { demoVideoTitle } from '../utils/Constants'

const VideoDetails = () => {
  const [videoDetail, setVideosDetails] = useState(null)
  const [video, setVideo] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetails(data.items[0])
    )

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideo(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return 'Loading...'

  const { snippet } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              {/* <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: ' gray', ml: '5px' }}
                  />
                </Typography>
              </Link> */}
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(snippet.viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(snippet.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* right side relative videos side */}

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Videos></Videos> */}
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
