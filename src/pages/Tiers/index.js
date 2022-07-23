import React from 'react'
import {
    TiersContainer,
    GridWrapper,
    TierRow,
} from './TiersElements'
import { tierObjOne } from '../../components/TierSection/Data'

const Tiers = () => {
  return (
    <TiersContainer>
        <GridWrapper>
            <TierRow {...tierObjOne} />
        </GridWrapper>
    </TiersContainer>
  )
}

export default Tiers