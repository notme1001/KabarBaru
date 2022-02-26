import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchArticle } from '../redux/articles/actionCreator'
import CardArticle from '../components/cardArticle'
import {Row, Col} from 'reactstrap'
import { Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'
import {ErrComp} from '../components/err'

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const param = useParams();

    const { articles, err, loading } = useSelector((state: {articles: ArticleReduxState}) => state?.articles, shallowEqual)

    useEffect(() => {
        dispatch(fetchArticle('id', param.category))
    }, [param.category])
    
    if(err){
        return <ErrComp />
    }

    if(loading || articles.length == 0){
        return (
            <div className="boxLoading">
                <Spinner />
            </div>
        )
    }

    return (
        <>
            <Row>
                <Col
                    md="12"
                    lg="6"
                >
                    <CardArticle 
                        image={articles[0].urlToImage} 
                        author={articles[0].author} 
                        description={articles[0].description} 
                        title={articles[0].title}
                        publishedAt={articles[0].publishedAt}
                        display='vertical' id={articles[0].id} 
                    />
                </Col>
                <Col
                    md="12"
                    lg="6"
                >
                    <CardArticle 
                        image={articles[1].urlToImage} 
                        author={articles[1].author} 
                        description={articles[1].description} 
                        title={articles[1].title}
                        publishedAt={articles[1].publishedAt}
                        display='horizontal' id={articles[1].id} 
                    />
                    <CardArticle 
                        image={articles[2].urlToImage} 
                        author={articles[2].author} 
                        description={articles[2].description} 
                        title={articles[2].title}
                        publishedAt={articles[2].publishedAt}
                        display='horizontal' id={articles[2].id}
                    />
                </Col>
                <Row style={{marginTop: 20, marginRight: 0}}>
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
                                        display='horizontal' id={article.id} 
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>
        </>
    );
}

export default HomePage