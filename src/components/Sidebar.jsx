import React from 'react'
import {Box, Typography }from '@mui/material'



export const Sidebar = () => {
  return (
    <Box bgcolor='skyblue' flex={1} p={2} sx={{display: {xs: 'none' , sm: 'block'}}}>
      
      <Typography variant='h5'> Your Profile </Typography>
      </Box>
  )
}
export default Sidebar;