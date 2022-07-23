import IMG1 from '../images/svg-1.svg'
import IMG2 from '../images/svg-2.svg'
import IMG3 from '../images/svg-3.svg'
import IMG4 from '../images/svg-4.svg'
import IMG5 from '../images/svg-5.svg'


export const homeObjOne = {
    id: 'about',
    lightBG: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Manage your portfolio with confidence',
    headline: "We do the heavy lifting for you so you don't have to worry",
    description: 'Built to provide a solution for all investors at a fraction of the cost, {myFin} provides a one stop shop for all of your portfolio management needs. Whether you want full automation or to have full autonomy, we provide the tools to help you optimize the way you invest.',
    buttonLabel: 'Meet the team',
    imgStart: false,
    img: IMG1,
    alt: 'image',
    dark: true,
    primary: true,
    darkText: false,
    buttonPath: '/team'
}

export const homeObjTwo = {
    id: 'analyze',
    lightBG: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Get professional insights into your portfolio',
    headline: 'Learn how to optimize your portfolio and use key metrics to manage your portfolio health',
    description: "Get pertinent information and analysis of your portfolio using modern portfolio theory to help you better understand how to allocate your capital and make your money work for you. We explain how these apply to your portfolio from basic to advanced levels. Seems like too much to handle? Don't worry, we offer a completely automated tier and can provide you with just the information you desire.",
    buttonLabel: 'Learn more',
    imgStart: true,
    img: IMG4,
    alt: 'image',
    dark: false,
    primary: false,
    darkText: true,
    buttonPath: '/tiers'
}

export const homeObjThree = {
    id: 'services',
    lightBG: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Invest like a professional',
    headline: 'Gain access to the same tools and insights that professionals use',
    description: 'Sign up and find the tier that works for you! We offer an array of products including automated portfolio management to in depth analysis so you know where your money is best placed and why as well as simple insights to help you feel more confident about your portfolio without the headache.',
    buttonLabel: 'Sign up',
    imgStart: false,
    colStart: true,
    img: IMG2,
    alt: 'image',
    dark: true,
    primary: true,
    darkText: false,
    buttonPath: '/signup'
}