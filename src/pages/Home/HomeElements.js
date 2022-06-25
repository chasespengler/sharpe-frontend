import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const HomeContainer = styled.div`
    max-width: 1300px;
    padding: 0 10px;
`

export const HomeHeader = styled.h1`
    font-weight: bold;
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