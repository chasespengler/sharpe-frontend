import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

/* HERO CONTENT */

export const HeroContainer = styled.div`
    background: #0c0c0c;
    max-width: 100%;
    display: flex;
    justify-content: left;
    align-items: top;
    padding: 0 20px;
    height: 75vh;
    position: relative;
    z-index: 1;
    margin-bottom: 7vh;

    &:before {
        content: '';
        position: absolute;
        max-width: 100%;
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
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    margin-left: -20px;
    position: absolute;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
`

export const HeroH1 = styled.h1`
    font-weight: bold;
    color: white;
    text-align: left;
    font-size: 300%;
    margin-bottom: 55px;
    max-width: 100%;
    padding-left: 10px;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 22vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-left: 20px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`