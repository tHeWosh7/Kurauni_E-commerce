import logo from "./Logo.png";
import product1 from "./1.png"
import product2 from "./15.png"
import product3 from "./16.png"
import product4 from "./4.png"
import product5 from "./aug21.png"
import product6 from "./pexels-christian-heitz-285904-842711.jpg"
import facebook from "./facebook.png"
import tiktok from "./tiktok.png"
import cart from "./cart.png"

export const assets = {
    logo,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    facebook,
    tiktok,
    cart
}


export const dummyImages = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6
]

export const dummyProductData = [
    {
        id: 101,
        name: "Classical Sugarfree Kurauni",
        price: 650,
        image: product1,
        description: "A refreshing sugar-free desert made from natural ingredients.",
        sold: "120+"
    },
    {
        id: 102,
        name: "Classical Kurauni with Sugar",
        price: 700,
        image: product2,
        description: "Traditional Kurauni dessert with a perfect blend of sweetness.",
        sold: "200+"
    },
    {
        id: 103,
        name: "Classical Kurauni with extra toppings",
        price: 700,
        image: product3,
        description: "A delicious vegan version of the classic Kurauni dessert.",
        sold: "80+"
    },
    {
        id: 104,
        name: "Sugarfree Kurauni with Nuts and Berries",
        price: 750,
        image: product4,
        description: "A delightful Kurauni dessert topped with fresh fruits and nuts.",
        sold: "150+"
    },
    {
        id: 105,
        name: "Vegan Kurauni with Coconut Milk",
        price: 720,
        image: product6,
        description: "A delicious vegan version of the classic Kurauni dessert.",
        sold: "60+"
    },

    {
        id: 106,
        name: "Kurauni Dessert with Chocolate Drizzle",
        image: product2,
        price: 780,
        description: "Classic Kurauni dessert topped with rich chocolate sauce.",
        sold: "110+"
    },
    {
        id: 107,
        name: "2 Pieces of Pedas with toppings",
        image: product4,
        price: 55,
        description: "Two pieces of traditional Pedas garnished with cashews.",
    },
    {
        id: 201,
        name: "Combo Special Kurauni Pack",
        price: 800,
        image: product5,
        description: "Combo Pack of Classical sugarfree and Classical Kurauni with sugar desserts.",
        sold: "90+"
    },
]

export const dummyCartData = [
    {
        productId: 101,
        quantity: 2
    },
    {
        productId: 104,
        quantity: 1
    },
    {
        productId: 106,
        quantity: 3
    }
]