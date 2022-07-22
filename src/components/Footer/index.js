import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterDisclaimer,
    FooterProperty
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterDisclaimer id='disclaimer'>
                Disclaimer: Sharpe Analysis is not a registered investment, legal, or tax advisor or broker/dealer.
                All investment/financial opinions expressed by Sharpe Analysis are from the personal research
                and experience of the owner of the site and are intended as educational material. Although
                best efforts are made to ensure that all information is accurate and up to date,
                occasionally unintended errors and misprints occur.
            </FooterDisclaimer>
            <FooterProperty id='property'>
                Sharpe Analysis is owned and operated by Knox Capital, LLC.
            </FooterProperty>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer