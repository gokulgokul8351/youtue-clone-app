import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture } from '../utils/Constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({ channelDetails, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '365px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={
            channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetails?.snippet?.title}
          sx={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography
          variant="h6"
          //   className="channel-page"
        >
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'lightgreen', ml: '5px' }} />
        </Typography>
        {channelDetails?.statistics?.subscribeCount && (
          <Typography>
            {parseInt(
              channelDetails?.statistics?.subscribeCount
            ).toLocaleString()}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)
export default ChannelCard
