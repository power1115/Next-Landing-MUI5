import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Land from '../components/Land'

import theme from '../styles/theme'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Land />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
