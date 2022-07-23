import React from 'react'
import {
    TierSectionContainer,
    TierRow,
    TierName,
    TierWrapper,
    Col1,
    Col2,
    Col3,
    Description,
    Pricing,
} from './TierSectionElements'

const TierSection = (
    tierLightBG,
    tierName,
    tierPricing,
    id,
    tierDesc,
    tierLightTxt
    ) => {
  return (
    <TierSectionContainer tierLightBG={tierLightBG} id={id}>
        <TierWrapper tierLightTxt = {tierLightTxt}>
            <TierRow>
                <Col1>
                    <TierName>
                        {tierName}
                    </TierName>
                </Col1>
                <Col2>
                    <Pricing>
                        {tierPricing}
                    </Pricing>
                </Col2>
                <Col3>
                    <Description>
                        {tierDesc}
                    </Description>
                </Col3>
            </TierRow>
        </TierWrapper>
    </TierSectionContainer>
  )
}

export default TierSection