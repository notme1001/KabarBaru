import React from 'react'
import styled from '@emotion/styled'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding-top: 14px;
    padding-bottom: 14px;
    position: fixed;
    bottom: 0;
    background-color: ${({theme}: any) => theme.colors.whiteSecondary}
`

const P = styled.p`
    fonts-family: ${({theme}: any) => theme.fonts.Poppins};
    color: ${({theme}: any) => theme.colors.greySecondary};
    font-weight: 300;
    font-size: 14px;
    padding: 0px;
    margin: 0px;
`

const Footer: React.FC = () => {
    return (
        <>
            <Box>
                <P>KabarBaru by @IbnuGunawan</P>
            </Box>
        </>
    )
}

export default Footer