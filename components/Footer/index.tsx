import { Container, Grid, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'



const Footer: NextPage = () => {
    return (
        <Container sx={{backgroundColor:''}}>
        <Grid container lg={12}>
            <Grid item container lg={6}>
                <Grid item md={6}>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Digital Agency1</b>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Digital Agency2</b>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item container lg={6}>
                <Grid item md={6}>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Digital Agency3</b>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography
                            variant="h1"
                            component="div"
                            fontSize='18px'
                            lineHeight='27.5px'
                        >
                            <b>Digital Agency4</b>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
        </Container>
    )
}

export default Footer