import bannerImage from './banner-image.png'
import burger from './burger-category.png'
import logo from './logo.svg'
import pasta from './pasta-category.png'
import pizza from './pizza-category.png'
import salad from './salad-category.png'
import soup from './soups-category.png'


export const assets = {
    bannerImage,
    burger,
    logo,
    pasta,
    pizza,
    salad,
    soup
}

export const categoryList = [
    {
        image: burger,
        name: 'Burger',
        footer: 'Special Taste'
    },
    {
        image: pasta,
        name: 'Pasta',
        footer: 'Special Taste'
    },
    {
        image: pizza,
        name: 'Pizza',
        footer: 'Special Taste'
    },
    {
        image: salad,
        name: 'Salad',
        footer: 'Special Taste'
    },
    {
        image: soup,
        name: 'Soup',
        footer: 'Special Taste'
    },
]

export const foodList = [
    {
        _id: '1',
        name: 'Salad',
        image: salad,
        price: 50,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, iusto!',
        category: 'Salad'
    },
    {
        _id: '2',
        name: 'Salad Mix',
        image: salad,
        price: 55,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, iusto!',
        category: 'Salad'
    },
    {
        _id: '3',
        name: 'Salad Special',
        image: salad,
        price: 40,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, iusto!',
        category: 'Salad'
    }
]