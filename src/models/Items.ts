interface Price {
    currency: string,
    amount: number,
    decimals: number,
}

interface Author {
    name: string
    lastname: string
}

export interface Item {
    id: string,
    title: string,
    picture: string,
    condition: string,
    price: Price,
    free_shipping: Boolean,
}

export interface ItemDetail extends Item {
    author: Author,
    sold_quantity: number
    description: string
}

export interface Items {
    author: Author,
    categories: string[],
    items: Item[]
}