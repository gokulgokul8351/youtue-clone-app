import { Stack } from '@mui/material'

import { categories } from '../utils/Constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category, index) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        type="button"
        className=" category-btn "
        style={{
          background: category.name === selectedCategory && '#fc1503',
          color: 'white',
        }}
        key={index}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory.name ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
