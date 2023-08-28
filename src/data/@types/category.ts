

type Article = {
    id: string;
    title: string;
    resume: string;
    created_at: string;
    image: string;
    published_at: string;
};

export type CategoryByArticle = {
    id: number;
    name: string;
    articles: {
        article: Article;
    }[];
};

export type Category = {
    id: number;
    name: string;
};

export type UserArticles = {
    user_id: number;
    user_type: string;
    user: {
        name: string;
    }
}

export type Categories = {
    category_id: number;
    category: {
        name: string;
    }
}


export type CardArticle = {
    id: string;
    title: string;
    resume: string;
    image: string;
    published_at: string;
    Categories: Categories[];
    UserArticles?: UserArticles[];
}

export type ArticleByCardArticle = {
    article: CardArticle;
}


