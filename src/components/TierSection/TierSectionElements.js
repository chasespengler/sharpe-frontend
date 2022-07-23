import styled from 'styled-components'

export const TierSectionContainer = styled.div`
    background: ${({tierLightBG}) => (tierLightBG ? '#f9f9f9' : '#010606')};
    border-radius: 10px;
    margin: 10px 100px;
`

export const TierWrapper = styled.div`
    color: ${({tierLightTxt}) => (tierLightTxt ? '#f9f9f9' : '#010606')};
    display: grid;
    height: auto;
    min-height: 150px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const TierRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2' 'col3';
    }
`

export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Col3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`

export const TierName = styled.p`
    font-weight: bold;
    color: black;
`

export const Pricing = styled.p`
    font-weight: bold;
    color: black;
`

export const Description = styled.p`
    font-weight: bold;
    color: black;
`