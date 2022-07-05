import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'



const Footer: NextPage = () => {
    return (
        <Box sx={{backgroundColor:'secondary.main'}} pt='75px'>
        <Container>
        <Grid container justifyContent='space-around' textAlign={{xs:'center', lg:'start'}} alignItems='flex-start'>
                <Grid container justifyContent='space-around' item xs={12} sm={6} lg={3} my='30px'>
                    <Stack justifyContent='center' spacing={4}>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Digital Agency</b>
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            Building digital products, <br /> brands & experience
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container justifyContent='space-around' item xs={12} sm={6} lg={3} my='30px'>
                    <Stack justifyContent='center' spacing={3}>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Resources</b>
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Guides
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Blog
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Cuistomer Stories
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Glossery
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container justifyContent='space-around' item xs={12} sm={6} lg={3} my='30px'>
                    <Stack justifyContent='center' spacing={3}>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Company</b>
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Careers
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Partners
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Contact Us
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container justifyContent='space-around' item xs={12} sm={6} lg={3} my='30px'>
                    <Stack justifyContent='center' spacing={3}>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Social Media</b>
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            LinkedIn
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Facebook
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Instagram
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='16px'
                            lineHeight='16px'
                        >
                            Twitter
                        </Typography>
                    </Stack>
                </Grid>
        </Grid>
        <Grid container justifyContent='center' mt='100px' pb='20px'>
            <Typography
                variant="h1"
                component="div"
                fontSize='16px'
                lineHeight='16px'
            >
                © Matheus. Todos os direitos reservados
            </Typography>
        </Grid>
        </Container>
        </Box>
    )
}

export default Footer