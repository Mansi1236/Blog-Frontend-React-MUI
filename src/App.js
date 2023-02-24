import React from "react";
import { Container, Stack, Box } from "@mui/material";
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';

const App = () =>  {
    return(
    <>
<Box>
    <Navbar/>
<Stack direction='row' spacing={2} justifyContent='space-between'>

<Sidebar/>
<Feed/>
<Rightbar/>





</Stack>

</Box>








    </>
    );








}
export default App;