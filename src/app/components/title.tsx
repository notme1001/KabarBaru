import React from 'react';
import styled from '@emotion/styled'

const TitleBox = styled.h2`
    font-family: ${({theme}: any) => theme.fonts.Poppins};
    font-weight: 600;
    font-size: ${(props: ITitle) => props.size || '24px'};
    @media (max-width: 510px) {
        font-size: 18px;
    }
`

const Title: React.FC<ITitle> = ({style, children, ...props}) => {
    return (
        <>
            <TitleBox style={style} {...props}>
                {children}
            </TitleBox>
        </>
    )
}

export default Title