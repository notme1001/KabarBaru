import React from 'react';
import styled from '@emotion/styled'

const P = styled.p`
    font-family: ${({theme}: any) => theme.fonts.Poppins};
    color: ${({theme, color}: any) => color || theme.fonts.blackPrimary};
    margin: 0px;
    @media (max-width: 510px) {
        font-size: 14px;
    }
`

const Paragraph: React.FC<{
    color?: string
    style?: React.CSSProperties | undefined
}> = ({children, color, style, ...props}) => {
    return(
        <>
            <P color={color} style={style} {...props}>{children}</P>
        </>
    )
}

export default Paragraph