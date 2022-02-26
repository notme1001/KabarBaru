import { ARTICLE } from '../constants'

export const actions = {
    articleBegin: () => {
        return {
            type: ARTICLE.GET_ARTICLE
        }
    },
    articleSuccess: (articles: IArticle[]) => {
        return {
            type: ARTICLE.ARTICLE_SUCCESS,
            articles
        }
    },
    articleErr: (err: boolean) => {
        return {
            type: ARTICLE.ARTICLE_ERR,
            err
        }
    }
}