import { ARTICLE } from '../constants'

const initialState: ArticleReduxState = {
    loading: false,
    err: false,
    articles: [],
}

export const reducers = (state = initialState, action: ArticleAction) => {
    const { type, articles, article, err } = action

    switch (type) {
        case ARTICLE.GET_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case ARTICLE.ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: articles,
            }
        case ARTICLE.ARTICLE_ERR:
            return {
                ...state,
                loading: false,
                err
            }
        default:
            return state
    }
}