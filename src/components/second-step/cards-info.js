import arcadeImage from '../../assets/images/icon-arcade.svg'
import advancedImage from '../../assets/images/icon-advanced.svg'
import proImage from '../../assets/images/icon-pro.svg'

export const cardInfo = [
    {
        name: 'Arcade',
        img: arcadeImage,
        price: {
            pricingMonthly: 9,
            pricingYearly: 90
        },
        yearlyInfo: '2 months free'
    }, {
        name: 'Advanced',
        img: advancedImage,
        price: {
            pricingMonthly: 12,
            pricingYearly: 120
        },
        yearlyInfo: '2 months free'
    }, {
        name: 'Pro',
        img: proImage,
        price: {
            pricingMonthly: 15,
            pricingYearly: 150
        },
        yearlyInfo: '2 months free'
    }
]