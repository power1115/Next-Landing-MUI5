import type {NextPage} from 'next'
import { cloneElement, useState } from 'react';

import { 
    AppBar, 
    Button, 
    CssBaseline, 
    Divider, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    Slide, 
    Toolbar, 
    Typography, 
    useScrollTrigger,
    Box,
    Container,
    Paper,
    colors,
} from '@mui/material'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}


const navItems = ['Home', 'About', 'testimonials', 'Contact'];

function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    
    if (trigger==true) {
      const clone = cloneElement(children, {
        elevation: 4,
        sx:'backgroundColor=white'
      });
      console.log(clone,'321a')
      return clone
    }
    else {
      const clone = cloneElement(children, {
        elevation: 0,
      });
      console.log(clone,'321a')
      return clone
    }
  }

const Header:NextPage = () => {
    
    return (
        <>
      <ElevationScroll>
        <AppBar sx={{backgroundColor:'transparent', py:'20px'}}>
            <Container>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    fontSize='20px'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <b>DIGITAL AGENCY</b>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#000' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
      </ElevationScroll >
      
    {/* <Container>
        <Box sx={{ my: 2 }} pt='60px'>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
    </Container> */}
      
      </>
    )
}
export default Header