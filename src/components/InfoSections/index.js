import React from 'react'
import { Button } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    ImgWrap,
} from './InfoElements'

const InfoSection = ({
    lightBG, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    dark,
    dark2,
    primary,
    colStart,
    buttonPath,
}) => {
  return (
    <>
        <InfoContainer lightBG={lightBG} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart} colStart={colStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to={buttonPath} smooth={true}
                                duration={500} spy={true} exact="true"
                                offset={-80} primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                        </TextWrapper>
                    </Column3>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection