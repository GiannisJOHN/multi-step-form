import arcadeImage from '../../assets/images/icon-arcade.svg'
import advancedImage from '../../assets/images/icon-advanced.svg'
import proImage from '../../assets/images/icon-pro.svg'

export const cardInfo = [
    {
        name: 'Arcade',
        img: arcadeImage,
        price: {
            monthly: 9,
            yearly: 90
        },
        yearlyInfo: '2 months free'
    }, {
        name: 'Advanced',
        img: advancedImage,
        price: {
            monthly: 12,
            yearly: 120
        },
        yearlyInfo: '2 months free'
    }, {
        name: 'Pro',
        img: proImage,
        price: {
            monthly: 15,
            yearly: 150
        },
        yearlyInfo: '2 months free'
    }
]