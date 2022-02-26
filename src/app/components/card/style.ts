import styled from '@emotion/styled'

const Box = styled.div`
    width: 100%;
    max-width: ${(props: ICardArticle) => props.display == 'horizontal' ? '100%' : '40rem'};
    display: flex;
    flex-direction: ${(props) => props.display == 'horizontal' ? 'row' : 'column'};
    @media (max-width: 910px) {
        flex-direction: column;
    }
`

const BoxDetail = styled.div`
    margin-left: ${(props: ICardArticle) => props.display == 'horizontal' ? '0px' : '30px'};
    @media (max-width: 910px) {
        margin-left: 0px;
    }
`

export {
    Box,
    BoxDetail
}