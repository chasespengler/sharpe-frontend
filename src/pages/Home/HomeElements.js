import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HomeContainer = styled.div`
    padding: 7vh 0;
    background: rgba(0, 0, 0, 0.95);
    width: 100vw;
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
    padding: 0 20px;
    height: 75vh;
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
    width: 100vw;
    position: absolute;
    padding: 8px 0;
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
    margin-top: 22vh;
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
