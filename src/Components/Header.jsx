import React, { useEffect, useState } from 'react'

import '../CSS/Header.css'
import v from "../Images/Video/v.mp4"
import { AspectRatio, Box, Button, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
function Header() {
 

  return (
 
    <Box width="100%" height={'650px'} position={"relative"} >
         <AspectRatio width='100%' height={'100%'} ratio={1}>
  <video width="100%" height="100%"  autoPlay loop muted>
    <source src={v} type="video/mp4" />

  </video>

  
</AspectRatio>
<Box top="320px"   position="absolute" left="100px" textAlign={"justify"} lineHeight={"80px"}> 
<Text fontSize={"4xl"} as="b" color={"White"}> WELCOME TO AMR GROUP</Text>
<Text width={"75%"} fontSize={"22px"} color="white">Empowering progress through responsible excavation of the earth's riches."</Text>
<Link to="/mission">
<Button bg="orange" borderRadius="10%" >See More <span ml="10px"><ArrowForwardIcon /></span></Button>
</Link>
    </Box> 
    </Box>
  )
}

export default Header
