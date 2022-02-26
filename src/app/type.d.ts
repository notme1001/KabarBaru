interface IArticle {
    id?: string
    source: {
        id?: string
        name: string
    }
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

type IImage = {
    src: string
    style?: React.CSSProperties
    width?: string | null
    display?: string
}

type ICardArticle = {
    display?: string | 'horizontal' | 'vertical'
    id?: string
    theme?: any
    style?: React.CSSProperties
    image?: string
    title?: string
    description?: string
    publishedAt?: string
    author?: string
}

type ITitle = {
    style?: React.CSSProperties
    size?: string | '24px' | null;
}

type ArticleReduxState = {
    loading: false
    err: false
    articles: IArticle[]
}
  
type ArticleAction = {
    type: string
    articles?: IArticle[]
    article?: IArticle
    err?: boolean
}
  
type DispatchType = (args?: ArticleAction) => ArticleAction