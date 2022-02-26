import React from 'react'
import styled from '@emotion/styled'
import { FaUserCircle } from 'react-icons/fa'
import P from './paragraph'

const Box = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    color: ${({theme}: any) => theme.colors.greySecondary};
    font-size: ${(props: {size?: string}) => props.size == "sm" ? "14px" : "16px"}
`

const BoxFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const AboutArticle: React.FC<{
    publishedAt: string
    author: string
    size?: string
    style?: React.CSSProperties | undefined
}> = ({publishedAt, author, size, style}) => {
    return (
        <>
            <div style={style}>
                <Box size={size}>
                    <P>{new Date(publishedAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</P>
                    <BoxFlex>
                        <P style={{marginRight: 14}}>@{author || '-'}</P>
                        <FaUserCircle />
                    </BoxFlex>
                </Box>
            </div>
        </>
    )
}

export default AboutArticle