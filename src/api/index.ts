import { defaultArticles } from "@/mock/articles";


export async function getArticleById(id: string) {
    const fetchArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/article/${id}`, {
        cache: 'no-store',
    })

    if (!fetchArticle.ok) {
        throw new Error('Failed to fetch  getArticleById')
    }

    return fetchArticle.json()
}

export async function getArticle() {
    const fetchArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentArticles?amount=10&skip`, {
        cache: 'no-store', // no-cache, reload, force-cache, only-if-cached, no-store
    });

    if (!fetchArticle.ok) {
        throw new Error('Failed to fetch articles');
    }

    const response = await fetchArticle.json();

    return response.articles || defaultArticles;
}


export async function getRelatedArticles(id: string) {
    const fetchArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/relatedArticles/${id}?amount=1&skip`, {
        cache: 'no-store',
    })

    if (!fetchArticle.ok) {
        throw new Error('Failed to fetch  getRelatedArticles')
    }

    return fetchArticle.json()
}

export async function getArticlesByCategory(id: string, amount: number = 2) {
    const fetchArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/articles/${id}?amount=${amount}&skip`, {
        cache: 'no-store',
    })

    if (!fetchArticle.ok) {
        throw new Error('Failed to fetch  getRelatedArticles')
    }

    const response = await fetchArticle.json()
    return response[0] ? response[0] : null
}

export async function getCategories() {
    const fetchArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
        cache: 'no-store',
    })

    if (!fetchArticle.ok) {
        throw new Error('Failed to fetch getCategories')
    }

    return fetchArticle.json()
}


