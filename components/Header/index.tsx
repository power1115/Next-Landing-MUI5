import type {NextPage} from 'next'
import { cloneElement, useState } from 'react';

import { 
    AppBar, 
    Button, 
    Toolbar, 
    Typography, 
    useScrollTrigger,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material'

import { styled } from '@mui/material/styles';

const StickBar = styled(AppBar)(({ theme }) => ({
 backgroundColor:'transparent',
 py:'20px'
}))

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}


const navItems = ['Home', 'About', 'testimonials', 'Contact'];

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    
    if (trigger==true) {
      const clone = cloneElement(children, {
        elevation: 4,
        color:'primary'

      });
      return clone
    }
    else {
      const clone = cloneElement(children, {
        elevation: 0,
      });
      return clone
    }
  }

const Header:NextPage = () => {
  
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    
  return (
    <ElevationScroll>
      <AppBar  color='transparent' sx={{ py:'20px' }}>
          <Container>
          <Toolbar>
              <Typography
                  variant="h6"
                  component="div"
                  fontSize='20px'
                  sx={{ flexGrow: 1 }}
              >
                  <b>DIGITAL AGENCY</b>
              </Typography>
              <Box display= {{ xs: 'none', sm: 'block' }} >
                  {navItems.map((item, index) => (
                  <Button key={index} sx={{ color: '#000' }}>
                      {item}
                  </Button>
                  ))
                  }
              </Box>
              
              {/* mobile menu */}

              <Box display= {{ xs: 'flex', sm: 'none' }} >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <img src='Vector.png' />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                  }}
                >
                  {navItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

          </Toolbar>
          </Container>
      </AppBar>
    </ElevationScroll >
  )
}
export default Header