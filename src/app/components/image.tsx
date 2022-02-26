import React from 'react'
import styled from '@emotion/styled'

const Box = styled.div`
    background-image: url("${(props: IImage) => props.src}");
    background-position: center;
    width: 100%;
    max-width: ${(props: IImage) => props.width || '40rem'};
    height: ${(props: IImage) => props.display == 'horizontal' ? '200px' : props.display == 'vertical' ? '240px' : '100%'};
    background-repeat: no-repeat;
    border-radius: 12px;
    background-size: cover;
    @media (max-width: 910px) {
        max-width: 100%;
    }
`

const Image: React.FC<IImage> = ({src, style, width, ...props}) => {
    return (
        <>
            <Box src={src} style={style} width={width} {...props} />
        </>
    )
}

export default Image