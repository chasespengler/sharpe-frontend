import styled from 'styled-components'

export const FooterContainer = styled.div`
    min-height: 100px;
    background: #000;
    height: auto;
`

export const FooterWrapper = styled.div`
    font: 10px;
    color: white;
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'disclaimer property';
`

export const FooterDisclaimer = styled.div`
    font-size: 13px;
    text-align: center;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        font-size: 9px;
        padding: 0 10px;
    }
`

export const FooterProperty = styled.div`
    font-size: 15px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 11px;
    }
`