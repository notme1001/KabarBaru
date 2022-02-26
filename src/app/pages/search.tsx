import React, { useEffect, useState } from 'react'
import Title from '../components/title'
import styled from '@emotion/styled'
import { Input, Button, Row, Col, Spinner } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { searchArticle } from '../redux/articles/actionCreator'
import CardArticle from '../components/cardArticle'
import P from '../components/paragraph'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BoxSearch = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const InputCustom = styled(Input)`
    width: 40%;
    height: 44px;
    border-radius: 8px;
    background-color: ${({theme}: any) => theme.colors.whiteSecondary};
    border: 0.8px solid #dedede;
    @media (max-width: 910px){
        width: 100%;
    }
`

const BtnIcon = styled(Button)`
    padding: 9px 14px;
    border-radius: 12px;
    &:hover {
        background-color: ${({theme}: any) => theme.colors.blackSecondary};
    }
`

const SearchPage: React.FC = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const { articles, err, loading } = useSelector((state: {articles: ArticleReduxState}) => state?.articles, shallowEqual)

    useEffect(() => {
        dispatch(searchArticle('id'))
    }, [])

    const handleSearch = () => dispatch(searchArticle(input))

    return (
        <>
            <Box>
                <Title style={{textAlign: 'center'}}>Search Article</Title>
                <BoxSearch>
                    <InputCustom 
                        placeholder='Search Article...' 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(key) => key.key == "Enter" && handleSearch()}
                    />
                    <BtnIcon onClick={handleSearch}>
                        <FaSearch />
                    </BtnIcon>
                </BoxSearch>
                {
                    articles.length == 0 &&
                    <div className="boxLoading">
                        <Title>Article not found</Title>
                    </div>
                }
                {
                    loading ?
                    <div className="boxLoading">
                        <Spinner />
                    </div> :
                    <Row style={{marginTop: 60, marginRight: 0}}>
                        {
                            articles.slice(3)
                            .map((article, index) => {
                                return(
                                    <Col
                                        key={index}
                                        sm="12"
                                        md="6"
                                        // style={{paddingRight: 20}}
                                    >
                                        <CardArticle
                                            image={article.urlToImage} 
                                            author={article.author} 
                                            description={article.description} 
                                            title={article.title}
                                            publishedAt={article.publishedAt}
                                            display='horizontal' id='/' 
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                }
            </Box>
        </>
    )
}

export default SearchPage;