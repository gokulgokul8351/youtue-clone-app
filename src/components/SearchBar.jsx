// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const focusSearch = useRef('')

  useEffect(() => {
    focusSearch.current.focus()
  }, [])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadows: 'none',
        mr: { sm: 5 },
      }}
      style={{
        borderRadius: '20px',
        paddingRight: '20px',
        boxShadow: 'none',
        border: '1px solid #e3e3e3',
        textAlign: 'center',
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        ref={focusSearch}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: '5px', color: 'red' }}
        style={{
          padding: '10px',
          color: 'red',
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
