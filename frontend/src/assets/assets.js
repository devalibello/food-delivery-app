import bannerImage from './banner-image.png'
import burger from './burger-category.png'
import logo from './logo.svg'
import pasta from './pasta-category.png'
import pizza from './pizza-category.png'
import salad from './salad-category.png'
import soup from './soups-category.png'
import addIconGreen from './add_icon_green.png'
import removeIconRed from './remove_icon_red.png'
import addIconWhite from './add_icon_white.png'
import crossIcon from './cross_icon.png'
import bagIcon from './bag_icon.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'

export const assets = {
    bannerImage,
    burger,
    logo,
    pasta,
    pizza,
    salad,
    soup,
    addIconGreen,
    removeIconRed,
    addIconWhite,
    crossIcon,
    bagIcon,
    profile_icon,
    logout_icon
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
        description: 'Exceptional Taste',
        category: 'Salad'
    },
    {
        _id: '2',
        name: 'Italian Pizza',
        image: pizza,
        price: 55,
        description: 'Exceptional Taste',
        category: 'Pizza'
    },
    {
        _id: '3',
        name: 'Milky Pasta',
        image: pasta,
        price: 40,
        description: 'Exceptional Taste',
        category: 'Salad'
    }
]