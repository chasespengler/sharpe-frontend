import React, { Component, useState } from 'react'
import {Button} from './ButtonElement'
import {
    HomeContainer,
    HeroContainer,
    HeroContent,
    HeroBG,
    VideoBG,
    HeroH1,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
    AboutContainer,
} from './HomeElements';
import Video from '../../videos/guyreading.mp4'
import Modal from '../../components/Modal'

/* add <LogInModal /> */

const Home = () => {

    /*Get Started button hover logic*/
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    /*Show login functionality*/
    const [showLogin, setLogIn] = useState(false)

    const onLogIn = () => {
        setLogIn(!showLogin)
    }

    /* modal toggle */
    var modal = false;

    /* portfolio array */
    var port = []

    /* adds tickers to port array */
    function createPort(tick) {
        port.push(tick)
        console.log(port)
    }

    function emptyPort() {
        /* empties portfolio list */
        var port = []
    }

    function handleAdd(e) {
        handleTickers(e)
        const modal = true
    }

    function handleTickers(e) {
        /* handles the button click logic
            passes ticker and share amount to createPort
            to create portfolio */
        const ticker = document.getElementById("ticker-input").value;
        document.getElementById("ticker-input").value = ''
        if (ticker) {
            console.log(ticker)
            createPort(ticker)
        } else {
            console.log("Please enter a valid ticker")
        }
    }

  return (
    <HomeContainer>
        <HeroContainer>
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
                    onClick={onLogIn}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        <AboutContainer>
            ABOUT THE HOMIES
        </AboutContainer>
    </HomeContainer>
  )
}

export default Home