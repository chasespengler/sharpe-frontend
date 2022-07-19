import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HomeContainer = styled.div`
    max-width: 1300px;
`

export const HomeHeader = styled.h1`
    font-weight: bold;
    padding-left: 10px;
`

export const PortfolioInputContainer = styled.div`
    border: black 5px solid;
    border-radius: 25px;
    margin: 10px;
    display: flex;
`

export const TickerInput = styled.span`
    padding: 2px;
`

export const TickerTextBox = styled.input`
    border-radius: 25px;
    margin: 10px auto;
    min-height: 25px;
    text-align: center;
    font-weight: bold;
    background: rgba(23, 45, 67, 0.2);
`

export const AddBtn = styled.p`
    justify-content: center;
    display: flex;
    padding: 5px;
    border: 1px solid black;
    border-radius: 50px;
    background: #106061;
    color: white;
    cursor: pointer;
`

export const PortfolioList = styled.span`
    margin: 1px;
`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: top;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        width: 100vw;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
         transparent 100%);
        z-index: 2;
    }
`

export const HeroBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100vw;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    font-weight: bold;
    color: white;
    text-align: left;
    margin-bottom: 55px;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
