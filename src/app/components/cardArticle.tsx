import React from 'react';
import Image from './image'
import Title from './title'
import Paragraph from './paragraph'
import AboutArticle from './aboutArticle'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Box = styled.div`
    width: 100%;
    max-width: ${(props: ICardArticle) => props.display == 'horizontal' ? '45rem' : '40rem'};
    display: flex;
    flex-direction: ${(props) => props.display == 'horizontal' ? 'row' : 'column'};
    margin-bottom: 46px;
    padding: 0px 10px 0px 10px;
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 910px) {
        flex-direction: column;
        padding: 0px 10px 0px 10px;
        max-width: 100%;
    }
`

const BoxDetail = styled.div`
    margin-left: ${(props: ICardArticle) => props.display == 'horizontal' ? '20px' : '0px'};
    margin-top: ${(props: ICardArticle) => props.display == 'horizontal' ? '0px' : '20px'};
    @media (max-width: 910px) {
        margin-left: 0px;
        margin-top: 20px;
    }
`

const LinkCard = styled(Link)`
    text-decoration: none;
    color: ${(props: ICardArticle) => props.theme.colors.blackPrimary};
    &:hover{
        color: ${(props: ICardArticle) => props.theme.colors.blackSecondary};
    }
`

const CardArticle: React.FC<ICardArticle> = ({display, id, image, title, description, style, publishedAt, author, ...props}) => {
    return(
        <>
            <LinkCard to={`/detail/${id!}`} style={style} {...props}>
                <Box display={display}>
                    <Image src={image!} display={display} width={display == 'horizontal' ? '200px': '100%'}/>
                    <BoxDetail display={display}>
                        <Title size={display == 'horizontal' ? '21px': null}>{title}</Title>
                        <Paragraph>{description}</Paragraph>
                        <AboutArticle publishedAt={publishedAt!} author={author!} size="sm"/>
                    </BoxDetail>
                </Box>
            </LinkCard>
        </>
    )
}

export default CardArticle