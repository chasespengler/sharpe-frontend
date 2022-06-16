import React from 'react'
import {
    HomeContainer,
    HomeHeader,
    PortfolioInputContainer,
    TickerInput,
    TickerTextBox,
    SubmitBtn,
    PortfolioList,
} from './HomeElements'

const Home = () => {

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

    function handleTickers(e) {
        /* handles the button click logic
            passes ticker and share amount to createPort
            to create portfolio */
        const ticker = document.getElementById("ticker-input").value
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
                <SubmitBtn onClick={handleTickers}>Submit</SubmitBtn>
                <PortfolioList></PortfolioList>
            </TickerInput>
        </PortfolioInputContainer>
    </HomeContainer>
  )
}

export default Home