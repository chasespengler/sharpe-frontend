import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavElements'

const NavBar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <h1>Sharpe Analysis</h1>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="analyze">
                            Analyze
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">
                            Services
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Contact
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default NavBar