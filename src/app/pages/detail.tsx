import React from 'react'
import Image from '../components/image'
import styled from '@emotion/styled'
import Title from '../components/title'
import P from '../components/paragraph'
import AboutArticle from '../components/aboutArticle'
import { Row, Col } from 'reactstrap'
import CardArticle from '../components/cardArticle'
import { useSelector, shallowEqual } from 'react-redux'
import { useParams } from 'react-router-dom'

const Box = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 45rem;
    text-align: center;
    background-color: #fff;
    margin-top: -48px;
    border-radius: 12px;
    margin-left: 18px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 8%);
    @media (max-width: 768px) {
        margin-top: 28px;
        margin-left: 0px;
    }
`

const BoxContent = styled.div`
    padding: 30px 16px;
`

const Detail: React.FC = () => {
    const { articles, err, loading } = useSelector((state: {articles: ArticleReduxState}) => state?.articles, shallowEqual)
    const param = useParams();

    const queryArticle = articles.find(item => item.id == param.id)
    
    return(
        <>
            <Image 
                src={queryArticle?.urlToImage || ''}
                style={{height: '600px'}} 
                width="100%" 
            />
            <Box>
                <Title>{queryArticle?.title}</Title>
                <AboutArticle author={queryArticle?.author || ''} publishedAt={queryArticle?.publishedAt || ''} style={{marginTop: 43}} />
            </Box>

            <BoxContent>
                <Row>
                    <Col
                        sm="12"
                        md="8"
                        style={{marginBottom: 28}}
                    >
                        <P>
                            {queryArticle?.description}
                            <br />
                            <br />
                            {queryArticle?.content}
                            <br />
                            <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam alias nulla cupiditate velit quam incidunt a eaque omnis! Laborum, assumenda. Nam et placeat aliquam culpa tenetur doloremque hic provident deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non eligendi dignissimos et iste, perspiciatis ad aperiam veniam excepturi ipsam consequatur dolor fuga sequi eos ut iure nemo hic atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, est dignissimos magni debitis eum officiis dolor quis at, rerum aspernatur aliquid sequi placeat eaque impedit minima optio dolorem et porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta dicta quae dolores perferendis veritatis maiores iusto numquam minus, ex consequuntur! Alias, molestias? Alias officiis, sunt distinctio autem amet sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vel incidunt autem rerum, reprehenderit minus dolorem ea laboriosam enim numquam nulla vitae accusamus iusto doloremque, nisi nesciunt dolore eaque eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad consequatur explicabo perspiciatis voluptas neque, commodi quos dolor iste voluptates! Alias aut labore, quos recusandae voluptatum iusto asperiores. Perspiciatis, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, obcaecati omnis odit cupiditate esse aliquam, a quo itaque ducimus porro sed sequi fugiat! Vero, qui praesentium harum fugit facere neque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ratione blanditiis soluta quisquam nulla, et eos laudantium consequuntur odit pariatur, repudiandae rem vitae fugiat similique unde ad hic, quas impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod harum distinctio incidunt ullam, molestiae quia sequi ducimus eos. Iste iusto dignissimos neque placeat aut architecto incidunt delectus a nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, inventore ex. Velit, molestias. Odit expedita quo debitis deserunt mollitia dolor consequatur earum, sequi, consequuntur facilis ratione at? Quam, rem ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni hic expedita assumenda, iste ullam quod culpa architecto quos. Vel quidem esse praesentium unde autem laudantium maxime earum quia eveniet quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto temporibus necessitatibus aliquid voluptatibus aut quisquam laboriosam maiores quasi, enim, voluptatum maxime ipsum itaque! Quaerat temporibus tempore corrupti ut aliquam ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod adipisci commodi dignissimos enim. Deserunt est perspiciatis cum recusandae omnis magni, optio maxime modi explicabo nostrum ab, similique eos nobis?
                        </P>
                    </Col>
                    <Col
                        sm="12"
                        md="4"
                    >
                        <Title style={{
                            marginBottom: 20, padding: '0px 15px'
                        }}>More Article</Title>
                        {
                            articles.slice(3, 6)
                            .map((article, index) => {
                                return(
                                    <CardArticle
                                        key={index}
                                        image={article.urlToImage} 
                                        author={article.author} 
                                        description={article.description} 
                                        title={article.title}
                                        publishedAt={article.publishedAt}
                                        display='vertical' id={article.id} 
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
            </BoxContent>
        </>
    )
}

export default Detail