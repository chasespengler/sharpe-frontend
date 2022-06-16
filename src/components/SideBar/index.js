import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap,
    SidebarWrapper
} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="analyze" onClick={toggle}>
                    Analyze
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin" onClick={toggle}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar