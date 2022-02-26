import React from 'react'
import Header from './header/header'
import Footer from './footer'
import { Container } from 'reactstrap'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const ContainerBox = styled(Container)`
    max-width: 1420px;
    margin-top: 95px;
    margin-bottom: 38px;
    @media (max-width: 910px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Layout: React.FC = () => {
    return (
        <>
            <Header />
                <ContainerBox fluid="xxl" className='w-full'>
                    <Outlet />
                </ContainerBox>
            <Footer />
        </>
    )
}