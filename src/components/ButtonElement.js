import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#0a80ff' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '26px 550px' : '18px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '35px' : '27px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#0a80ff')};
    }
    `