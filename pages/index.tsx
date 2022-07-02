import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Land from '../components/Land'

import theme from '../styles/theme'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  
}));

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
      <Layout>
        <Land />
      </Layout>
      </Root>
    </ThemeProvider>
  )
}

export default Home
