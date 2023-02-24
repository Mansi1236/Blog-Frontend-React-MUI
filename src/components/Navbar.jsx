import React from 'react'
import { AppBar, Toolbar , styled, Typography , Box , InputBase } from '@mui/material'
import {AutoStories  , Badge, Mail, Notifications, MarkEmailUnread} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar) ({
display: 'flex',
justifyContent: 'space-between'



});

const Search = styled('div')(({theme}) => ({
backgroundColor: 'white',
padding: '0 10px',
borderRadius: theme.shape.borderRadius,
width: '40%'

}));

const Icons = styled(Box)(({theme}) => ({

  display: 'flex',
  gap:'20px',
  color: 'white'
  
  }));




export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
<Typography variant='h6' sx={{display:{xs: 'none' , sm: 'block'}}}>
Blog

</Typography>

<AutoStories  sx={{display:{xs: 'block' , sm: 'none'}}} />
<Search><InputBase placeholder='search ...'/></Search>
<Icons> 
  <MarkEmailUnread />
<Notifications/>
  </Icons>
      </StyledToolbar>


      
      </AppBar>
  )
}
export default Navbar;