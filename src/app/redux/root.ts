import { combineReducers } from 'redux';
import { reducers as ArticleReducers } from './articles/reducers'

const rootReducers = combineReducers({
    articles: ArticleReducers
});

export default rootReducers;