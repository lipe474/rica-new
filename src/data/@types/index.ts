export interface Article {
    id: string;
    title: string;
    resume: string;
    image: string;
    published_at: string;
    Categories: Category[];
}



export type Category = {
    category_id: number;
    category: {
        name: string;
    }
}

export type CategoryItem = {
    id: number;
    name: string;
}

