import type { NextPage } from 'next'

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { Container } from '@mui/system';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    paddingTop:'60px',
    paddingBottom:'60px',
    
  }));

const Ellipse = styled(Box)(({theme}) => ({
    width:'679px',
    height:'679px', 
    position:'absolute',
    backgroundColor: '#8EADD5', 
    filter: 'blur(306px)',
}));

const CenteralGrid = styled(Grid)(({ theme }) => ({
    alignItems:'center',
    justifyContent:'center',

}));

const testimonialItem = [
    {
        img:'western-man-1.png',
        name:'Andrew Rathore',
        text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ',
    },
    {
        img:'western-man-2.png',
        name:'Vera Duncan',
        text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ',
    },
    {
        img:'western-man-3.png',
        name:'Mark Smith',
        text1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ',
    },
];

const Land:NextPage = () => {
    return (
        <Root sx={{ position:'relative' }} >
            <Container >
                <Ellipse top = '-324px' left = 'calc(50% - 679px/2 - 601.5px)' />
                <Box position='absolute' height='679px' top='875px' right='0px'>
                    <img src='ellipse2.svg' />
                </Box>
                <Grid position='relative'>
                    <CenteralGrid container md={12} my='50px'>
                        <CenteralGrid container md={6} item >
                            <Stack spacing={3}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='64px'
                                    lineHeight='64px'
                                >
                                    <b>Building digital <br/> products, brands <br/> & experience</b>
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='18px'
                                    lineHeight='27.5px'
                                >
                                    Digital Agency is your online team mangement tool that <br/> easy and prompt
                                </Typography>
                                <Stack  width='167px' pt='20px'>
                                    <Button variant="contained">contact us</Button>
                                </Stack>
                            </Stack>
                        </CenteralGrid>
                        <CenteralGrid md={6} item>
                            <Stack width='450px' height='450px'>
                                <img src='business-people-discussing-business-idea.png' />
                            </Stack>
                        </CenteralGrid>
                    </CenteralGrid>

                    <CenteralGrid container direction='column'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                        Trusted by 4,000+ companies
                        </Typography>
                        <Box sx={{backgroundColor:'#F6F6F6'}} 
                            borderRadius='8px'>
                            <Stack
                            justifyContent='center' 
                            alignItems='center' 
                            direction='row' 
                            spacing={{md:15,sm:10, xs:5}} 
                            height={{md:'38px', sm:'28px', xs:'24px'}} margin='24px'>
                                <img src='Company logo.png' height='100%' />
                                <img src='Company logo (1).png' height='100%' />
                                <img src='Company logo (2).png' height='100%' />
                                <img src='Company logo (3).png' height='100%' />
                            </Stack>
                        </Box>
                    </CenteralGrid>

                    <CenteralGrid container md={12} my='50px'>
                        <CenteralGrid md={6} item>
                            <Stack width='450px' height='450px'>
                                <img src='designer-team-working-on-creative-design.png' />
                            </Stack>
                        </CenteralGrid>
                        <CenteralGrid md={6} item >
                            <Stack spacing={3}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='48px'
                                    lineHeight='48px'
                                >
                                    <b>Branding & Design <br /> system</b>
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='18px'
                                    lineHeight='27.5px'
                                >
                                    Commonly used in the graphic, print & publishing <br />industris for previewing visual layout and <br /> mockups

                                </Typography>
                                <Stack  width='22px' pt='20px'>
                                    <img src = "Arrow 1.png" />
                                </Stack>
                            </Stack>
                        </CenteralGrid>
                    </CenteralGrid>
                    
                    <CenteralGrid container md={12} my='50px'>
                        {/* <Ellipse left= 'calc(50% - 679px/2 + 818.5px)' top='-275px' /> */}
                        <CenteralGrid md={6} item >
                            <Stack spacing={3}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='48px'
                                    lineHeight='48px'
                                >
                                    <b>Custome & Plugin <br /> Development</b>
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='18px'
                                    lineHeight='27.5px'
                                >
                                    Commonly used in the graphic, print & publishing <br /> industris for previewing visual layout and <br />mockups

                                </Typography>
                                <Stack  width='22px' pt='20px'>
                                    <img src = "Arrow 1.png" />
                                </Stack>
                            </Stack>
                        </CenteralGrid>
                        <CenteralGrid md={6} item>
                            <Stack width='450px' height='450px'>
                                <img src='businessman-analyzing-data.png' />
                            </Stack>
                        </CenteralGrid>
                        
                    </CenteralGrid>
                    
                    <CenteralGrid container textAlign='center' direction='column'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                        TESTMONIALS
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='48px'
                            lineHeight='48px'
                        >
                            <b>Read What Other <br /> have to Say</b>
                        </Typography>
                        <Stack direction={{md:'row', xs:'column'}} spacing={10} my='50px'>
                            {testimonialItem.map((item,index) => (
                                <Box sx={{backgroundColor:'#F6F6F6'}} maxWidth='345px' borderRadius='20px' padding='24px'>
                                    <Stack spacing={2} justifyContent='center' alignItems='center' key = {index}>
                                        <img src={item.img} width='130px' height='130px' />
                                        <Typography
                                            variant="h1"
                                            component="div"
                                            fontSize='18px'
                                            lineHeight='27.5px'
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            component="div"
                                            fontSize='14px'
                                            lineHeight='18.2px'
                                        >
                                            {item.text1}
                                        </Typography>
                                    </Stack>
                                </Box>
                            ))}
                        </Stack>
                    </CenteralGrid>
                    
                    <CenteralGrid container md={12} px='75px' sx={{backgroundColor:'#F6F6F6', borderRadius:'20px'}}>
                        <CenteralGrid md={6} item>
                            <Stack width='450px' height='450px'>
                                <img src='customer-support.png' />
                            </Stack>
                        </CenteralGrid>
                        <CenteralGrid md={6} item >
                            <Stack spacing={3}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='48px'
                                    lineHeight='48px'
                                >
                                    <b>Be a part of the <br /> next big thing</b>
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    fontSize='18px'
                                    lineHeight='27.5px'
                                >
                                    We work with Brans, Startups, to SMEs. <br /> Colaborate for more impact and growt
                                </Typography>
                                <Stack  width='167px' pt='20px'>
                                    <Button variant="contained">contact us</Button>
                                </Stack>
                            </Stack>
                        </CenteralGrid>
                    </CenteralGrid>
                </Grid>
            </Container>
        </Root>
    )
}

export default Land