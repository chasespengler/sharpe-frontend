import React, {useState} from 'react'
import Video from '../../videos/guyreading.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer,
    HeroBG,
    VideoBG,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
        <HeroBG>
            <VideoBG autoPlay muted loop src={Video} type='video/mp4' />
        </HeroBG>
        <HeroContent>
            <HeroH1>
                Welcome, Investor.
            </HeroH1>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} 
                onMouseLeave={onHover} primary="true" dark="true"
                onClick={'onLogIn'}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection