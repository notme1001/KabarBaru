import { actions } from './actions'
import useSWR from 'swr'
import { DataService } from '../../utils/dataServices'
import { v4 as uuidv4 } from 'uuid';

const {
    articleErr,
    articleSuccess,
    articleBegin
} = actions

const fetchArticle = (country: string, category?: string) => {
    return async (dispatch: DispatchType) => {
        dispatch(articleBegin())
        try {
            DataService.get(`top-headlines?country=${country}&category=${category || ''}`)
            .then((data) => {
                const addArticleWithUUID = data?.data?.articles.map((item: IArticle) => {
                    return {
                        id: uuidv4(),
                        ...item,
                    }
                })
                dispatch(articleSuccess(addArticleWithUUID))
            })
            .catch(err => {
                dispatch(articleErr(err))
            })
        } catch (err) {
            dispatch(articleErr(err ? true : false))
        }
    }
}

const searchArticle = (q: string) => {
    return async (dispatch: DispatchType) => {
        dispatch(articleBegin())
        try {
            DataService.get(!q ? `top-headlines?country=id` : `everything?q=${q}&language=id`)
            .then((data) => {
                const addArticleWithUUID = data?.data?.articles.map((item: IArticle) => {
                    return {
                        id: uuidv4(),
                        ...item,
                    }
                })
                dispatch(articleSuccess(addArticleWithUUID))
            })
            .catch(err => {
                dispatch(articleErr(err))
            })
        } catch (err) {
            dispatch(articleErr(err ? true : false))
        }
    }
}

export {
    fetchArticle,
    searchArticle
}