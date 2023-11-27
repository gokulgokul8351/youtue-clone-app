import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
// logo img
import { logo } from '../utils/Constants'
// searchBar
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      background: '#000',
      position: 'sticky',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link
      to="/"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img
        src={logo}
        alt="Youtube"
        height={85}
      />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
