import React, { Component, useState } from 'react'
import {Button} from './ButtonElement'
import {
    HomeContainer,
    HomeHeader,
    PortfolioInputContainer,
    TickerInput,
    TickerTextBox,
    AddBtn,
    PortfolioList,
    HeroContainer,
    HeroContent,
    HeroBG,
    VideoBG,
    HeroH1,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
} from './HomeElements';
import Video from '../../videos/coinbackground.mp4'
import Modal from '../../components/Modal'

const Home = () => {

    /*Get Started button hover logic*/
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
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
        <HomeHeader>Hello, Investor.</HomeHeader>
        <PortfolioInputContainer>
            <TickerInput>
                <TickerTextBox id="ticker-input"></TickerTextBox>
                <AddBtn onClick={handleTickers}>Add a Stock to Your Portfolio</AddBtn>
                <PortfolioList>{port}</PortfolioList>
            </TickerInput>
        </PortfolioInputContainer>
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Welcome, Investor
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} 
                    onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </HomeContainer>
  )
}

export default Home