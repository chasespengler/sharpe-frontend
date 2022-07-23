import React from 'react'
import {
    TiersContainer,
    GridWrapper,
} from './TiersElements'
import TierSection from '../../components/TierSection'
import { tierObjOne } from '../../components/TierSection/Data'

/* <TierSection {...tierObjOne} /> */

const Tiers = () => {
  return (
    <TiersContainer>
        <GridWrapper>
          <TierSection {...tierObjOne} />
        </GridWrapper>
    </TiersContainer>
  )
}

export default Tiers