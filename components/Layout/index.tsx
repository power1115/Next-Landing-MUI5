import type { NextPage} from 'next'

import Header from '../Header'
import Footer from '../Footer'

import { 
    Box, 
    Slide, 
    useScrollTrigger,
} from '@mui/material';



type LayoutProps = {
    children: React.ReactNode,
};


const Layout:NextPage<LayoutProps> = ({ children }) => {
    return (
        <Box color='text.primary'>
            <Header />
            {/* <Content> */}
                {children}
            {/* </Content> */}
            <Footer />
        </Box>
    )
}
export default Layout