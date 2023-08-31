export interface Article {
  id: string;
  title: string;
  resume: string;
  image: string;
  published_at: string;
  Categories: Category[];
}

export interface RelatedArticles {
  article: {
    id: string;
    title: string;
    resume: string;
    image: string;
    created_at: string;
    published_at: string;
    Categories: Categories[];
  };
}

export interface Categories {
  category_id: number;
}
[];

export type Category = {
  category_id: number;
  category: {
    name: string;
  };
};

export type CategoryItem = {
  id: number;
  name: string;
};
