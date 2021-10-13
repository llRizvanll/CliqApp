export type ProductType = {
    id: number;
    name: string;
    price: number;
    brand_name: string;
    offer: string;
    img: string;
    type: string;
}

export type TrendingType = {
    id: number;
    name: string;
    img: string;
    bgColor: string;
    type: string;
    price: string;
    sizes: number[];
}